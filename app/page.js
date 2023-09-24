"use client"
import Calendar from './components/Calendar';
import SelectedDates from './components/SelectedDates';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Calendar />
    </main>
  )
}
