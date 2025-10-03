"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Heart, 
  Code, 
  Gamepad2, 
  Music, 
  Camera, 
  BookOpen, 
  Plane, 
  Coffee,
  Dumbbell,
  Palette,
  Users,
  Lightbulb
} from 'lucide-react';

interface Hobby {
  name: string;
  icon: React.ElementType;
  description: string;
  category: 'tech' | 'creative' | 'personal' | 'leadership';
}

const hobbiesData: Hobby[] = [
  { 
    name: 'Advanced Coding & Development', 
    icon: Code, 
    description: 'Full-stack development with React, Next.js, React Native, Python, and AI/ML frameworks like TensorFlow and PyTorch',
    category: 'tech'
  },
  { 
    name: 'Strategic Gaming & Esports', 
    icon: Gamepad2, 
    description: 'Competitive gaming in strategy games, FPS, and mobile esports - enhancing problem-solving and quick decision-making skills',
    category: 'personal'
  },
  { 
    name: 'Music Production & Audio Engineering', 
    icon: Music, 
    description: 'Creating beats using FL Studio, Ableton Live, and exploring sound design for multimedia projects and relaxation',
    category: 'creative'
  },
  { 
    name: 'Professional Photography & Videography', 
    icon: Camera, 
    description: 'Portrait, landscape, and tech product photography using DSLR and editing with Adobe Creative Suite',
    category: 'creative'
  },
  { 
    name: 'Tech Research & Documentation', 
    icon: BookOpen, 
    description: 'Reading cutting-edge research papers on AI, robotics, and mechatronics from IEEE, arXiv, and industry publications',
    category: 'tech'
  },
  { 
    name: 'Travel & Cultural Exploration', 
    icon: Plane, 
    description: 'Planning adventures across India and preparing for European exploration, especially Germany for advanced studies',
    category: 'personal'
  },
  { 
    name: 'Fitness & Mental Wellness', 
    icon: Dumbbell, 
    description: 'Regular workout routines, yoga, and meditation to maintain physical and mental balance during intense coding sessions',
    category: 'personal'
  },
  { 
    name: 'Content Creation & Blogging', 
    icon: Palette, 
    description: 'Writing technical blogs, creating educational content, and sharing knowledge through social media platforms',
    category: 'creative'
  }
];

const passionsData: Hobby[] = [
  { 
    name: 'Entrepreneurship & Innovation', 
    icon: Lightbulb, 
    description: 'Leading HYNEX Technologies, developing AI-powered solutions for manufacturing automation and IoT ecosystems',
    category: 'leadership'
  },
  { 
    name: 'Team Leadership & Mentorship', 
    icon: Users, 
    description: 'Mentoring 20+ students and professionals in technical projects, hackathons, and career development',
    category: 'leadership'
  },
  { 
    name: 'AI/ML Innovation & Research', 
    icon: Palette, 
    description: 'Pioneering cutting-edge solutions in computer vision, NLP, and autonomous systems for real-world applications',
    category: 'tech'
  },
  { 
    name: 'Continuous Learning & Growth', 
    icon: BookOpen, 
    description: 'Mastering German language (A2 level), staying updated with latest tech trends, and preparing for Masters in Germany',
    category: 'personal'
  },
  { 
    name: 'Open Source Contribution', 
    icon: Code, 
    description: 'Contributing to GitHub projects, maintaining 25+ repositories, and building tools for developer community',
    category: 'tech'
  },
  { 
    name: 'Global Impact & Sustainability', 
    icon: Heart, 
    description: 'Developing eco-friendly tech solutions and planning to contribute to Germany\'s Industry 4.0 revolution',
    category: 'leadership'
  }
];

