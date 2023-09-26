"use client"
import React, { useState, useRef, useEffect } from 'react';
import Calendar from './components/Calendar';
import SelectedDates from './components/SelectedDates';

export default function Home() {
  const [selectedDates, setSelectedDates] = useState([]);
  const [multiple, setMultiple] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef(null);

  const handleToggle = () => {
    setMultiple(!multiple);
    if (!multiple) {
      setSelectedDates([]);
    }
  };

  const handleShowCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <SelectedDates  selectedDates={selectedDates} handleShowCalendar={handleShowCalendar} />
      </div>
      {showCalendar && (
        <div ref={calendarRef}>
          <Calendar
            multiple={multiple}
            selectedDates={selectedDates}
            setSelectedDates={setSelectedDates}
            handleToggle={handleToggle}
          />
        </div>
      )}
    </main>
  );
}