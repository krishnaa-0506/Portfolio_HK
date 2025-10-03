"use client";
import React from 'react';
import { Briefcase, Award } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface TimelineItem {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  iconBgClass: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 'exp1',
    date: '2025 - 3 Months',
    title: 'Full Stack Mobile App Development Intern',
    subtitle: 'Null Class',
    description: 'Completed intensive 3-month internship in full stack mobile app development, gaining hands-on experience in React Native, Node.js, and database management. Built multiple mobile applications from concept to deployment.',
    icon: Briefcase,
    iconBgClass: 'bg-blue-500 text-white',
  },
  {
    id: 'exp2',
    date: '2025 - 42 Days',
    title: 'Generative AI Course Training',
    subtitle: 'Internshala',
    description: 'Completed comprehensive 42-day training program in Generative AI, covering machine learning algorithms, neural networks, and AI model development. Gained expertise in prompt engineering and AI application development.',
    icon: Award,
    iconBgClass: 'bg-purple-500 text-white',
  },
  {
    id: 'exp3',
    date: '2024 - 20 Days',
    title: 'Lathe & CNC Machine Operator Trainee',
    subtitle: 'Manufacturing Workshop',
    description: 'Gained practical experience in precision machining operations, working with lathe and CNC machines. Learned programming, setup, and operation of computer-controlled manufacturing equipment.',
    icon: Briefcase,
    iconBgClass: 'bg-orange-500 text-white',
  },
  {
    id: 'exp4',
    date: '2024 - 15 Days',
    title: 'Industrial Intern',
    subtitle: 'Salzer Electronics',
    description: 'Completed 15-day industrial internship at Salzer Electronics, gaining exposure to electronic component manufacturing, quality control processes, and industrial automation systems.',
    icon: Briefcase,
    iconBgClass: 'bg-green-500 text-white',
  },
];

const ExperienceSection: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
        <section id="experience" ref={sectionRef} className="py-16 sm:py-24 bg-transparent scroll-animate scroll-animate-fade-slide-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          💼 Work Experience
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-border -translate-x-1/2 hidden md:block"></div>
          
          {timelineData.map((item, index) => (
            <div 
              key={item.id} 
              className={`mb-12 flex md:items-center w-full animate-fadeSlideUp ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="hidden md:block w-1/2"></div>
              <div className="relative w-full md:w-1/2">
                {/* Dot on the timeline */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md animate-dotPulse ${item.iconBgClass}`}>
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                {/* Content card */}
                <div className={`p-6 rounded-lg shadow-xl bg-black/20 backdrop-blur-sm border border-white/20 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="flex items-center md:hidden mb-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md mr-4 ${item.iconBgClass}`}>
                       <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-blue-400">{item.date}</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-blue-400 hidden md:block">{item.date}</p>
                  <h3 className="text-xl font-bold text-white mt-1 mb-1">{item.title}</h3>
                  <p className="text-md font-medium text-gray-300 mb-2">{item.subtitle}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;