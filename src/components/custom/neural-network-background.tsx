"use client";
import React, { useEffect, useRef, useCallback } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  connections: number[];
  pulse: number;
  energy: number;
}

const NeuralNetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  const createNodes = useCallback((width: number, height: number) => {
    const nodes: Node[] = [];
    const nodeCount = 50;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 4 + 2,
        connections: [],
        pulse: Math.random() * Math.PI * 2,
        energy: Math.random()
      });
    }

    // Create connections
    nodes.forEach((node, i) => {
      nodes.forEach((otherNode, j) => {
        if (i !== j) {
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
          );
          if (distance < 150 && node.connections.length < 4) {
            node.connections.push(j);
          }
        }
      });
    });

    nodesRef.current = nodes;
  }, []);

  const drawNode = useCallback((ctx: CanvasRenderingContext2D, node: Node) => {
    const pulseSize = Math.sin(node.pulse) * 0.5 + 1;
    const glowIntensity = node.energy * 0.5 + 0.3;

    // Outer glow
    ctx.shadowColor = '#947CB0';
    ctx.shadowBlur = 20 * glowIntensity;
    ctx.fillStyle = `rgba(148, 124, 176, ${glowIntensity})`;
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.size * pulseSize * 1.5, 0, Math.PI * 2);
    ctx.fill();

    // Core node
    ctx.shadowBlur = 10;
    ctx.fillStyle = `rgba(217, 165, 178, ${0.8 + glowIntensity * 0.2})`;
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.size * pulseSize, 0, Math.PI * 2);
    ctx.fill();

    // Inner core
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.size * pulseSize * 0.3, 0, Math.PI * 2);
    ctx.fill();
  }, []);

  const drawConnection = useCallback((
    ctx: CanvasRenderingContext2D, 
    node1: Node, 
    node2: Node, 
    energyFlow: number
  ) => {
    const gradient = ctx.createLinearGradient(node1.x, node1.y, node2.x, node2.y);
    gradient.addColorStop(0, `rgba(148, 124, 176, ${0.1 + energyFlow * 0.3})`);
    gradient.addColorStop(0.5, `rgba(217, 165, 178, ${0.2 + energyFlow * 0.4})`);
    gradient.addColorStop(1, `rgba(168, 181, 230, ${0.1 + energyFlow * 0.3})`);

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1 + energyFlow * 2;
    ctx.shadowColor = '#947CB0';
    ctx.shadowBlur = 5 + energyFlow * 10;

    ctx.beginPath();
    ctx.moveTo(node1.x, node1.y);
    
    // Curved connection
    const midX = (node1.x + node2.x) / 2;
    const midY = (node1.y + node2.y) / 2;
    const curve = Math.sin(Date.now() * 0.001 + node1.x * 0.01) * 20;
    
    ctx.quadraticCurveTo(midX + curve, midY + curve, node2.x, node2.y);
    ctx.stroke();

    // Energy pulse along connection
    if (energyFlow > 0.7) {
      const progress = (Date.now() * 0.005) % 1;
      const pulseX = node1.x + (node2.x - node1.x) * progress;
      const pulseY = node1.y + (node2.y - node1.y) * progress;
      
      ctx.shadowBlur = 15;
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }, []);

  const updateNode = useCallback((node: Node, width: number, height: number) => {
    // Mouse interaction
    const dx = mouseRef.current.x - node.x;
    const dy = mouseRef.current.y - node.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < 100) {
      const force = (100 - distance) / 100;
      node.vx += (dx / distance) * force * 0.02;
      node.vy += (dy / distance) * force * 0.02;
      node.energy = Math.min(1, node.energy + force * 0.1);
    }

    // Movement
    node.x += node.vx;
    node.y += node.vy;
    
    // Friction
    node.vx *= 0.99;
    node.vy *= 0.99;
    
    // Energy decay
    node.energy *= 0.995;
    
    // Pulse animation
    node.pulse += 0.02;
    
    // Boundary handling
    if (node.x < 0 || node.x > width) node.vx *= -1;
    if (node.y < 0 || node.y > height) node.vy *= -1;
    
    node.x = Math.max(0, Math.min(width, node.x));
    node.y = Math.max(0, Math.min(height, node.y));
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const nodes = nodesRef.current;
    
    // Update nodes
    nodes.forEach(node => {
      updateNode(node, canvas.width, canvas.height);
    });

    // Draw connections
    nodes.forEach((node, i) => {
      node.connections.forEach(connectionIndex => {
        const connectedNode = nodes[connectionIndex];
        if (connectedNode) {
          const energyFlow = (node.energy + connectedNode.energy) / 2;
          drawConnection(ctx, node, connectedNode, energyFlow);
        }
      });
    });

    // Draw nodes
    nodes.forEach(node => {
      drawNode(ctx, node);
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [updateNode, drawConnection, drawNode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createNodes(canvas.width, canvas.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
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
  }, [createNodes, animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default NeuralNetworkBackground;