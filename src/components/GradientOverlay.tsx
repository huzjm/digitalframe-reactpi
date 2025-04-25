import React from 'react';

export default function GradientOverlay() {
  return (
    <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-black/50 pointer-events-none" />
  );
}