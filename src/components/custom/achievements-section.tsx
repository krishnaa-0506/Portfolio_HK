"use client";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Award, Star, Medal, BadgeCheck, BookOpen, Languages } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  date: string;
}

const achievements: Achievement[] = [
  {
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    title: "First Place - Ideathon Winner",
    description: "Won first place in an Ideathon hosted by KPR College with a cash prize.",
    date: "2024",
  },
  {
    icon: <Award className="w-8 h-8 text-blue-500" />,
    title: "Smart India Hackathon Finalist",
    description: "Selected and participated in the Smart India Hackathon, contributing to national-scale problem solving.",
    date: "2024",
  },
  {
    icon: <Medal className="w-8 h-8 text-green-500" />,
    title: "24-Hour Hackathon Survivor",
    description: "Completed a 24-hour hackathon at KPR College, working on a real-time app prototype under pressure.",
    date: "2025",
  },
  {
    icon: <Star className="w-8 h-8 text-purple-500" />,
    title: "Technical Paper Presenter",
    description: "Presented innovative ideas and research at engineering colleges during technical symposiums.",
    date: "2023,2024,2025",
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-indigo-500" />,
    title: "Certified - AI/ML Intermediate (AWS)",
    description: "Completed an intermediate AI/ML course under AWS Academy, gaining hands-on cloud and ML skills.",
    date: "2023,2024",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-pink-500" />,
    title: "Completed Courses - Coursera, GeeksforGeeks, PrepInsta",
    description: "Built a strong technical foundation through self-paced learning across multiple platforms.",
    date: "2023 - 2025",
  },
  {
    icon: <Languages className="w-8 h-8 text-red-500" />,
    title: "German Language - Beginner Tests",
    description: "Completed basic German tests from online platforms to explore new languages and cultures.",
    date: "2024",
  },
];

const AchievementsSection: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="achievements" ref={sectionRef} className="py-16 sm:py-24 bg-background scroll-animate scroll-animate-fade-slide-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">
          🏆 Achievements & Recognition
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {achievement.description}
                  </p>
                  <p className="text-xs text-primary font-medium">
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