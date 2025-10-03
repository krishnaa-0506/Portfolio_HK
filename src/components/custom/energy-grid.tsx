"use client";
import React, { useEffect, useRef } from 'react';

interface GridNode {
  x: number;
  y: number;
  energy: number;
  maxEnergy: number;
  connections: GridNode[];
  pulsePhase: number;
}

const EnergyGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<GridNode[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeGrid();
    };

    const initializeGrid = () => {
      const nodes: GridNode[] = [];
      const gridSpacing = 80;
      const cols = Math.ceil(canvas.width / gridSpacing) + 1;
      const rows = Math.ceil(canvas.height / gridSpacing) + 1;
      
      // Create nodes
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          nodes.push({
            x: col * gridSpacing,
            y: row * gridSpacing,
            energy: Math.random() * 0.5,
            maxEnergy: 1,
            connections: [],
            pulsePhase: Math.random() * Math.PI * 2
          });
        }
      }
      
      // Connect neighboring nodes
      nodes.forEach((node, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        
        // Right neighbor
        if (col < cols - 1) {
          const rightNeighbor = nodes[index + 1];
          if (rightNeighbor) node.connections.push(rightNeighbor);
        }
        
        // Bottom neighbor
        if (row < rows - 1) {
          const bottomNeighbor = nodes[index + cols];
          if (bottomNeighbor) node.connections.push(bottomNeighbor);
        }
      });
      
      nodesRef.current = nodes;
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    };

    const updateNodes = () => {
      const mouse = mouseRef.current;
      
      nodesRef.current.forEach(node => {
        // Mouse interaction
        const distance = Math.sqrt(
          Math.pow(mouse.x - node.x, 2) + Math.pow(mouse.y - node.y, 2)
        );
        
        if (distance < 150) {
          const influence = 1 - (distance / 150);
          node.energy = Math.min(node.maxEnergy, node.energy + influence * 0.02);
        }
        
        // Natural energy decay
        node.energy *= 0.995;
        
        // Pulse phase update
        node.pulsePhase += 0.02 + node.energy * 0.05;
        
        // Energy spreading to neighbors
        if (node.energy > 0.1) {
          node.connections.forEach(neighbor => {
            const energyTransfer = (node.energy - neighbor.energy) * 0.01;
            if (energyTransfer > 0) {
              neighbor.energy += energyTransfer * 0.5;
              node.energy -= energyTransfer * 0.5;
            }
          });
        }
      });
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      nodesRef.current.forEach(node => {
        node.connections.forEach(neighbor => {
          const avgEnergy = (node.energy + neighbor.energy) / 2;
          if (avgEnergy > 0.01) {
            const alpha = Math.min(avgEnergy, 0.8);
            const lineWidth = 1 + avgEnergy * 2;
            
            // Gradient line
            const gradient = ctx.createLinearGradient(
              node.x, node.y, neighbor.x, neighbor.y
            );
            gradient.addColorStop(0, `rgba(56, 189, 248, ${alpha})`);
            gradient.addColorStop(0.5, `rgba(147, 51, 234, ${alpha})`);
            gradient.addColorStop(1, `rgba(236, 72, 153, ${alpha})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = lineWidth;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(neighbor.x, neighbor.y);
            ctx.stroke();
            
            // Energy pulse along connection
            if (avgEnergy > 0.3) {
              const pulsePos = (Math.sin(node.pulsePhase) + 1) / 2;
              const pulseX = node.x + (neighbor.x - node.x) * pulsePos;
              const pulseY = node.y + (neighbor.y - node.y) * pulsePos;
              
              ctx.fillStyle = `rgba(255, 255, 255, ${avgEnergy})`;
              ctx.beginPath();
              ctx.arc(pulseX, pulseY, 2 + avgEnergy * 3, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        });
      });
      
      // Draw nodes
      nodesRef.current.forEach(node => {
        if (node.energy > 0.01) {
          const nodeSize = 2 + node.energy * 6;
          const alpha = Math.min(node.energy, 1);
          const pulse = Math.sin(node.pulsePhase) * 0.3 + 0.7;
          
          // Outer glow
          const glowGradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, nodeSize * 3
          );
          glowGradient.addColorStop(0, `rgba(56, 189, 248, ${alpha * pulse})`);
          glowGradient.addColorStop(1, 'rgba(56, 189, 248, 0)');
          
          ctx.fillStyle = glowGradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, nodeSize * 3, 0, Math.PI * 2);
          ctx.fill();
          
          // Core node
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * pulse})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    };

    const animate = () => {
      updateNodes();
      drawGrid();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
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

export default EnergyGrid;