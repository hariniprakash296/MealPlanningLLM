import React from 'react';

const Calendar: React.FC = () => {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  const currentYear = new Date().getFullYear();

  // Sample days for the calendar
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1).slice(0, 30); // Adjust for the month

  return (
    <div className="flex flex-col border rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">{`${currentMonth} ${currentYear}`}</h2>
        <div className="flex space-x-2">
          <button className="bg-gray-200 p-2 rounded">◀</button>
          <button className="bg-gray-200 p-2 rounded">▶</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
          <div key={day} className="font-bold text-center">{day}</div>
        ))}
        {daysInMonth.map((day) => (
          <div key={day} className={`text-center p-2 rounded ${day === 10 ? 'bg-gray-300' : ''}`}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;

