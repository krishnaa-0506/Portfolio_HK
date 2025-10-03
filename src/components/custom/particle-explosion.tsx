"use client";
import React, { useEffect, useState } from 'react';

interface ParticleExplosionProps {
  trigger?: boolean;
  x?: number;
  y?: number;
  particleCount?: number;
  colors?: string[];
  onComplete?: () => void;
}

interface ExplosionParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
}

const ParticleExplosion: React.FC<ParticleExplosionProps> = ({
  trigger = false,
  x = 0,
  y = 0,
  particleCount = 20,
  colors = ['#947CB0', '#D9A5B2', '#A8B5E6', '#E6A8D5', '#FFD700'],
  onComplete
}) => {
  const [particles, setParticles] = useState<ExplosionParticle[]>([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (trigger && !isActive) {
      setIsActive(true);
      
      // Create explosion particles
      const newParticles: ExplosionParticle[] = [];
      
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const speed = Math.random() * 8 + 4;
        const size = Math.random() * 8 + 4;
        const maxLife = Math.random() * 60 + 40;
        
        newParticles.push({
          id: i,
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: size,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: maxLife,
          maxLife: maxLife
        });
      }
      
      setParticles(newParticles);
      
      // Animate particles
      const animateParticles = () => {
        setParticles(prevParticles => {
          const updatedParticles = prevParticles
            .map(particle => ({
              ...particle,
              x: particle.x + particle.vx,
              y: particle.y + particle.vy,
              vy: particle.vy + 0.3, // gravity
              vx: particle.vx * 0.98, // air resistance
              life: particle.life - 1,
              size: particle.size * 0.98 // shrinking
            }))
            .filter(particle => particle.life > 0);
            
          if (updatedParticles.length === 0) {
            setIsActive(false);
            onComplete?.();
          }
          
          return updatedParticles;
        });
      };
      
      const interval = setInterval(animateParticles, 16); // ~60fps
      
      return () => clearInterval(interval);
    }
  }, [trigger, isActive, x, y, particleCount, colors, onComplete]);

  if (!isActive || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full particle-explosion"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.life / particle.maxLife,
            boxShadow: `0 0 ${particle.size}px ${particle.color}`,
            transform: `translate(-50%, -50%) scale(${particle.life / particle.maxLife})`
          }}
        />
      ))}
    </div>
  );
};

export default ParticleExplosion;