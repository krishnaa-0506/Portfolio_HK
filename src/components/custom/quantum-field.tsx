"use client";
import React, { useEffect, useRef } from 'react';

interface QuantumParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  energy: number;
  phase: number;
  size: number;
  quantum_state: 'spin_up' | 'spin_down' | 'superposition';
}

const QuantumField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<QuantumParticle[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Create quantum particles
      const particles: QuantumParticle[] = [];
      const particleCount = 30;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          energy: Math.random() * 100,
          phase: Math.random() * Math.PI * 2,
          size: Math.random() * 4 + 2,
          quantum_state: ['spin_up', 'spin_down', 'superposition'][Math.floor(Math.random() * 3)] as 'spin_up' | 'spin_down' | 'superposition'
        });
      }
      
      particlesRef.current = particles;
    };

    const drawQuantumParticle = (particle: QuantumParticle) => {
      const time = timeRef.current;
      
      // Quantum uncertainty - particle position fluctuates
      const uncertainty_x = Math.sin(time * 0.1 + particle.phase) * 2;
      const uncertainty_y = Math.cos(time * 0.1 + particle.phase) * 2;
      
      const x = particle.x + uncertainty_x;
      const y = particle.y + uncertainty_y;
      
      // Wave function visualization
      const waveAmplitude = Math.sin(time * 0.05 + particle.energy * 0.1) * 0.5 + 0.5;
      
      // Quantum state colors
      const colors = {
        spin_up: '#00FFFF',
        spin_down: '#FF00FF',
        superposition: '#FFFF00'
      };
      
      // Superposition creates probability cloud
      if (particle.quantum_state === 'superposition') {
        for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2;
          const probability = Math.random() * 0.5;
          const px = x + Math.cos(angle) * particle.size * 3 * probability;
          const py = y + Math.sin(angle) * particle.size * 3 * probability;
          
          ctx.fillStyle = `rgba(255, 255, 0, ${probability * 0.3})`;
          ctx.beginPath();
          ctx.arc(px, py, particle.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // Main particle with quantum glow
      ctx.shadowColor = colors[particle.quantum_state];
      ctx.shadowBlur = 15 + waveAmplitude * 10;
      ctx.fillStyle = colors[particle.quantum_state];
      ctx.beginPath();
      ctx.arc(x, y, particle.size * (0.5 + waveAmplitude * 0.5), 0, Math.PI * 2);
      ctx.fill();
      
      // Energy level rings
      ctx.strokeStyle = `rgba(255, 255, 255, ${waveAmplitude * 0.3})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(x, y, particle.size * 2 + waveAmplitude * 5, 0, Math.PI * 2);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(x, y, particle.size * 3 + waveAmplitude * 8, 0, Math.PI * 2);
      ctx.stroke();
    };

    const drawQuantumField = () => {
      const particles = particlesRef.current;
      
      // Draw field lines between entangled particles
      ctx.strokeStyle = 'rgba(100, 200, 255, 0.1)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          
          const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
          
          // Quantum entanglement visualization
          if (distance < 200 && Math.random() > 0.8) {
            const entanglement_strength = (200 - distance) / 200;
            
            ctx.strokeStyle = `rgba(100, 200, 255, ${entanglement_strength * 0.3})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            
            // Curved quantum field line
            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2;
            const curve = Math.sin(timeRef.current * 0.01) * 20;
            
            ctx.quadraticCurveTo(midX + curve, midY + curve, p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };

    const updateQuantumParticle = (particle: QuantumParticle) => {
      // Quantum tunneling - occasional position jumps
      if (Math.random() < 0.001) {
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
      }
      
      // Normal movement with quantum uncertainty
      particle.x += particle.vx + (Math.random() - 0.5) * 0.1;
      particle.y += particle.vy + (Math.random() - 0.5) * 0.1;
      
      // Wave-particle duality - velocity fluctuates
      particle.vx += (Math.random() - 0.5) * 0.01;
      particle.vy += (Math.random() - 0.5) * 0.01;
      
      // Damping
      particle.vx *= 0.99;
      particle.vy *= 0.99;
      
      // Quantum state transitions
      if (Math.random() < 0.005) {
        const states: ('spin_up' | 'spin_down' | 'superposition')[] = ['spin_up', 'spin_down', 'superposition'];
        particle.quantum_state = states[Math.floor(Math.random() * states.length)];
      }
      
      // Boundary conditions with quantum behavior
      if (particle.x < 0 || particle.x > canvas.width) {
        if (Math.random() < 0.7) {
          particle.vx *= -1;
        } else {
          // Quantum tunneling through boundary
          particle.x = particle.x < 0 ? canvas.width : 0;
        }
      }
      
      if (particle.y < 0 || particle.y > canvas.height) {
        if (Math.random() < 0.7) {
          particle.vy *= -1;
        } else {
          particle.y = particle.y < 0 ? canvas.height : 0;
        }
      }
      
      particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      particle.y = Math.max(0, Math.min(canvas.height, particle.y));
    };

    const animate = () => {
      timeRef.current += 1;
      
      // Quantum field background
      ctx.fillStyle = 'rgba(0, 0, 20, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw quantum field
      drawQuantumField();
      
      // Update and draw particles
      particlesRef.current.forEach(particle => {
        updateQuantumParticle(particle);
        drawQuantumParticle(particle);
      });
      
      // Reset shadow
      ctx.shadowBlur = 0;
      
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
      style={{ opacity: 0.4 }}
    />
  );
};

export default QuantumField;