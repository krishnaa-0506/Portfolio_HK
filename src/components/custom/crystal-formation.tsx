"use client";
import React, { useEffect, useRef } from 'react';

interface Crystal {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  growthPhase: number;
  color: string;
  sides: number;
}

const CrystalFormation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const crystalsRef = useRef<Crystal[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Create crystals
      const crystals: Crystal[] = [];
      const crystalCount = 12;
      
      for (let i = 0; i < crystalCount; i++) {
        crystals.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 0,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          growthPhase: Math.random() * Math.PI * 2,
          color: ['#947CB0', '#D9A5B2', '#A8B5E6', '#E6A8D5'][Math.floor(Math.random() * 4)],
          sides: Math.floor(Math.random() * 3) + 6 // 6-8 sides
        });
      }
      
      crystalsRef.current = crystals;
    };

    const drawCrystal = (crystal: Crystal) => {
      ctx.save();
      ctx.translate(crystal.x, crystal.y);
      ctx.rotate(crystal.rotation);
      
      const maxSize = 30;
      const currentSize = crystal.size * maxSize;
      
      if (currentSize > 1) {
        // Outer crystal with gradient
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, currentSize);
        gradient.addColorStop(0, crystal.color + 'FF');
        gradient.addColorStop(0.7, crystal.color + '80');
        gradient.addColorStop(1, crystal.color + '20');
        
        ctx.fillStyle = gradient;
        ctx.strokeStyle = crystal.color;
        ctx.lineWidth = 2;
        
        // Draw crystal shape
        ctx.beginPath();
        for (let i = 0; i < crystal.sides; i++) {
          const angle = (i / crystal.sides) * Math.PI * 2;
          const x = Math.cos(angle) * currentSize;
          const y = Math.sin(angle) * currentSize;
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Inner crystal core
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(0, 0, currentSize * 0.2, 0, Math.PI * 2);
        ctx.fill();
        
        // Crystal facets
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 1;
        for (let i = 0; i < crystal.sides; i++) {
          const angle = (i / crystal.sides) * Math.PI * 2;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(Math.cos(angle) * currentSize, Math.sin(angle) * currentSize);
          ctx.stroke();
        }
      }
      
      ctx.restore();
    };

    const updateCrystal = (crystal: Crystal) => {
      // Growth animation
      crystal.growthPhase += 0.02;
      crystal.size = (Math.sin(crystal.growthPhase) + 1) * 0.5;
      
      // Rotation
      crystal.rotation += crystal.rotationSpeed;
      
      // Gentle floating movement
      crystal.x += Math.sin(crystal.growthPhase * 0.5) * 0.2;
      crystal.y += Math.cos(crystal.growthPhase * 0.3) * 0.2;
      
      // Boundary wrapping
      if (crystal.x < -50) crystal.x = canvas.width + 50;
      if (crystal.x > canvas.width + 50) crystal.x = -50;
      if (crystal.y < -50) crystal.y = canvas.height + 50;
      if (crystal.y > canvas.height + 50) crystal.y = -50;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      crystalsRef.current.forEach(crystal => {
        updateCrystal(crystal);
        drawCrystal(crystal);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  );
};

export default CrystalFormation;