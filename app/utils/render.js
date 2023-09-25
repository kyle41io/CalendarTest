import { daysInMonth } from './constants';
import React from 'react';
import { MONTHS, DAYS_OF_WEEK } from './constants';

export const renderCalendar = (month, year, selectedDates, handleDateClick) => {
  const firstDayOfMonth = 1;
  const lastDayOfMonth = daysInMonth(month, year);
  const totalDays = daysInMonth(month, year);
  const firstDay = new Date(year, month - 1, 1).getDay();
  const days = [];

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
      <div key={i} className={`rounded-full m-1.5 p-1.5 text-center justify-center cursor-pointer hover:bg-slate-300 ${classNames}`} onClick={() => handleDateClick(i)}>
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

