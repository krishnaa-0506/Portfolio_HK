"use client";
import React, { useRef, useState } from 'react';

interface HolographicCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const HolographicCard: React.FC<HolographicCardProps> = ({ 
  children, 
  className = '',
  intensity = 1
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * 15 * intensity;
    const rotateY = ((centerX - x) / centerX) * 15 * intensity;
    
    setTransform(`
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      scale3d(1.02, 1.02, 1.02)
    `);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      className={`
        relative overflow-hidden rounded-lg
        transition-all duration-300 ease-out
        ${className}
      `}
      style={{
        transform: transform,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Holographic overlay */}
      <div 
        className={`
          absolute inset-0 z-10 pointer-events-none
          transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          background: `
            linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.1) 0%,
              transparent 25%,
              transparent 75%,
              rgba(148, 124, 176, 0.2) 100%
            )
          `,
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Shimmer effect */}
      <div 
        className={`
          absolute inset-0 z-20 pointer-events-none
          transition-all duration-500
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          background: `
            linear-gradient(
              45deg,
              transparent 30%,
              rgba(255, 255, 255, 0.3) 50%,
              transparent 70%
            )
          `,
          backgroundSize: '200% 200%',
          animation: isHovered ? 'holographicShimmer 2s ease-in-out infinite' : 'none'
        }}
      />
      
      {/* Glow effect */}
      <div 
        className={`
          absolute inset-0 z-0 rounded-lg
          transition-all duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          boxShadow: `
            0 0 30px rgba(148, 124, 176, 0.4),
            0 0 60px rgba(217, 165, 178, 0.2),
            inset 0 0 30px rgba(255, 255, 255, 0.1)
          `
        }}
      />
      
      {/* Content */}
      <div className="relative z-30">
        {children}
      </div>
    </div>
  );
};

export default HolographicCard;