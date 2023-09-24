import { daysInMonth } from './constants';
import React from 'react';
import { MONTHS, DAYS_OF_WEEK } from './constants';

export const renderCalendar = (month, year, selectedDates, handleDateClick) => {
  const firstDayOfMonth = 1;
  const lastDayOfMonth = daysInMonth(month, year);
  const totalDays = daysInMonth(month, year);
  const firstDay = new Date(year, month - 1, 1).getDay();
  const days = [];

  // Render weekdays
  for (let i = 0; i < DAYS_OF_WEEK.length; i++) {
    days.push(
      <div key={`weekday-${i}`} className="ml-2.5 font-semibold">
        {DAYS_OF_WEEK[i]}
      </div>
    );
  }

  // Add empty cells for days before the first day of the month
  const lastDayOfPreviousMonth = new Date(year, month - 1, 0).getDate();
  for (let i = 0; i < firstDay; i++) {
    const previousMonthDate = lastDayOfPreviousMonth - firstDay + i + 1;
    days.push(
      <div key={`previous-month-${i}`} className="opacity-50 rounded-full m-1.5 p-1.5 text-center justify-center">
        {previousMonthDate}
      </div>
    );
  }

  // Add cells for each day in the month
  for (let i = 1; i <= totalDays; i++) {
    const isActive = selectedDates?.some((selectedDate) => selectedDate.toISOString().split('T')[0] === new Date(year, month - 1, i).toISOString().split('T')[0]);
    const classNames = `day ${isActive ? 'bg-blue-500 text-white shadow-lg' : ''}`;

    days.push(
      <div key={i} className={`rounded-full m-1.5 p-1.5 text-center justify-center cursor-pointer ${classNames}`} onClick={() => handleDateClick(i)}>
        {i}
      </div>
    );
  }

  // Add empty cells for days after the last day of the month
  const firstDayOfNextMonth = new Date(year, month, 1).getDay();
  for (let i = 0; i < 7 - firstDayOfNextMonth; i++) {
    const nextMonthDate = i + 1;
    days.push(
      <div key={`next-month-${i}`} className="opacity-50 rounded-full m-1.5 p-1.5 text-center justify-center">
        {nextMonthDate}
      </div>
    );
  }

  return days;
};


export const renderMonthDropdown = (showMonthDropdown, handleMonthSelect, selectedMonth) => {
  if (!showMonthDropdown) {
    return null;
  }

  return (
    <div className="absolute bg-white mx-2 w-16 mt-1.5 -ml-2 shadow-lg z-50">
      {MONTHS.map((month, index) => (
        <div
          key={`month-${index}`}
          className={`w-full p-1 pl-2.5 font-semibold hover:bg-blue-400 hover:text-white cursor-pointer ${
            selectedMonth === index + 1 ? 'bg-blue-400 text-white' : ''
          }`}
          onClick={() => handleMonthSelect(index + 1)}
        >
          {month}
        </div>
      ))}
    </div>
  );
};

export const renderYearDropdown = (showYearDropdown, handleYearSelect, selectedYear) => {
  if (!showYearDropdown) {
    return null;
  }

  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear - 90; year <= currentYear + 90; year++) {
    years.push(year);
  }

  return (
    <div className="absolute w-20 h-80 mx-2 mt-1.5 overflow-auto bg-white -ml-2 shadow-lg z-50">
      {years.map((year) => (
        <div
          key={`year-${year}`}
          className={`p-1 font-semibold hover:bg-blue-400 hover:text-white cursor-pointer ${
            selectedYear === year ? 'bg-blue-400 text-white' : ''
          }`}
          onClick={() => handleYearSelect(year)}
        >
          {year}
        </div>
      ))}
    </div>
  );
};

