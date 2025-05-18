"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail, Instagram, MessageCircle, Phone } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const ContactSection: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-gradient-to-b from-secondary/50 to-primary/10 scroll-animate scroll-animate-fade-slide-up"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12 animate-bounce">
          📞 Let’s Connect!
        </h2>

        <div className="flex flex-col items-center space-y-8">
          {/* Floating Contact Card */}
          <Card className="relative max-w-md w-full shadow-2xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl bg-white/90 backdrop-blur-md animate-formPopIn">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg -z-10 animate-pulse"></div>
            <CardHeader>
              <CardTitle className="text-2xl text-primary text-center">Reach Out Anytime! 🚀</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-center text-muted-foreground">
                I’m excited to hear from you! Click below to get in touch instantly.
              </p>

              <div className="flex flex-col space-y-4">
                {/* WhatsApp */}
                <Button
                  variant="default"
                  size="lg"
                  className="w-full bg-green-500 hover:bg-green-600 text-white transform transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a
                    href="https://wa.me/916379726858?text=Hi%20Hari%20Krishnaa,%20I’d%20like%20to%20connect!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>

                {/* Email */}
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-primary text-primary hover:bg-primary/10 transform transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="mailto:krishnaahari05@gmail.com?subject=Let’s%20Collaborate!">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Me
                  </a>
                </Button>

                {/* Call */}
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-primary text-primary hover:bg-primary/10 transform transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="tel:+916379726858">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Me
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 animate-formPopIn" style={{ animationDelay: '0.2s' }}>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
              asChild
            >
              <a
                href="https://github.com/krish0506-eng"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/hari-krishnaa-n-"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
              asChild
            >
              <a
                href="https://www.instagram.com/fluffy_guy_06_?igsh=MXVpYm9lZnFvdTBuMA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </Button>
          </div>

          {/* Tagline */}
          <p className="text-center text-muted-foreground max-w-md">
            Let’s build something amazing together! Whether it’s a project, idea, or just a chat, I’m here for you. 😊
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;