import PrevIcon from '@/public/icons/PrevIcon';
import NextIcon from '@/public/icons/NextIcon';
import React, { useState } from 'react';
import { YEARS } from '../utils/index';
import { renderCalendar } from '../utils/render';
import { getLocalizeMonth, getLocalizedDay } from '../utils';

const Calendar = ({locale="en-US", multiple, selectedDates, setSelectedDates, handleToggle } ) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const localizedMonths = getLocalizeMonth( locale);
  const localizedDays = getLocalizedDay(locale);

  const handlePrevMonth = () => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
    
  };

  const handleDateClick = (date) => {
    const clickedDate = new Date(year, month - 1, date);
    const clickedDateString = clickedDate.toISOString().split('T')[0];

    if (multiple) {
      // multiple is true
      const dateIndex = selectedDates.findIndex(
        (selectedDate) => selectedDate.toISOString().split('T')[0] === clickedDateString
      );

      if (dateIndex !== -1) {
        // date have been chosen, delete from selectedDates
        const updatedDates = [...selectedDates];
        updatedDates.splice(dateIndex, 1);
        setSelectedDates(updatedDates);
      } else {
        // date haven't been chosen, add to selectedDates
        setSelectedDates([...selectedDates, clickedDate]);
      }
    } else {
      // multiple is false
      setSelectedDates(clickedDate);
    }

  };

  const onChangeMonth = (e) => {
    const selectedMonthIndex = localizedMonths.indexOf(e.target.value);
    if (selectedMonthIndex !== -1) {
      setMonth(selectedMonthIndex + 1);
    }
  };

  const onChangeYear = (e) => {
    const selectedYear = parseInt(e.target.value, 10);
    setYear(selectedYear);
  };

  return (
    <>
      <div className="w-96 border-[2px] p-4 rounded-md bg-gray-100 shadow-lg">
        <div className="flex justify-between">
          <h1 className="font-bold text-xl mb-4">Calendar</h1>
          <label htmlFor="toggle" className="flex items-center cursor-pointer">
            <span className="mr-2">Multiple:</span>
            <input
              id="toggle"
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
              checked={multiple}
              onChange={handleToggle}
            />
          </label>
        </div>
        <div className="flex justify-between mb-3">
          <button onClick={handlePrevMonth}>
            <PrevIcon />
          </button>
          <div className="relative flex font-bold text-lg rounded-md">
            <select
              className="rounded-md border bg-slate-100 p-2 mr-2 ml-4 cursor-pointer"
              value={localizedMonths[month - 1]}
              onChange={onChangeMonth}
            >
              {localizedMonths.map((localizedMonth, index) => (
                <option key={index} value={localizedMonth}>
                  {localizedMonth}
                </option>
              ))}
            </select>
          </div>
          <div className="relative flex font-bold text-lg rounded-md">
            <select
              className="rounded-md border bg-slate-100 p-2 mr-4 ml-2 cursor-pointer"
              value={year}
              onChange={onChangeYear}
            >
              {YEARS.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <button onClick={handleNextMonth}>
            <NextIcon />
          </button>
        </div>
        <div className="grid grid-cols-7 text-center items-center justify-around py-4">
          {localizedDays.map((localizedDay, index) => (
            <div key={index} className="font-bold">
              {localizedDay}
            </div>
          ))}
        </div>
        <div className="grid gap-1 grid-cols-7">
        {renderCalendar(month, year, selectedDates, handleDateClick)}
        </div>
      </div>
    </>
  );
};

export default Calendar;