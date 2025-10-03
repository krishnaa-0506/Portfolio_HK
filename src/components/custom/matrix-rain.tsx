"use client";
import React, { useEffect, useRef } from 'react';

interface MatrixChar {
  char: string;
  x: number;
  y: number;
  speed: number;
  opacity: number;
}

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const charactersRef = useRef<MatrixChar[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Create matrix characters
      const characters: MatrixChar[] = [];
      const columns = Math.floor(canvas.width / 20);
      
      // Mix of programming symbols and numbers
      const chars = '01010110101アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン{}[]()<>+-*/=;:.,?!@#$%^&*_~`|\\';
      
      for (let i = 0; i < columns; i++) {
        characters.push({
          char: chars[Math.floor(Math.random() * chars.length)],
          x: i * 20,
          y: Math.random() * canvas.height,
          speed: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.5
        });
      }
      
      charactersRef.current = characters;
    };

    const drawCharacter = (char: MatrixChar) => {
      ctx.font = '16px "Courier New", monospace';
      ctx.fillStyle = `rgba(0, 255, 65, ${char.opacity})`;
      ctx.fillText(char.char, char.x, char.y);
      
      // Add trailing effect
      ctx.fillStyle = `rgba(0, 255, 65, ${char.opacity * 0.3})`;
      ctx.fillText(char.char, char.x, char.y - 20);
      ctx.fillStyle = `rgba(0, 255, 65, ${char.opacity * 0.1})`;
      ctx.fillText(char.char, char.x, char.y - 40);
    };

    const updateCharacter = (char: MatrixChar) => {
      char.y += char.speed;
      
      // Reset character when it goes off screen
      if (char.y > canvas.height + 50) {
        char.y = -50;
        char.char = '01010110101アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン{}[]()<>+-*/=;:.,?!@#$%^&*_~`|\\'.charAt(
          Math.floor(Math.random() * 100)
        );
        char.opacity = Math.random() * 0.5 + 0.5;
        char.speed = Math.random() * 3 + 1;
      }
    };

    const animate = () => {
      // Create trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      charactersRef.current.forEach(char => {
        updateCharacter(char);
        drawCharacter(char);
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

export default MatrixRain;