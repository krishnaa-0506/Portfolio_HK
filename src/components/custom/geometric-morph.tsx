"use client";
import React, { useEffect, useRef } from 'react';

interface Shape3D {
  vertices: Array<{ x: number; y: number; z: number }>;
  faces: Array<number[]>;
  rotation: { x: number; y: number; z: number };
  position: { x: number; y: number; z: number };
  morphProgress: number;
  color: string;
}

const GeometricMorph: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const shapesRef = useRef<Shape3D[]>([]);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeShapes();
    };

    // Geometric shape generators
    const createCube = (size: number) => ({
      vertices: [
        { x: -size, y: -size, z: -size },
        { x: size, y: -size, z: -size },
        { x: size, y: size, z: -size },
        { x: -size, y: size, z: -size },
        { x: -size, y: -size, z: size },
        { x: size, y: -size, z: size },
        { x: size, y: size, z: size },
        { x: -size, y: size, z: size }
      ],
      faces: [
        [0, 1, 2, 3], [4, 7, 6, 5], [0, 4, 5, 1],
        [2, 6, 7, 3], [0, 3, 7, 4], [1, 5, 6, 2]
      ]
    });

    const createOctahedron = (size: number) => ({
      vertices: [
        { x: 0, y: size, z: 0 },
        { x: size, y: 0, z: 0 },
        { x: 0, y: 0, z: size },
        { x: -size, y: 0, z: 0 },
        { x: 0, y: 0, z: -size },
        { x: 0, y: -size, z: 0 }
      ],
      faces: [
        [0, 1, 2], [0, 2, 3], [0, 3, 4], [0, 4, 1],
        [5, 2, 1], [5, 3, 2], [5, 4, 3], [5, 1, 4]
      ]
    });

    const createTetrahedron = (size: number) => ({
      vertices: [
        { x: size, y: size, z: size },
        { x: -size, y: -size, z: size },
        { x: -size, y: size, z: -size },
        { x: size, y: -size, z: -size }
      ],
      faces: [
        [0, 1, 2], [0, 2, 3], [0, 3, 1], [1, 3, 2]
      ]
    });

    const initializeShapes = () => {
      const shapes: Shape3D[] = [];
      const shapeCount = 6;
      const shapeTypes = [createCube, createOctahedron, createTetrahedron];
      
      for (let i = 0; i < shapeCount; i++) {
        const shapeType = shapeTypes[i % shapeTypes.length];
        const baseShape = shapeType(30);
        
        shapes.push({
          ...baseShape,
          rotation: {
            x: Math.random() * Math.PI * 2,
            y: Math.random() * Math.PI * 2,
            z: Math.random() * Math.PI * 2
          },
          position: {
            x: (Math.random() - 0.5) * canvas.width,
            y: (Math.random() - 0.5) * canvas.height,
            z: 0
          },
          morphProgress: Math.random() * Math.PI * 2,
          color: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'][i % 5]
        });
      }
      
      shapesRef.current = shapes;
    };

    const rotateVertex = (vertex: { x: number; y: number; z: number }, rotation: { x: number; y: number; z: number }) => {
      let { x, y, z } = vertex;
      
      // Rotate around X axis
      const cosX = Math.cos(rotation.x);
      const sinX = Math.sin(rotation.x);
      const newY = y * cosX - z * sinX;
      const newZ = y * sinX + z * cosX;
      y = newY;
      z = newZ;
      
      // Rotate around Y axis
      const cosY = Math.cos(rotation.y);
      const sinY = Math.sin(rotation.y);
      const newX = x * cosY + z * sinY;
      z = -x * sinY + z * cosY;
      x = newX;
      
      // Rotate around Z axis
      const cosZ = Math.cos(rotation.z);
      const sinZ = Math.sin(rotation.z);
      const finalX = x * cosZ - y * sinZ;
      const finalY = x * sinZ + y * cosZ;
      
      return { x: finalX, y: finalY, z };
    };

    const projectTo2D = (vertex3D: { x: number; y: number; z: number }, centerX: number, centerY: number) => {
      const focalLength = 400;
      const scale = focalLength / (focalLength + vertex3D.z);
      
      return {
        x: centerX + vertex3D.x * scale,
        y: centerY + vertex3D.y * scale
      };
    };

    const drawShape = (shape: Shape3D) => {
      const centerX = canvas.width / 2 + shape.position.x;
      const centerY = canvas.height / 2 + shape.position.y;
      
      // Rotate vertices
      const rotatedVertices = shape.vertices.map(vertex => 
        rotateVertex(vertex, shape.rotation)
      );
      
      // Project to 2D
      const projectedVertices = rotatedVertices.map(vertex => 
        projectTo2D(vertex, centerX, centerY)
      );
      
      // Calculate face depths for sorting
      const facesWithDepth = shape.faces.map(face => {
        const avgZ = face.reduce((sum, vertexIndex) => 
          sum + rotatedVertices[vertexIndex].z, 0
        ) / face.length;
        return { face, depth: avgZ };
      });
      
      // Sort faces by depth (back to front)
      facesWithDepth.sort((a, b) => a.depth - b.depth);
      
      // Draw faces
      facesWithDepth.forEach(({ face }, index) => {
        const alpha = 0.3 + Math.sin(shape.morphProgress + index * 0.5) * 0.2;
        
        ctx.fillStyle = shape.color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
        ctx.strokeStyle = shape.color;
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        face.forEach((vertexIndex, i) => {
          const vertex = projectedVertices[vertexIndex];
          if (i === 0) {
            ctx.moveTo(vertex.x, vertex.y);
          } else {
            ctx.lineTo(vertex.x, vertex.y);
          }
        });
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Add wireframe with glow
        ctx.shadowColor = shape.color;
        ctx.shadowBlur = 10;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });
    };

    const updateShape = (shape: Shape3D) => {
      // Continuous rotation
      shape.rotation.x += 0.01;
      shape.rotation.y += 0.015;
      shape.rotation.z += 0.008;
      
      // Morphing animation
      shape.morphProgress += 0.02;
      
      // Floating movement
      shape.position.x += Math.sin(shape.morphProgress * 0.5) * 0.5;
      shape.position.y += Math.cos(shape.morphProgress * 0.3) * 0.3;
      
      // Scale morphing
      const scaleFactor = 1 + Math.sin(shape.morphProgress) * 0.3;
      shape.vertices = shape.vertices.map(vertex => ({
        x: vertex.x * (1 + (scaleFactor - 1) * 0.01),
        y: vertex.y * (1 + (scaleFactor - 1) * 0.01),
        z: vertex.z * (1 + (scaleFactor - 1) * 0.01)
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      timeRef.current += 0.016;
      
      shapesRef.current.forEach(shape => {
        updateShape(shape);
        drawShape(shape);
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
      style={{ opacity: 0.25 }}
    />
  );
};

export default GeometricMorph;