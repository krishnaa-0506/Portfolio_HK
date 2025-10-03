"use client";
import React from 'react';
import { GraduationCap, School, University, Footprints } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface EducationItem {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  iconBgClass: string;
}

const educationData: EducationItem[] = [
  {
    id: 'edu1',
    date: '2023-2025 - Present',
    title: 'Be.Mechanical and Mechatronics Engineering(Additive manufacturing)',
    subtitle: 'SNS College of Engineering',
    description: 'Pursuing with honors at SNS College of Engineering, with a strong focus on AI, robotics, and advanced manufacturing systems. Exploring the intersection of software, hardware, and intelligent automation.',
    icon: GraduationCap,
    iconBgClass: 'bg-blue-500 text-white',
  },
  {
    id: 'edu2',
    date: '2018-2023',
    title: 'Secondary & Higher Secondary Education',
    subtitle: 'SRT Universal Hr Sec School',
    description: 'Completed 10th and 12th at SRT Universal Hr Sec School with distinction, building a solid foundation in mathematics, physics, and engineering fundamentals.',
    icon: University,
    iconBgClass: 'bg-purple-500 text-white',
  },
  {
    id: 'edu3',
    date: '2016-2018',
    title: 'Middle School Education',
    subtitle: 'Shri Gurukulam Metric Hr Sec School',
    description: 'Developed early interest in electronics and design, actively participated in science exhibitions and creative problem-solving competitions.',
    icon: School,
    iconBgClass: 'bg-green-500 text-white',
  },
  {
    id: 'edu4',
    date: '2008-2016',
    title: 'Primary Education',
    subtitle: 'Holy Redemers Metric Hr Sec School',
    description: 'Established strong academic discipline and curiosity through interactive learning, earning recognition for creativity and early leadership.',
    icon: Footprints,
    iconBgClass: 'bg-orange-500 text-white',
  },
];

const EducationSection: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="education" ref={sectionRef} className="py-16 sm:py-24 bg-transparent scroll-animate scroll-animate-fade-slide-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          🎓 Education
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-border -translate-x-1/2 hidden md:block"></div>
          
          {educationData.map((item, index) => (
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

export default EducationSection;