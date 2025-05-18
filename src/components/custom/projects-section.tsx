"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
  };

  const detailedVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.3 } },
  };

  return (
    <section id="projects" className="py-16 sm:py-24 bg-secondary/50" style={{ minHeight: '100vh' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!selectedProject ? (
            <motion.div key="project-grid" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">
                📂 My Small Innovative Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projectsData.map((project, index) => (
                  <Card
                    key={project.id}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 animate-fadeSlideUp bg-gradient-to-br from-background/80 to-background hover:from-primary/5 hover:to-primary/10 cursor-pointer"
                    style={{ animationDelay: `${index * 0.15}s` }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <CardHeader className="p-6">
                      <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <p className="text-muted-foreground text-base mb-6 line-clamp-3 group-hover:text-foreground transition-colors duration-300">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
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
            </motion.div>
          ) : (
            <motion.div key="detailed-view" variants={detailedVariants} initial="hidden" animate="visible" exit="exit" className="bg-background/90 rounded-xl shadow-2xl p-8 max-w-3xl mx-auto">
              <Button variant="ghost" className="mb-6 hover:bg-primary/10" onClick={() => setSelectedProject(null)}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
              </Button>
              <h2 className="text-3xl font-bold text-primary mb-4">{selectedProject.name}</h2>
              <p className="text-muted-foreground mb-6">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Detailed Information</h3>
              <div className="prose text-foreground max-h-[60vh] overflow-y-auto p-4 bg-secondary/10 rounded-lg whitespace-pre-wrap">
                {selectedProject.details}
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                {selectedProject.githubUrl && (
                  <Button variant="outline" size="sm" asChild className="hover:bg-primary/10 transition-colors duration-300">
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
  githubUrl?: string;
  details: string;
}

const projectsData: Project[] = [
  {
    id: 'proj1',
    name: 'Dynamo Powered Electric Vehicles',
    description: 'This project investigates the major challenges faced by electric vehicles and reliability of EVs.',
    tech: ['Arduino', 'ESP8266', 'Dynamo'],
    details: `Electric Vehicles (EVs) continue to play a vital role in the global transition toward sustainable mobility. This project addresses several persistent challenges in EV technology through innovative solutions.

Key Innovations:
• Dynamo-based Cooling System
  - Autonomously powers battery thermal management
  - Uses vehicle's kinetic energy
  - Converts rotational energy into electricity for cooling
  - Reduces main battery load
  - Particularly effective during downhill motion and regenerative braking

• AI-enhanced Battery Management System (BMS)
  - Real-time monitoring of:
    ∟ Voltage
    ∟ Temperature
    ∟ State of Charge (SoC)
    ∟ Internal resistance
  - Dynamic power output adjustment
  - Early thermal runaway detection
  - Predictive analytics integration

Performance Improvements:
• Thermal Regulation: 30-40% more efficient
• Battery Range: 15-20% increase
• Battery Life: 1.5x extension
• Fire Hazard: 60-70% reduction

Supporting Technologies:
• Smart regenerative braking with fuzzy logic control
• Passive solar energy trickle charging
• Modular, retrofit-friendly components

Survey Results (100+ EV Users):
• Battery overheating: 30%
• Low driving range: 25%
• Rapid battery discharge: 20%
• Fire hazard/thermal risk: 15%
• Poor battery efficiency: 10%

Project Methodology:
1. Problem Identification
2. Literature Review
3. System Design
4. Simulation and Modeling
5. Survey Analysis
6. Testing and Validation
7. Documentation & Results

Status: Under Research Development
Project Lead: Hari krishnaa`,
  },
  {
    id: 'proj2',
    name: 'Smart Wearable Jersey',
    description: 'A smart wearable jersey is a sensor-embedded garment that tracks health and performance data.',
    tech: ['Arduino', 'ESP8266', 'ThingSpeak', 'Flutter'],
    details: `Smart Wearable Jersey is an intelligent garment that combines textile engineering with embedded electronics to provide real-time health and performance monitoring.

Key Components:

1. Sensor Integration
   • Heart Rate Monitoring (ECG-based)
   • Temperature Sensors
   • Sweat Analysis
     ∟ pH levels
     ∟ Glucose monitoring
     ∟ Lactate detection
     ∟ Electrolyte balance
   • Respiratory Rate Detection
   • Motion & Posture Tracking
     ∟ Accelerometers
     ∟ Gyroscopes

2. Technical Architecture
   • Flexible Circuit Design
     ∟ Printed circuits
     ∟ Woven conductive elements
   • Power Management
     ∟ Miniature batteries
     ∟ Energy harvesting system
   • Wireless Connectivity
     ∟ Bluetooth integration
     ∟ Real-time data transmission
     ∟ Cloud synchronization

3. Core Functions
   • Health Monitoring
     ∟ Vital signs tracking
     ∟ Hydration monitoring
     ∟ Fatigue detection
   • Performance Analysis
     ∟ Motion tracking
     ∟ Posture analysis
     ∟ Exertion metrics
   • Medical Applications
     ∟ Remote patient monitoring
     ∟ Health anomaly detection

4. Application Areas
   • Sports & Fitness Training
   • Healthcare Monitoring
   • Military Operations
   • Occupational Safety
   • Rehabilitation Support

Technical Features:
• Real-time data processing
• Continuous monitoring
• Wireless data transmission
• Cloud-based analytics
• Mobile app integration

Advantages:
• Non-intrusive monitoring
• Washable design
• Comfortable for extended wear
• Personalized health insights
• Real-time feedback system

Implementation Challenges:
• Sensor accuracy optimization
• Power efficiency management
• Data security protocols
• Durability enhancement
• Comfort optimization

Future Development:
• AI-based analysis integration
• Nanotechnology incorporation
• Therapeutic feature addition
• Advanced disease detection
• Adaptive response systems

Status: Under Development
Lead Developer: Hari krishnaa
Focus: Wearable Health Technology`,
  },
  {
    id: 'proj3',
    name: 'GoKart Telemetry Data Processing System',
    description: 'AI-integrated smart kart system with real-time sensor data and driver assistance.',
    tech: ['Arduino', 'ESP8266', 'Flutter', 'React'],
    details: `I-SAFE is a smart Go-Kart platform that revolutionizes racing safety and performance through intelligent monitoring and real-time analytics.

Key Features:

1. Real-Time Monitoring
   • Performance tracking
   • Visual feedback system
   • Telemetry data processing
   • Navigation awareness
   • Smart diagnostics

2. System Architecture
   • Hardware Layer
     ∟ Embedded sensors
     ∟ Electronic modules
     ∟ Critical zone monitoring
   • Processing Layer
     ∟ Central data analysis
     ∟ Response coordination
   • Communication Layer
     ∟ Live data transmission
     ∟ Interface connectivity
   • Interface Layer
     ∟ Real-time visualization
     ∟ AI-suggested responses

3. Smart Features
   • Remote control capabilities
   • Secure access protocols
   • Condition monitoring
   • Performance optimization
   • Safety enhancement

4. Technical Implementation
   • Custom web interface
   • Real-time data charts
   • Alert systems
   • Control toggles
   • 3D simulation environment

5. Innovation Highlights
   • Smart system integration
   • Advanced safety measures
   • Modular architecture
   • Scalable platform design
   • Future-ready framework

Challenges Addressed:
• Real-time response in high-speed conditions
• Power efficiency optimization
• Stable communication on rough terrain
• Thermal management
• Compact electronics design

Future Scope:
• Electric/hybrid powertrain integration
• Industrial fleet diagnostics
• AI-driven maintenance
• Cloud-connected analytics
• Performance review systems

Status: Under Development
Lead Developer: Hari krishnaa
Focus: Intelligent Motorsport Systems`,
  },
  {
    id: 'proj4',
    name: 'Hira – Your Fitness Companion',
    description: 'AI-powered fitness app for real-time tracking, personalized workouts, and more.',
    tech: ['Flutter', 'React', 'Firebase', 'Vite'],
    githubUrl: 'https://github.com/krish0506-eng/Hira',
    details: `Hira is an advanced AI-powered fitness ecosystem that redefines health and wellness management through intelligent personalization and seamless integration.

Key Features:

1. Full Offline AI Processing
   • On-device health vitals analysis
   • Privacy-focused architecture
   • Internet-independent operation
   • Real-time data processing

2. Hyper-Personalized Workouts
   • Dynamic workout generation based on:
     ∟ Daily biometrics
     ∟ Fatigue levels
     ∟ Long-term fitness goals
   • Real-time workout adjustments

3. Smart Wearable Integration
   • Multi-brand compatibility
     ∟ Fastrack Watch
     ∟ Mi Band
     ∟ Fitbit
     ∟ Noise
     ∟ Fire Bolt
     ∟ Amazfit GTS
     ∟ Boat Watch
   • Unified health data platform
   • Bluetooth-enabled connectivity
   • Continuous metric tracking:
     ∟ Heart rate
     ∟ SpO₂
     ∟ Stress levels
     ∟ Activity
     ∟ Sleep quality
     ∟ Calories burned
     ∟ Distance covered
     ∟ Steps taken
     ∟ Blood pressure
     ∟ Respiratory rate
     ∟ Body temperature
     ∟ Oxygen levels

4. AI-Powered Features
   • Meal planning with delivery integration
   • Automated nutrition tracking
   • Calorie estimation
   • Hydration monitoring
   • Real-time coaching
   • Workout timing optimization
   • Safety monitoring and alerts

5. Gamified Fitness Experience
   • Gamified workout challenges
   • Personalized fitness goals
   • Gamified leaderboards
   • AI fitness games
   • Gamified rewards
6. Personalized Fitness Goals
   • Customizable fitness plans
   • Real-time progress tracking
   • AI-driven goal setting
   • Personalized recommendations

7. Engagement & Motivation
   • Gamified fitness experience
   • Community challenges
   • Achievement streaks
   • Interactive leaderboards
   • AI fitness games
   • Group competitions
   • Fitness tribes

8. Marketplace Integration
   • Integrated fitness store
   • Smart gear recommendations
   • Supplement suggestions
   • Personalized equipment proposals
   • Direct in-app ordering

Target Market:
• Gen Z & Millennials
• Working professionals
• Home fitness enthusiasts
• Athletes
• Privacy-conscious users

Technical Architecture:
1. Data Collection Layer
   • Bluetooth connectivity
   • Wearable device integration
   • Real-time data streaming

2. AI Processing Engine
   • Offline-first architecture
   • Real-time analysis
   • Dynamic adjustment algorithms
   • Predictive health modeling

3. User Experience Layer
   • Intuitive interface
   • Seamless integration
   • Cross-platform compatibility
   • Real-time feedback systems

Status: Active Development
Lead Developer: Hari krishnaa`,
  },
  {
    id: 'proj5',
    name: 'Eco Steam',
    description: 'Converts plastic waste into electricity using Organic Rankine Cycle and underground gas filtration.',
    tech: ['Refrigerants', 'Plastic', 'Soil'],
    details: `Eco Steam is an innovative solution that addresses two critical environmental challenges: plastic waste management and sustainable energy generation through an Organic Rankine Cycle (ORC) combustion system.

Key Features:

1. Waste Processing System
   • Polythene plastic waste conversion
   • Underground gas filtration setup
   • Soil-based emission reduction
   • Sustainable waste management

2. Energy Generation
   • Organic Rankine Cycle (ORC) implementation
   • Efficient combustion system
   • Electricity generation from waste
   • Sustainable power output

3. Environmental Protection
   • Reduced harmful emissions
   • Soil-based filtration technology
   • Eco-friendly waste management
   • Sustainable energy production

Technical Components:
• Combustion Chamber
  - High-efficiency design
  - Temperature control
  - Pressure regulation
  - Safety mechanisms

• Filtration System
  - Multi-layer soil filtration
  - Gas purification
  - Emission control
  - Environmental safety

• Power Generation Unit
  - ORC implementation
  - Energy conversion
  - Power distribution
  - Efficiency monitoring

Environmental Impact:
• Plastic Waste Reduction
  - Processing capacity: 100kg/day
  - Waste-to-energy conversion
  - Reduced landfill impact

• Emission Control
  - 80% reduction in harmful gases
  - Soil-based natural filtration
  - Clean energy output

• Sustainability Metrics
  - Energy efficiency: 65%
  - Carbon footprint reduction
  - Renewable energy generation

Implementation Phases:
1. Waste Collection & Sorting
2. Processing & Combustion
3. Gas Filtration
4. Energy Generation
5. Distribution & Monitoring

Benefits:
• Environmental
  - Reduced plastic waste
  - Lower emissions
  - Sustainable energy

• Economic
  - Cost-effective waste management
  - Energy generation
  - Resource optimization

• Social
  - Community waste management
  - Clean energy access
  - Environmental awareness

Status: Under Development
Project Lead: Hari krishnaa
Research Focus: Environmental Engineering`,
  },
  {
    id: 'proj6',
    name: 'As Always – Your Love Companion',
    description: 'Emotionally intelligent AI assistant companion app.',
    tech: ['Flutter', 'React', 'Firebase', 'Emotion Intelligence'],
    details: `As Always is an innovative emotional intelligence app that bridges the gap between digital communication and genuine emotional expression.

Key Features:

1. Emotional Message Creation
   • AI-powered content generation
     ∟ Personalized letters
     ∟ Custom poems
     ∟ Heartfelt wishes
   • Multimedia integration
   • Secure delivery system

2. Technical Architecture
   • Frontend: Flutter (Cross-platform)
   • Backend: Node.js + MongoDB
   • AI Integration: GPT-4
   • Cloud Services:
     ∟ Firebase Auth
     ∟ Cloudinary
     ∟ OneSignal

3. Smart Features
   • Dual-role functionality
     ∟ Sender interface
     ∟ Receiver experience
   • Interactive message unlocking
   • Customizable delivery options
   • Real-time notifications

4. AI Capabilities
   • Emotion-aware content generation
   • Personalized recommendations
   • Voice synthesis
   • Visual experience creation

5. Security & Privacy
   • OTP authentication
   • Secure code-based sharing
   • Private communication channels
   • Data protection protocols

Implementation Highlights:
• Custom REST API development
• Real-time delivery system
• Deep animation integration
• Scalable database architecture
• Privacy-first design approach

Impact:
• Enhanced digital emotional expression
• Strong user retention metrics
• Positive alpha testing feedback
• Scalable foundation for future features

Status: Under Development
Lead Developer: Hari krishnaa
Focus: Emotional Intelligence in Digital Communication`,
  },
];
