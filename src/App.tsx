import React from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import GradientOverlay from './components/GradientOverlay';
import Messaging from './components/widgets/Messaging';
import Clock from './components/widgets/Clock';
import Photos from './components/widgets/Photos';
import Functions from './components/widgets/Functions';

export default function App() {
  return (
    <div className="relative w-[1280px] h-[720px] overflow-hidden rounded-2xl">
      <BackgroundVideo src="/background.mp4" />
      <GradientOverlay />

      <div className="relative z-10 flex flex-row p-6 w-full h-full gap-4">
        {/* Column 1 */}
        <div className="flex flex-col gap-4 w-[55%] h-full">
          <Messaging />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 w-[45%] h-full">
          <Clock />
          <Photos />
          <Functions />
        </div>
      </div>
    </div>
  );
}