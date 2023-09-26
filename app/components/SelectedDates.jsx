import React, { useState } from 'react';
import CalendarIcon from '@/public/icons/CalendarIcon';

const SelectedDates = ({selectedDates, handleShowCalendar}) => {
  const [formatDate, setFormatDate] = useState('en-US');

  const onChangeFormatDate = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === '1') {
      setFormatDate('en-US');
    } else if (selectedValue === '2') {
      setFormatDate('vi-VN');
    }
  };

  let dates = [];

  if (Array.isArray(selectedDates)) {
    dates = selectedDates;
  } else {
    dates = [selectedDates];
  }

  return (
    <div className='flex-col justify-center items-center'>
      <select
        className=" cursor-pointer text-sm" onChange={onChangeFormatDate}
      >
        <option value="1">MM/DD/YY</option>
        <option value="2">DD/MM/YY</option>
      </select>
      <div className="flex border p-1">
        <button onClick={handleShowCalendar}>
          <CalendarIcon />
        </button>
        <div className="w-80 h-auto flex overflow-auto">
          {dates.map((date) => (
            <div key={date} className="px-2">
              {new Date(date).toLocaleDateString(formatDate)}
            </div>
          ))}
        </div>
      </div>
      
      
    </div>
  );
};

export default SelectedDates;