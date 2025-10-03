"use client";
import React, { useEffect, useRef } from 'react';

interface FieldLine {
  points: { x: number; y: number }[];
  intensity: number;
  phase: number;
}

const MagneticField: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const animationRef = useRef<number>();
  const fieldLinesRef = useRef<FieldLine[]>([]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const resizeSVG = () => {
      svg.setAttribute('width', window.innerWidth.toString());
      svg.setAttribute('height', window.innerHeight.toString());
      
      // Create magnetic field lines
      const lines: FieldLine[] = [];
      const lineCount = 15;
      
      for (let i = 0; i < lineCount; i++) {
        const points: { x: number; y: number }[] = [];
        const startY = (window.innerHeight / lineCount) * i;
        const intensity = Math.random() * 0.5 + 0.3;
        const phase = Math.random() * Math.PI * 2;
        
        // Create curved field line points
        for (let x = 0; x <= window.innerWidth; x += 20) {
          const y = startY + Math.sin((x * 0.005) + phase) * 50 * intensity;
          points.push({ x, y });
        }
        
        lines.push({ points, intensity, phase });
      }
      
      fieldLinesRef.current = lines;
    };

    const updateFieldLines = () => {
      const svg = svgRef.current;
      if (!svg) return;
      
      // Clear existing paths
      svg.innerHTML = '';
      
      fieldLinesRef.current.forEach((line, index) => {
        // Create SVG path
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        
        let pathData = `M ${line.points[0].x} ${line.points[0].y}`;
        for (let i = 1; i < line.points.length; i++) {
          pathData += ` L ${line.points[i].x} ${line.points[i].y}`;
        }
        
        path.setAttribute('d', pathData);
        path.setAttribute('stroke', `rgba(148, 124, 176, ${line.intensity})`);
        path.setAttribute('stroke-width', '2');
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke-dasharray', '10 5');
        path.setAttribute('class', 'magnetic-field');
        
        // Add glow effect
        path.style.filter = 'drop-shadow(0 0 5px rgba(148, 124, 176, 0.5))';
        
        svg.appendChild(path);
        
        // Update line points for animation
        line.points.forEach((point, pointIndex) => {
          point.y += Math.sin((Date.now() * 0.001) + line.phase + (pointIndex * 0.1)) * 0.5;
        });
      });
    };

    const animate = () => {
      updateFieldLines();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeSVG();
    window.addEventListener('resize', resizeSVG);
    animate();

    return () => {
      window.removeEventListener('resize', resizeSVG);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  );
};

export default MagneticField;