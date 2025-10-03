"use client";
import React, { useEffect, useRef } from 'react';

const DNAHelix: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    let time = 0;

    const drawDNAHelix = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const amplitude = 100;
      const frequency = 0.01;
      const speed = 0.02;
      
      // Draw the double helix
      for (let y = 0; y < canvas.height + 100; y += 5) {
        const angle1 = y * frequency + time * speed;
        const angle2 = angle1 + Math.PI;
        
        const x1 = centerX + Math.cos(angle1) * amplitude;
        const x2 = centerX + Math.cos(angle2) * amplitude;
        
        // First strand
        ctx.fillStyle = `hsl(${200 + Math.sin(angle1) * 20}, 70%, 60%)`;
        ctx.beginPath();
        ctx.arc(x1, y, 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Second strand
        ctx.fillStyle = `hsl(${280 + Math.sin(angle2) * 20}, 70%, 60%)`;
        ctx.beginPath();
        ctx.arc(x2, y, 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Base pairs (connections)
        if (y % 20 === 0) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 + Math.sin(angle1) * 0.2})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(x1, y);
          ctx.lineTo(x2, y);
          ctx.stroke();
          
          // Base pair nucleotides
          const midX = (x1 + x2) / 2;
          ctx.fillStyle = '#FFD700';
          ctx.beginPath();
          ctx.arc(midX - 10, y, 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(midX + 10, y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      time += 1;
    };

    const animate = () => {
      drawDNAHelix();
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
      style={{ opacity: 0.2 }}
    />
  );
};

export default DNAHelix;