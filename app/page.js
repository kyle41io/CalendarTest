"use client"
import React, { useState } from 'react';
import Calendar from './components/Calendar';
import SelectedDates from './components/SelectedDates';

export default function Home() {
  const locale = navigator.language || navigator.userLanguage;
  const [selectedDates, setSelectedDates] = useState([]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Calendar locale={locale} selectedDates={selectedDates} setSelectedDates={setSelectedDates} />
      <SelectedDates selectedDates={selectedDates} locale={locale} />
    </main>
  );
}