"use client";

import React, { useState, useEffect } from 'react';

const AnimatedCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (e.target instanceof HTMLAnchorElement || e.target instanceof HTMLButtonElement) {
        setIsHoveringLink(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (e.target instanceof HTMLAnchorElement || e.target instanceof HTMLButtonElement) {
        setIsHoveringLink(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const cursorSize = isHoveringLink ? 30 : 15;
  const dotSize = 8;

  return (
    <>
      <div
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          transform: `translate(-50%, -50%) scale(${isHoveringLink ? 1.5 : 1})`,
        }}
        className="pointer-events-none fixed z-[9999] rounded-full border-2 border-primary bg-primary/30 transition-all duration-200 ease-out"
      />
      <div
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          transform: 'translate(-50%, -50%)',
        }}
        className="pointer-events-none fixed z-[9999] rounded-full bg-accent transition-transform duration-100 ease-out"
      />
    </>
  );
};

export default AnimatedCursor;
