import PrevIcon from '@/public/icons/PrevIcon';
import NextIcon from '@/public/icons/NextIcon';
import SelectIcon from '@/public/icons/SelectIcon';
import React, { useState, useEffect } from 'react';
import { MONTHS } from '../utils/constants';
import SelectedDates from './SelectedDates';
import { renderCalendar, renderMonthDropdown, renderYearDropdown} from '../utils/index';

const Calendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(month);
  const [selectedYear, setSelectedYear] = useState(year);
  const [selectedDates, setSelectedDates] = useState([]);

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

    if (selectedDates !== null) {
      const dateIndex = selectedDates.findIndex(
        (selectedDate) => selectedDate.toISOString().split('T')[0] === clickedDateString
      );
      if (dateIndex !== -1) {
        // Ngày đã được chọn trước đó, xóa khỏi mảng selectedDates
        const updatedDates = [...selectedDates];
        updatedDates.splice(dateIndex, 1);
        setSelectedDates(updatedDates);
      } else {
        // Ngày chưa được chọn, thêm vào mảng selectedDates
        setSelectedDates([...selectedDates, clickedDate]);
      }
    } else {
      // Ngày chưa được chọn, thêm vào mảng selectedDates
      setSelectedDates([clickedDate]);
    }
  };  

  const handleMonthClick = () => {
    setShowMonthDropdown(!showMonthDropdown);
    setSelectedMonth(month);
  };
  
  const handleYearClick = () => {
    setShowYearDropdown(!showYearDropdown);
    setSelectedYear(year);
  };
  
  const handleMonthSelect = (selectedMonth) => {
    setMonth(selectedMonth);
    setShowMonthDropdown(false);
    setSelectedDates(null);
    setSelectedMonth(selectedMonth);
  };
  
  const handleYearSelect = (selectedYear) => {
    setYear(selectedYear);
    setShowYearDropdown(false);
    setSelectedDates(null);
    setSelectedYear(selectedYear);
  };
  return (
    <>
      <div className="w-96 border-[2px] p-4 rounded-md bg-gray-100 shadow-lg">
        <h1 className='font-bold text-xl mb-4'>Calendar</h1>
        <div className="flex justify-between mb-3">
          <button onClick={handlePrevMonth}><PrevIcon /></button>
          <div className="relative flex font-bold text-lg rounded-md border-2 p-1 pl-2 cursor-pointer" onClick={handleMonthClick}>{`${MONTHS[month - 1]}`}{renderMonthDropdown(showMonthDropdown, handleMonthSelect,selectedMonth)} <SelectIcon /></div>
          <div className="relative flex font-bold text-lg rounded-md border-2 p-1 pl-2 cursor-pointer" onClick={handleYearClick}>{`${year}`}{renderYearDropdown(showYearDropdown, handleYearSelect, selectedYear)} <SelectIcon /></div>

          <button onClick={handleNextMonth}><NextIcon /></button>
        </div>
        <div className="grid gap-1 grid-cols-7">{renderCalendar(month, year, selectedDates, handleDateClick)}</div>
      </div>
      <SelectedDates selectedDates={selectedDates} />
    </>
    
  );
};

export default Calendar;