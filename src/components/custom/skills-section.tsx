"use client";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bolt, Brain, Caravan, Code, Database, GitBranch, LayoutGrid, Palette, Smartphone, Workflow, Languages } from 'lucide-react';
import { useStaggerAnimation, useAdvancedScrollAnimation } from '@/hooks/use-advanced-scroll-animation';

interface Skill {
  name: string;
  icon: React.ElementType;
  level: string;
}

const skillsData: Skill[] = [
  { name: 'SolidWorks', icon: Caravan, level: 'Basic' },
  { name: 'AutoCAD', icon: Workflow, level: 'Intermediate' },
  { name: 'Arduino & ESP', icon: Bolt, level: 'Advanced' },
  { name: 'Manufacturing Automation', icon: Database, level: 'Intermediate' },
  { name: 'TypeScript & JavaScript', icon: Code, level: 'Intermediate' },
  { name: 'React & Next.js', icon: LayoutGrid, level: 'Advanced' },
  { name: 'Git & GitHub', icon: GitBranch, level: 'Advanced' },
  { name: 'Additive Manufacturing', icon: Palette, level: 'Intermediate' },
];

const languagesData: Skill[] = [
  { name: 'Tamil', icon: Languages, level: 'Native' },
  { name: 'English', icon: Languages, level: 'Complete' },
  { name: 'German', icon: Languages, level: 'Basics' },
];

const SkillsSection: React.FC = () => {
  const { elementRef: sectionRef } = useAdvancedScrollAnimation({ 
    animationType: 'fadeUp', 
    duration: 1000 
  });

  return (
    <section id="skills" ref={sectionRef} className="py-16 sm:py-24 bg-transparent scroll-animate scroll-animate-fade-slide-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          🛠️ Technical Skills & Languages
        </h2>        {/* Technical Skills */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center text-primary mb-6 scroll-animate-slide-left">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skillsData.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="text-center p-6 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:border-primary animate-cardHover interactive-hover glass-morphism"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="flex flex-col items-center justify-center">
                  <skill.icon className="w-12 h-12 text-primary mb-4 animate-bounceIn" style={{ animationDelay: `${index * 0.1}s` }} />
                  <h3 className="text-lg font-semibold text-foreground mb-1">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.level}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-xl font-semibold text-center text-primary mb-6 scroll-animate-slide-right">
            Languages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {languagesData.map((language, index) => (
              <Card 
                key={language.name} 
                className="text-center p-6 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:border-primary animate-cardHover interactive-hover glass-morphism neon-glow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="flex flex-col items-center justify-center">
                  <language.icon className="w-12 h-12 text-primary mb-4 animate-bounceIn" style={{ animationDelay: `${index * 0.2}s` }} />
                  <h3 className="text-lg font-semibold text-foreground mb-1">{language.name}</h3>
                  <p className="text-sm text-muted-foreground">{language.level}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
