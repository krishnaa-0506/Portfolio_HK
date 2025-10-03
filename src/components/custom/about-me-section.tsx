"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const AboutMeSection: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="about" ref={sectionRef} className="py-16 sm:py-24 bg-transparent scroll-animate scroll-animate-fade-slide-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          🙋‍♂️ A Little About Me
        </h2>
        <div className="flex justify-center">
          <Card className="shadow-2xl max-w-4xl w-full bg-black/20 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-400">Hey there 👋</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-gray-200 leading-relaxed space-y-4">
                <p>
                  I&apos;m <strong>Hari Krishnaa</strong> — a 3rd year Mechanical & Mechatronics engineering student who somehow manages to balance <strong>research, coding, startups, and coffee consumption</strong> all at once.
                </p>
                
                <p>
                  I specialize in <strong>additive manufacturing, AI automation, and advanced mechatronic systems</strong> — basically, if it involves robots, 3D printers, or making machines smarter than me, I&apos;m in. I&apos;ve published 20+ research papers (yes, I really enjoy writing that much), founded a startup called <strong>Hynex Technologies</strong>, and love turning crazy hackathon ideas into real-world prototypes.
                </p>

                <p>
                  On the tech side, I&apos;m equally at home designing manufacturing solutions, coding full-stack with <strong>MERN</strong>, or experimenting with AI-driven automation. On the fun side, I believe every bug has a personality, every prototype has an attitude, and every engineer deserves snacks during debugging.
                </p>

                <p>
                  My future goal? <strong>PG in Germany</strong> 🇩🇪, where I want to work on global-scale smart manufacturing systems while exploring bratwurst, pretzels, and a whole lot of engineering innovation.
                </p>

                <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                  <p className="mb-2 font-semibold">To sum it up:</p>
                  <ul className="space-y-2 pl-4">
                    <li className="flex items-center gap-2">
                      <span>✨</span> <strong>Engineer. Researcher. Founder. Innovator.</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <span>💬</span> Fluent in Mechatronics, Additive Manufacturing, MERN Stack, and Sarcasm.
                    </li>
                    <li className="flex items-center gap-2">
                      <span>🚀</span> Currently building today&apos;s solutions while accidentally planning tomorrow&apos;s problems.
                    </li>
                  </ul>
                </div>

                <p className="mt-4 text-primary font-medium">
                  If you&apos;re into <strong>AI, automation, startups, or just want to debate whether coffee is a food group</strong>, we&apos;ll probably get along.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;