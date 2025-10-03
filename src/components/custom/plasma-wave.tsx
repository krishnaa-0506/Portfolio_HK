"use client";
import React, { useEffect, useRef } from 'react';

const PlasmaWave: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createPlasmaWave = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
      
      const time = timeRef.current * 0.01;
      
      for (let y = 0; y < canvas.height; y += 2) {
        for (let x = 0; x < canvas.width; x += 2) {
          // Plasma algorithm with multiple sine waves
          const value = Math.sin(x * 0.01 + time) + 
                       Math.sin(y * 0.013 + time * 1.2) +
                       Math.sin((x + y) * 0.01 + time * 1.5) +
                       Math.sin(Math.sqrt(x * x + y * y) * 0.01 + time * 2);
          
          // Normalize value to 0-1
          const normalizedValue = (value + 4) / 8;
          
          // Create color palette based on value
          let r, g, b;
          
          if (normalizedValue < 0.33) {
            // Blue to purple
            const t = normalizedValue / 0.33;
            r = Math.floor(t * 138);
            g = Math.floor(43 + t * (63 - 43));
            b = Math.floor(226 + t * (175 - 226));
          } else if (normalizedValue < 0.66) {
            // Purple to pink
            const t = (normalizedValue - 0.33) / 0.33;
            r = Math.floor(138 + t * (255 - 138));
            g = Math.floor(63 + t * (20 - 63));
            b = Math.floor(175 + t * (147 - 175));
          } else {
            // Pink to yellow
            const t = (normalizedValue - 0.66) / 0.34;
            r = Math.floor(255);
            g = Math.floor(20 + t * (215 - 20));
            b = Math.floor(147 + t * (0 - 147));
          }
          
          const alpha = Math.floor(128 + normalizedValue * 127);
          
          // Set pixel data (for 2x2 blocks for performance)
          for (let dy = 0; dy < 2 && y + dy < canvas.height; dy++) {
            for (let dx = 0; dx < 2 && x + dx < canvas.width; dx++) {
              const index = ((y + dy) * canvas.width + (x + dx)) * 4;
              data[index] = r;     // Red
              data[index + 1] = g; // Green
              data[index + 2] = b; // Blue
              data[index + 3] = alpha; // Alpha
            }
          }
        }
      }
      
      ctx.putImageData(imageData, 0, 0);
    };

    const animate = () => {
      timeRef.current += 1;
      
      createPlasmaWave();
      
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
      style={{ 
        opacity: 0.15,
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default PlasmaWave;