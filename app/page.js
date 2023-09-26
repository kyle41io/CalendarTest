"use client"
import React, { useState } from 'react';
import Calendar from './components/Calendar';
import SelectedDates from './components/SelectedDates';

export default function Home() {
  const [locale, setLocale] = useState();
  const [selectedDates, setSelectedDates] = useState([]);
  const [multiple, setMultiple] = useState(false);

  const handleToggle = () => {
    setMultiple(!multiple);
    if (!multiple) {
      setSelectedDates([]);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Calendar multiple={multiple} selectedDates={selectedDates} setSelectedDates={setSelectedDates} handleToggle={handleToggle} />
      <SelectedDates selectedDates={selectedDates} locale={locale} />
    </main>
  );
}