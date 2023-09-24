import React from 'react';

const SelectedDates = ({ selectedDates }) => {
  return (
    <div className='flex-col justify-center items-center'>
      <div className="text-xl font-semibold my-4 text-center">Các ngày đã chọn</div>
      <div className="w-full h-auto flex border">
        {selectedDates?.map((date) => (
          <div key={date} className="p-2">
            {new Date(date).toLocaleDateString('vi-VN')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedDates;