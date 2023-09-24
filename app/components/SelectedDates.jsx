import React from 'react';

const SelectedDates = ({ selectedDates }) => {
  return (
    <div>
      <div className="text-xl font-semibold my-4">Các ngày đã chọn</div>
      <div className="w-full h-auto flex border">
        {selectedDates?.map((date) => (
          <div key={date} className="p-2">
            {new Date(date).toLocaleDateString('en-US')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedDates;