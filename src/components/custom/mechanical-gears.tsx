"use client";
import React, { useEffect, useRef } from 'react';

interface Gear {
  x: number;
  y: number;
  radius: number;
  teeth: number;
  rotation: number;
  speed: number;
  color: string;
  depth: number;
}

const MechanicalGears: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const gearsRef = useRef<Gear[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Create gears
      const gears: Gear[] = [
        {
          x: canvas.width * 0.2,
          y: canvas.height * 0.3,
          radius: 60,
          teeth: 16,
          rotation: 0,
          speed: 0.02,
          color: '#947CB0',
          depth: 10
        },
        {
          x: canvas.width * 0.35,
          y: canvas.height * 0.45,
          radius: 40,
          teeth: 12,
          rotation: 0,
          speed: -0.024,
          color: '#D9A5B2',
          depth: 15
        },
        {
          x: canvas.width * 0.8,
          y: canvas.height * 0.2,
          radius: 80,
          teeth: 20,
          rotation: 0,
          speed: 0.015,
          color: '#A8B5E6',
          depth: 8
        },
        {
          x: canvas.width * 0.7,
          y: canvas.height * 0.6,
          radius: 35,
          teeth: 10,
          rotation: 0,
          speed: -0.03,
          color: '#E6A8D5',
          depth: 12
        },
        {
          x: canvas.width * 0.15,
          y: canvas.height * 0.7,
          radius: 50,
          teeth: 14,
          rotation: 0,
          speed: 0.025,
          color: '#947CB0',
          depth: 18
        }
      ];
      
      gearsRef.current = gears;
    };

    const drawGear = (gear: Gear) => {
      ctx.save();
      ctx.translate(gear.x, gear.y);
      ctx.rotate(gear.rotation);

      // 3D effect - draw back layer first
      ctx.save();
      ctx.translate(3, 3);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      drawGearShape(gear.radius, gear.teeth, true);
      ctx.restore();

      // Main gear body with gradient
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, gear.radius);
      gradient.addColorStop(0, gear.color);
      gradient.addColorStop(0.7, gear.color + '80');
      gradient.addColorStop(1, gear.color + '40');
      
      ctx.fillStyle = gradient;
      drawGearShape(gear.radius, gear.teeth);

      // Inner circle with metallic effect
      const innerGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, gear.radius * 0.3);
      innerGradient.addColorStop(0, '#FFFFFF');
      innerGradient.addColorStop(0.5, gear.color);
      innerGradient.addColorStop(1, '#000000');
      
      ctx.fillStyle = innerGradient;
      ctx.beginPath();
      ctx.arc(0, 0, gear.radius * 0.3, 0, Math.PI * 2);
      ctx.fill();

      // Center hole
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(0, 0, gear.radius * 0.1, 0, Math.PI * 2);
      ctx.fill();

      // Highlight for 3D effect
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(-gear.radius * 0.2, -gear.radius * 0.2, gear.radius * 0.8, 0, Math.PI * 0.5);
      ctx.stroke();

      ctx.restore();
    };

    const drawGearShape = (radius: number, teeth: number, isShadow = false) => {
      const angleStep = (Math.PI * 2) / teeth;
      const toothHeight = radius * 0.2;
      const innerRadius = radius - toothHeight;

      ctx.beginPath();
      
      for (let i = 0; i < teeth; i++) {
        const angle = i * angleStep;
        const nextAngle = (i + 1) * angleStep;
        
        // Outer tooth point
        const x1 = Math.cos(angle) * radius;
        const y1 = Math.sin(angle) * radius;
        
        // Inner valley point
        const x2 = Math.cos(angle + angleStep * 0.3) * innerRadius;
        const y2 = Math.sin(angle + angleStep * 0.3) * innerRadius;
        
        // Next inner valley point
        const x3 = Math.cos(nextAngle - angleStep * 0.3) * innerRadius;
        const y3 = Math.sin(nextAngle - angleStep * 0.3) * innerRadius;
        
        if (i === 0) {
          ctx.moveTo(x1, y1);
        } else {
          ctx.lineTo(x1, y1);
        }
        
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
      }
      
      ctx.closePath();
      
      if (!isShadow) {
        ctx.fill();
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();
      } else {
        ctx.fill();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw gears
      gearsRef.current.forEach(gear => {
        gear.rotation += gear.speed;
        drawGear(gear);
      });

      // Draw connecting mechanisms
      drawConnections();

      animationRef.current = requestAnimationFrame(animate);
    };

    const drawConnections = () => {
      const gears = gearsRef.current;
      
      // Draw chains/belts between some gears
      if (gears.length >= 2) {
        ctx.strokeStyle = 'rgba(100, 100, 100, 0.5)';
        ctx.lineWidth = 3;
        ctx.setLineDash([10, 5]);
        
        ctx.beginPath();
        ctx.moveTo(gears[0].x, gears[0].y);
        ctx.lineTo(gears[1].x, gears[1].y);
        ctx.stroke();
        
        if (gears.length >= 4) {
          ctx.beginPath();
          ctx.moveTo(gears[2].x, gears[2].y);
          ctx.lineTo(gears[3].x, gears[3].y);
          ctx.stroke();
        }
        
        ctx.setLineDash([]);
      }
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

export default MechanicalGears;