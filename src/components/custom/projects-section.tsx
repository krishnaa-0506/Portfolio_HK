"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          🔧 Engineering Innovation Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 animate-fadeSlideUp bg-gradient-to-br from-background/80 to-background hover:from-primary/5 hover:to-primary/10"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="p-6">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-muted-foreground text-sm mb-4 group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
}

const projectsData: Project[] = [
  {
    id: 'proj1',
    name: 'Dynamo Powered Electric Vehicles',
    description: 'This project investigates the major challenges faced by electric vehicles and reliability of EVs.',
    tech: ['Arduino', 'ESP8266', 'Dynamo']
  },
  {
    id: 'proj2',
    name: 'Smart Wearable Jersey',
    description: 'A smart wearable jersey is a sensor-embedded garment that tracks health and performance data.',
    tech: ['Arduino', 'ESP8266', 'ThingSpeak', 'Flutter']
  },
  {
    id: 'proj3',
    name: 'GoKart Telemetry Data Processing System',
    description: 'AI-integrated smart kart system with real-time sensor data and driver assistance.',
    tech: ['Arduino', 'ESP8266', 'Flutter', 'React']
  },
  {
    id: 'proj4',
    name: 'Hira – Your Fitness Companion',
    description: 'AI-powered fitness app for real-time tracking, personalized workouts, and more.',
    tech: ['Flutter', 'React', 'Firebase', 'AI']
  },
  {
    id: 'proj5',
    name: 'Mind Mate - AI Mental Health Companion',
    description: 'AI-powered mental health app providing personalized therapy sessions, mood tracking, and emotional support.',
    tech: ['AI', 'Flutter', 'Machine Learning', 'Mental Health']
  },
  {
    id: 'proj6',
    name: 'Waste to Watt - Plastic Power Generation',
    description: 'Converts non-recyclable plastic waste into clean electricity using advanced pyrolysis and energy conversion systems.',
    tech: ['Pyrolysis', 'Energy Conversion', 'Environmental Engineering']
  },
  {
    id: 'proj7',
    name: 'Waste to Filament - 3D Printing Revolution',
    description: 'Transforms non-recyclable plastic waste into high-quality 3D printing filament for sustainable additive manufacturing.',
    tech: ['3D Printing', 'Plastic Recycling', 'Additive Manufacturing']
  },
  {
    id: 'proj8',
    name: 'As Always – Your Love Companion',
    description: 'Emotionally intelligent AI assistant companion app.',
    tech: ['Flutter', 'React', 'Firebase', 'AI']
  },
];