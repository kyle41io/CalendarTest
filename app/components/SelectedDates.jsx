import React from 'react';

const SelectedDates = ({ selectedDates, locale }) => {
  let dates = [];

  if (Array.isArray(selectedDates)) {
    dates = selectedDates;
  } else {
    dates = [selectedDates];
  }

  return (
    <div className='flex-col justify-center items-center'>
      <div className="text-xl font-semibold my-4 text-center">Các ngày đã chọn</div>
      <div className="w-full h-auto flex border">
        {dates.map((date) => (
          <div key={date} className="p-2">
            {new Date(date).toLocaleDateString(locale)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedDates;