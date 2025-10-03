"use client";
import React, { useState } from 'react';

interface HolographicTextProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const HolographicText: React.FC<HolographicTextProps> = ({ 
  children, 
  className = '',
  intensity = 1
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        relative inline-block cursor-pointer
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main text */}
      <div
        className={`
          relative z-10 transition-all duration-300
          ${isHovered ? 'text-transparent' : 'text-current'}
        `}
        style={{
          background: isHovered ? 
            'linear-gradient(45deg, #947CB0, #D9A5B2, #A8B5E6, #E6A8D5)' : 
            'none',
          backgroundClip: isHovered ? 'text' : 'initial',
          WebkitBackgroundClip: isHovered ? 'text' : 'initial',
          WebkitTextFillColor: isHovered ? 'transparent' : 'currentColor',
          filter: isHovered ? 'drop-shadow(0 0 10px rgba(148, 124, 176, 0.8))' : 'none'
        }}
      >
        {children}
      </div>
      
      {/* Holographic layers */}
      {isHovered && (
        <>
          {/* RGB Separation Effect */}
          <div
            className="absolute inset-0 z-0 text-red-400 opacity-30"
            style={{
              transform: `translate(${2 * intensity}px, 0)`,
              mixBlendMode: 'multiply'
            }}
          >
            {children}
          </div>
          <div
            className="absolute inset-0 z-0 text-green-400 opacity-30"
            style={{
              transform: `translate(${-1 * intensity}px, ${1 * intensity}px)`,
              mixBlendMode: 'multiply'
            }}
          >
            {children}
          </div>
          <div
            className="absolute inset-0 z-0 text-blue-400 opacity-30"
            style={{
              transform: `translate(${-2 * intensity}px, ${-1 * intensity}px)`,
              mixBlendMode: 'multiply'
            }}
          >
            {children}
          </div>
          
          {/* Glitch lines */}
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              background: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 2px,
                  rgba(255, 255, 255, 0.1) 2px,
                  rgba(255, 255, 255, 0.1) 4px
                )
              `,
              animation: 'holographicShimmer 2s ease-in-out infinite'
            }}
          />
          
          {/* Scan lines */}
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              background: `
                linear-gradient(
                  90deg,
                  transparent 0%,
                  rgba(148, 124, 176, 0.1) 50%,
                  transparent 100%
                )
              `,
              animation: 'holographicShimmer 1.5s ease-in-out infinite reverse'
            }}
          />
        </>
      )}
    </div>
  );
};

export default HolographicText;