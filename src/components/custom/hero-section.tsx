import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';
import FloatingBlobs from './floating-blobs';
import { RippleButton } from './ripple-button'; // Assuming RippleButton is created

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <FloatingBlobs />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-floatInLeft">
          <Image
            src="https://ik.imagekit.io/n31diav73/WhatsApp%20Image%202025-02-15%20at%2010.11.36_8ddcfb9c.jpg?updatedAt=1747455017262"
            alt="Hari krishnaa's Profile Picture"
            width={150}
            height={150}
            data-ai-hint="cute avatar"
            className="mx-auto rounded-full shadow-lg border-4 border-primary mb-8"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
            Hi! I’m Hari Krishnaa 👋
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-10">
            An Affable and Ammanable Mechatronics Engineering Student
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <RippleButton
            asChild
            className="animate-bounceGlow animation-delay-200 shadow-lg"
            style={{ animationDelay: '0.5s' }}
          >
            <a href="https://ik.imagekit.io/n31diav73/HK%20RESUME.pdf?updatedAt=1747486856838" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </RippleButton>
          <RippleButton
            variant="secondary"
            asChild
            className="shadow-md hover:shadow-lg transition-shadow"
            style={{ animationDelay: '0.7s' }}
          >
            <a href="#contact">
              <Send className="mr-2 h-5 w-5" />
              Contact Me
            </a>
          </RippleButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