const motivationalQuotes = [
  "As CEO of HYNEX Technologies, my hobbies fuel my professional passions. Every line of code I write, every beat I create, and every photograph I capture contributes to my journey of innovation.",
  "My goal is to bridge the gap between creativity and technology, building solutions that make a difference while preparing for advanced studies in Germany's thriving tech ecosystem.",
  "Innovation happens when passion meets purpose. I believe in creating technology that not only solves problems but also inspires others to dream bigger and achieve more.",
  "Every challenge is an opportunity to grow. From leading teams to building AI solutions, I embrace each moment as a step towards becoming a global tech leader.",
  "The future belongs to those who combine technical excellence with creative thinking. I'm committed to mastering both while making a positive impact on the world.",
  "Success isn't just about what you achieve, it's about how many people you inspire along the way. I aim to be a leader who empowers others through technology.",
  "Germany represents the pinnacle of engineering excellence. I'm preparing to contribute to Industry 4.0 while bringing Indian innovation to the global stage.",
  "Technology is not just my career, it's my way of making the world better. Every project I work on aims to solve real problems and create lasting value."
];

const HobbiesPassionSection: React.FC = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % motivationalQuotes.length);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'tech': return 'border-blue-400/50 bg-blue-500/10 backdrop-blur-sm';
      case 'creative': return 'border-purple-400/50 bg-purple-500/10 backdrop-blur-sm';
      case 'personal': return 'border-green-400/50 bg-green-500/10 backdrop-blur-sm';
      case 'leadership': return 'border-orange-400/50 bg-orange-500/10 backdrop-blur-sm';
      default: return 'border-gray-400/50 bg-gray-500/10 backdrop-blur-sm';
    }
  };

  const getCategoryIconColor = (category: string) => {
    switch (category) {
      case 'tech': return 'text-blue-400';
      case 'creative': return 'text-purple-400';
      case 'personal': return 'text-green-400';
      case 'leadership': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section id="hobbies-passion" className="py-16 sm:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          💝 Hobbies & Passions
        </h2>
        
        {/* Hobbies */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-blue-400 mb-8">
            🎮 Personal Hobbies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbiesData.map((hobby, index) => (
              <Card 
                key={hobby.name} 
                className={`text-center p-6 shadow-2xl hover:shadow-cyan-500/25 transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 border-2 ${getCategoryColor(hobby.category)}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="flex flex-col items-center justify-center">
                  <hobby.icon className={`w-12 h-12 mb-4 ${getCategoryIconColor(hobby.category)}`} />
                  <h4 className="text-lg font-semibold text-white mb-3">{hobby.name}</h4>
                  <p className="text-sm text-gray-300 text-center leading-relaxed">{hobby.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Passions */}
        <div>
          <h3 className="text-2xl font-semibold text-center text-orange-400 mb-8">
            🔥 Professional Passions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {passionsData.map((passion, index) => (
              <Card 
                key={passion.name} 
                className={`text-center p-6 shadow-2xl hover:shadow-orange-500/25 transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 border-2 ${getCategoryColor(passion.category)}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="flex flex-col items-center justify-center">
                  <passion.icon className={`w-12 h-12 mb-4 ${getCategoryIconColor(passion.category)}`} />
                  <h4 className="text-lg font-semibold text-white mb-3">{passion.name}</h4>
                  <p className="text-sm text-gray-300 text-center leading-relaxed">{passion.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Personal Quote with Rotation */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-8 max-w-5xl mx-auto border border-white/20">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <blockquote 
              key={currentQuoteIndex}
              className="text-xl italic text-white/90 mb-6 leading-relaxed transition-opacity duration-1000 ease-in-out"
            >
              "{motivationalQuotes[currentQuoteIndex]}"
            </blockquote>
            <cite className="text-sm font-semibold text-blue-400 bg-blue-500/20 px-4 py-2 rounded-full inline-block">
              — Hari Krishnaa, CEO HYNEX Technologies | Future Germany Scholar
            </cite>
            <div className="mt-4 flex justify-center space-x-2">
              {motivationalQuotes.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentQuoteIndex ? 'bg-blue-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HobbiesPassionSection;