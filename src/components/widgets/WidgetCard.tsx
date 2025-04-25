import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface WidgetCardProps {
  title: string;
  icon: React.ReactNode;
  blurLevel?: 'none' | 'sm' | 'md';
  height?: string;
  children: React.ReactNode;
}

export default function WidgetCard({
  title,
  icon,
  blurLevel = 'md',
  height = 'h-full',
  children,
}: WidgetCardProps) {
  const blurClass =
    blurLevel === 'none'
      ? 'backdrop-blur-0'
      : blurLevel === 'sm'
      ? 'backdrop-blur-[2px]'
      : 'backdrop-blur-[1px]';

  return (
    <div className={`${height} w-full`}>
      <Card className={`w-full h-full bg-white/10 ${blurClass} border border-white/20 rounded-3xl shadow-2xl transition-transform flex flex-col`}>
        <CardHeader>
          <div className="flex items-center space-x-2 text-xl font-semibold text-white">
            {icon}
            <span>{title}</span>
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center text-white">
          {children}
        </CardContent>
      </Card>
    </div>
  );
}