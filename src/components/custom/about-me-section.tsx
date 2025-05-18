"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const AboutMeSection: React.FC = () => {
  const sectionRef = useScrollAnimation();

  const funFacts = [
    { emoji: '🧠', text: 'Thinks 100 things, says 1.' },
    { emoji: '👀', text: 'Observing everything, participating in nothing.' },
    { emoji: '😶‍🌫️', text: 'Fluent in overthinking and awkward silences.' },
    { emoji: '💻', text: 'Prefers debugging code over small talk.' },
    { emoji: '📡', text: 'Avoids eye contact like it’s an online virus.' },
    { emoji: '🧃', text: 'Fueled by juice, code, and quiet corners.' },
    { emoji: '🛌', text: 'Introvert mode: Always ON (unless recharging).' },
    { emoji: '🐱', text: 'Talks to cats. Gets more response than people.' },
    { emoji: '🧍‍♂️➡️🧍‍♂️', text: 'Master of avoiding people in hallways.' },
    { emoji: '🎧', text: 'Headphones in = do not disturb (even if no music).' },
    { emoji: '🚪', text: 'Favorite feature: Room with a door.' },
    { emoji: '🌑', text: 'Thrives in low-light, low-noise, low-social environments.' },
  ];
  

  return (
    <section id="about" ref={sectionRef} className="py-16 sm:py-24 bg-secondary/50 scroll-animate scroll-animate-fade-slide-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">
          🙋‍♂️ A Little About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Heyy There..... 📖</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-foreground leading-relaxed space-y-4">
                <p className="font-semibold">
                  👋 I'm Hk!
                </p>
                
                <p>
                  Not a prodigy. Not a topper. Just a curious middle-bencher who once thought HTML was a coding language and spent a whole evening wondering why div wasn't working because I typed it as dvd. 😅
                </p>

                <p>
                  My journey into tech didn't start with confidence — it started with confusion, broken code, and lots of Googling. But little by little, I stuck with it. From accidental bugs to accidental breakthroughs, I slowly fell in love with building stuff that works (even if it takes 37 tries).
                </p>

                <p>
                  Now, I'm a developer and designer who enjoys turning chaotic ideas into simple, usable things. I don't claim to know everything (still scared of regex, not gonna lie), but I love learning, experimenting, and figuring things out — even if it means breaking everything first.
                </p>

                <div className="mt-4">
                  <p className="mb-2">When I'm not coding, I'm probably:</p>
                  <ul className="space-y-2 pl-8">
                    <li className="flex items-center gap-2">
                      <span>🛠️</span> Messing around with random side projects
                    </li>
                    <li className="flex items-center gap-2">
                      <span>🍵</span> Overthinking life with a cup of tea
                    </li>
                    <li className="flex items-center gap-2">
                      <span>🎨</span> Clicking around Figma pretending I know design
                    </li>
                    <li className="flex items-center gap-2">
                      <span>😶‍🌫️</span> Trying to avoid attention in group calls
                    </li>
                  </ul>
                </div>

                <p className="mt-4">
                  I'm not the smartest in the room — but I'm definitely the one who doesn't give up. I'm just here to learn, grow, and make things better.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Fun Facts 🎉</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {funFacts.map((fact, index) => (
                  <li key={index} className="flex items-start text-lg text-foreground animate-fadeSlideUp" style={{ animationDelay: `${index * 0.2 + 0.5}s`}}>
                    <span className="mr-3 text-2xl">{fact.emoji}</span>
                    <span>{fact.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
