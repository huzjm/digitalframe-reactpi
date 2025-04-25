import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundVideoProps {
  src: string;
}

export default function BackgroundVideo({ src }: BackgroundVideoProps) {
  return (
    <motion.video
      autoPlay
      muted
      loop
      
      transition={{  repeat: Infinity, repeatType: 'reverse' }}
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={src} type="video/mp4" />
    </motion.video>
  );
}