"use client";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Award, Star, Medal, BadgeCheck, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  date: string;
}

const achievements: Achievement[] = [
  {
    icon: <BadgeCheck className="w-8 h-8 text-blue-400" />,
    title: "Microsoft Azure AI Fundamentals Certified",
    description: "Successfully completed and certified in Microsoft Azure AI Fundamentals course with hands-on cloud AI services experience.",
    date: "2024",
  },
  {
    icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    title: "First Place - Ideathon Winner",
    description: "Won first place in an Ideathon hosted by KPR College with innovative AI-powered solution and cash prize of ₹15,000.",
    date: "2024",
  },
  {
    icon: <Award className="w-8 h-8 text-blue-400" />,
    title: "Smart India Hackathon Finalist",
    description: "Selected among top 1% participants nationwide in Smart India Hackathon, contributing to national-scale problem solving with AI/ML solutions.",
    date: "2024",
  },
  {
    icon: <Medal className="w-8 h-8 text-green-400" />,
    title: "24-Hour Hackathon Champion",
    description: "Successfully completed 24-hour hackathon at KPR College, developing a real-time IoT monitoring app prototype with React Native and Firebase.",
    date: "2025",
  },
  {
    icon: <Star className="w-8 h-8 text-purple-400" />,
    title: "Technical Paper Presenter & Research Scholar",
    description: "Presented 8+ innovative research papers on AI, IoT, and mechatronics at various engineering colleges and technical symposiums across Tamil Nadu.",
    date: "2023-2025",
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-indigo-400" />,
    title: "AWS Academy AI/ML Intermediate Certified",
    description: "Completed advanced AI/ML course under AWS Academy with 95% score, gaining expertise in SageMaker, Lambda, and cloud ML pipelines.",
    date: "2023-2024",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-pink-400" />,
    title: "Multi-Platform Learning Excellence",
    description: "Completed 50+ courses across Coursera, GeeksforGeeks, PrepInsta, Udemy covering Full-Stack Development, AI/ML, and System Design.",
    date: "2023 - 2025",
  },
  {
    icon: <Trophy className="w-8 h-8 text-orange-400" />,
    title: "HYNEX Technologies Founder & CEO",
    description: "Founded and leading HYNEX Technologies, developing AI-powered solutions for manufacturing and IoT automation with 5+ client projects.",
    date: "2024-Present",
  },
];

const AchievementsSection: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="achievements" ref={sectionRef} className="py-16 sm:py-24 bg-transparent scroll-animate scroll-animate-fade-slide-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          🏆 Achievements & Recognition
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-black/20 backdrop-blur-sm border-white/20 hover:border-white/40"
            >
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-white/10 backdrop-blur-sm rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {achievement.description}
                  </p>
                  <p className="text-xs text-blue-400 font-medium bg-blue-500/20 px-2 py-1 rounded-full inline-block">
                    {achievement.date}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;