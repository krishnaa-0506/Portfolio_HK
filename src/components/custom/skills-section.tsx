"use client";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bolt, Brain, Caravan, Code, Database, GitBranch, LayoutGrid, MouseIcon, Palette, Smartphone, Workflow } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface Skill {
  name: string;
  icon: React.ElementType;
  level: string; // e.g., "Advanced", "Intermediate"
}

const skillsData: Skill[] = [
  { name: 'Solid Works', icon: Caravan, level: 'Basics' },
  { name: 'Auto cad', icon: Workflow, level: 'Intermidiate' },
  { name: 'Typescript And Java script', icon: Code, level: 'Basic' },
  { name: 'React & Next.js', icon: LayoutGrid, level: 'Intermediate' },
  { name: 'Node.js', icon: Database, level: 'Intermediate' },
  { name: 'Git & GitHub', icon: GitBranch, level: 'Intermidiate' },
  { name: 'Responsive Design', icon: Smartphone, level: 'Advanced' },
  { name: 'UI/UX Principles', icon: Palette, level: 'Intermediate' },
  { name: 'Figma & Flutterflow', icon: Bolt, level: 'Advanced' },
  { name: 'No-Code AI Builder', icon: Code, level: 'Advanced' },
  { name: 'Prompt Wizard', icon: Brain, level: 'Advanced' },
  { name: 'Drag and drop Apps', icon: MouseIcon, level: 'Advanced' },
];

const SkillsSection: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="skills" ref={sectionRef} className="py-16 sm:py-24 scroll-animate scroll-animate-fade-slide-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">
          🛠️ My Skill Arsenal
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <Card 
              key={skill.name} 
              className="text-center p-6 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:border-primary animate-fadeSlideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="flex flex-col items-center justify-center">
                <skill.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-1">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.level}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
