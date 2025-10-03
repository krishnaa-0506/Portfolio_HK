"use client";
import React from 'react';
import { useScrollProgress } from '@/hooks/use-advanced-scroll-animations';

const ScrollProgressIndicator: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-background/20 backdrop-blur-sm z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-300 ease-out neural-pulse"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Circular Progress Indicator */}
      <div className="fixed bottom-8 right-8 w-16 h-16 z-50">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          {/* Background circle */}
          <path
            className="stroke-current text-muted-foreground/20"
            strokeWidth="3"
            fill="transparent"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          {/* Progress circle */}
          <path
            className="stroke-current text-primary energy-field"
            strokeWidth="3"
            strokeLinecap="round"
            fill="transparent"
            strokeDasharray={`${progress}, 100`}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-primary neural-pulse">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </>
  );
};

export default ScrollProgressIndicator;