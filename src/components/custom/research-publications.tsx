"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface ResearchPaper {
  title: string;
  category: string;
  description: string;
  tags: string[];
}

const ResearchPublications: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const researchPapers: { [key: string]: ResearchPaper[] } = {
    "Mechatronics & Automation": [
      {
        title: "AI-Driven Predictive Maintenance in Industrial Robotics for Mechatronics Applications",
        category: "Mechatronics & Automation",
        description: "Comprehensive study on implementing AI algorithms for predictive maintenance in industrial robotic systems.",
        tags: ["AI", "Robotics", "Predictive Maintenance", "Industry 4.0"]
      },
      {
        title: "Collaborative Robot (Cobot) Optimization for Human-Robot Interaction in Smart Factories",
        category: "Mechatronics & Automation", 
        description: "Research on optimizing collaborative robots for enhanced human-robot interaction in manufacturing environments.",
        tags: ["Cobots", "HRI", "Smart Factory", "Optimization"]
      },
      {
        title: "IoT-Based Fault Detection and Monitoring in Automated Mechatronic Systems",
        category: "Mechatronics & Automation",
        description: "Development of IoT frameworks for real-time fault detection in automated mechatronic systems.",
        tags: ["IoT", "Fault Detection", "Automation", "Monitoring"]
      },
      {
        title: "Sensor Fusion Techniques for Real-Time Robotic Perception in Industrial Automation",
        category: "Mechatronics & Automation",
        description: "Advanced sensor fusion methodologies for improving robotic perception in industrial settings.",
        tags: ["Sensor Fusion", "Robotics", "Perception", "Real-time"]
      },
      {
        title: "Autonomous Guided Vehicles (AGVs) Path Planning Using Deep Reinforcement Learning",
        category: "Mechatronics & Automation",
        description: "Implementation of deep reinforcement learning for optimal path planning in AGV systems.",
        tags: ["AGV", "Deep Learning", "Path Planning", "Autonomous"]
      },
      {
        title: "Digital Twin Integration for Predictive Maintenance of Mechatronic Equipment",
        category: "Mechatronics & Automation",
        description: "Digital twin implementation for enhanced predictive maintenance in mechatronic systems.",
        tags: ["Digital Twin", "Predictive Maintenance", "Mechatronics"]
      },
      {
        title: "Energy-Efficient Motion Control Strategies in Mechatronic Actuation Systems",
        category: "Mechatronics & Automation",
        description: "Research on energy optimization techniques in mechatronic actuation and motion control systems.",
        tags: ["Energy Efficiency", "Motion Control", "Actuation", "Optimization"]
      }
    ],
    "Electronics & AI": [
      {
        title: "AI-Powered Fault Detection in High-Precision Electronic Circuits",
        category: "Electronics & AI",
        description: "Machine learning approaches for detecting faults in precision electronic circuit systems.",
        tags: ["AI", "Fault Detection", "Electronics", "Precision"]
      },
      {
        title: "Edge AI for Real-Time Monitoring of Industrial Electronics Systems",
        category: "Electronics & AI",
        description: "Implementation of edge AI solutions for real-time monitoring in industrial electronic systems.",
        tags: ["Edge AI", "Real-time", "Industrial Electronics", "Monitoring"]
      },
      {
        title: "Deep Learning Approaches for Signal Processing in Embedded Electronics",
        category: "Electronics & AI",
        description: "Application of deep learning techniques in embedded signal processing systems.",
        tags: ["Deep Learning", "Signal Processing", "Embedded", "Electronics"]
      },
      {
        title: "Smart Embedded Systems for Predictive Maintenance and Process Automation",
        category: "Electronics & AI",
        description: "Development of intelligent embedded systems for predictive maintenance and automation.",
        tags: ["Embedded Systems", "Predictive Maintenance", "Process Automation", "Smart Systems"]
      }
    ],
    "Additive & Advanced Manufacturing": [
      {
        title: "AI-Based Optimization in Additive Manufacturing of Multi-Material Components",
        category: "Additive & Advanced Manufacturing",
        description: "AI optimization techniques for multi-material additive manufacturing processes.",
        tags: ["AI Optimization", "Additive Manufacturing", "Multi-material", "3D Printing"]
      },
      {
        title: "Sustainable 3D Printing Using Recycled Materials and Machine Learning Quality Control",
        category: "Additive & Advanced Manufacturing",
        description: "Sustainable approach to 3D printing using recycled materials with ML-based quality control.",
        tags: ["Sustainability", "3D Printing", "Recycled Materials", "Quality Control"]
      },
      {
        title: "Real-Time Defect Detection in 3D Printing via Computer Vision and AI",
        category: "Additive & Advanced Manufacturing",
        description: "Computer vision and AI implementation for real-time defect detection in 3D printing.",
        tags: ["Computer Vision", "Defect Detection", "3D Printing", "Real-time", "AI"]
      },
      {
        title: "Hybrid Manufacturing: Combining Additive and Subtractive Techniques Using AI",
        category: "Additive & Advanced Manufacturing",
        description: "AI-driven hybrid manufacturing combining additive and subtractive manufacturing techniques.",
        tags: ["Hybrid Manufacturing", "Additive", "Subtractive", "AI Integration"]
      },
      {
        title: "Digital Twin Modeling for Adaptive Control in Additive Manufacturing",
        category: "Additive & Advanced Manufacturing",
        description: "Digital twin implementation for adaptive control systems in additive manufacturing.",
        tags: ["Digital Twin", "Adaptive Control", "Additive Manufacturing", "Modeling"]
      }
    ],
    "Cross-Domain / Emerging": [
      {
        title: "AI-Driven Quality Control in Automated Production Lines",
        category: "Cross-Domain / Emerging",
        description: "Implementation of AI systems for quality control in automated production environments.",
        tags: ["AI", "Quality Control", "Production Lines", "Automation"]
      },
      {
        title: "Autonomous Drone Inspection Systems for Industrial Equipment Using AI",
        category: "Cross-Domain / Emerging",
        description: "AI-powered autonomous drone systems for industrial equipment inspection.",
        tags: ["Autonomous Drones", "Inspection", "Industrial Equipment", "AI"]
      },
      {
        title: "Human-Robot Collaboration Optimization Through Machine Learning in Factories",
        category: "Cross-Domain / Emerging",
        description: "Machine learning optimization for human-robot collaboration in factory environments.",
        tags: ["Human-Robot Collaboration", "Machine Learning", "Factory Optimization"]
      },
      {
        title: "Cyber-Physical Systems for Smart Factories: Integration of AI, IoT, and Robotics",
        category: "Cross-Domain / Emerging",
        description: "Comprehensive integration of AI, IoT, and robotics in cyber-physical factory systems.",
        tags: ["Cyber-Physical Systems", "Smart Factory", "AI", "IoT", "Robotics"]
      }
    ]
  };

  const categoryColors = {
    "Mechatronics & Automation": "bg-blue-500",
    "Electronics & AI": "bg-green-500", 
    "Additive & Advanced Manufacturing": "bg-purple-500",
    "Cross-Domain / Emerging": "bg-orange-500"
  };

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <section className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            📚 Research Publications
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Research Papers Published on ResearchGate
          </p>
          <div className="flex justify-center items-center gap-2 mb-8">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Published on ResearchGate</span>
            <ExternalLink className="w-4 h-4 text-primary" />
          </div>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {Object.entries(researchPapers).map(([category, papers]) => (
            <Card key={category} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader 
                className="cursor-pointer"
                onClick={() => toggleCategory(category)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${categoryColors[category as keyof typeof categoryColors]}`}></div>
                    <CardTitle className="text-xl text-primary">
                      {category}
                    </CardTitle>
                  </div>
                  {expandedCategory === category ? 
                    <ChevronUp className="w-5 h-5 text-muted-foreground" /> : 
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  }
                </div>
              </CardHeader>
              
              {expandedCategory === category && (
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {papers.map((paper, index) => (
                      <div 
                        key={index}
                        className="border-l-4 border-primary/20 pl-4 py-3 bg-background/50 rounded-r-lg"
                      >
                        <h4 className="font-semibold text-foreground mb-2 leading-tight">
                          {paper.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {paper.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {paper.tags.map((tag, tagIndex) => (
                            <Badge 
                              key={tagIndex}
                              variant="secondary" 
                              className="text-xs bg-primary/10 text-primary border border-primary/20"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="gap-2" asChild>
            <a href="https://www.researchgate.net/profile/Hari-Hk-3?ev=hdr_xprf" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              View Full ResearchGate Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResearchPublications;