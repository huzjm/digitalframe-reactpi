import React, { useState, useEffect } from 'react';
import WidgetCard from './WidgetCard';
import { Clock as ClockIcon } from 'lucide-react';

export default function Clock() {
  const [time, setTime] = useState({ calgary: '', karachi: '' });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      const calgaryTime = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'America/Edmonton',
      }).format(now);
      const karachiTime = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Karachi',
      }).format(now);
      setTime({ calgary: calgaryTime, karachi: karachiTime });
    };

    updateClocks();  
    const timer = setInterval(updateClocks, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <WidgetCard
      title="Clock"
      icon={<ClockIcon className="w-6 h-6" />}
      blurLevel="sm"
      height="h-[25%]"
    >
      <div className="flex flex-col h-full justify-center items-center space-y-2 text-white">
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Calgary:</span>
          <span className="text-2xl font-mono">{time.calgary}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Karachi:</span>
          <span className="text-2xl font-mono">{time.karachi}</span>
        </div>
      </div>
    </WidgetCard>
  );
}
