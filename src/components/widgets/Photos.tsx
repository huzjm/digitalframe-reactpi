import React from 'react';
import WidgetCard from './WidgetCard';
import { Image as ImageIcon } from 'lucide-react';

export default function Photos() {
  return (
    <WidgetCard
          title="Photos"
          icon={<ImageIcon className="w-6 h-6" />}
          blurLevel="md"
          height="h-[55%]" children={undefined}    >
      {/* Photo Thumbnails Placeholder */}
    </WidgetCard>
  );
}