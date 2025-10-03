"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageCircle, Github, Linkedin, Instagram } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const ContactSection: React.FC = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="contact" ref={sectionRef} className="py-16 sm:py-24 bg-transparent scroll-animate scroll-animate-fade-slide-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          📧 Get in Touch
        </h2>
        
        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Email Card */}
          <Card className="bg-black/20 backdrop-blur-sm border-white/20 hover:border-blue-400/50 transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                <Mail className="h-8 w-8 text-blue-400" />
              </div>
              <CardTitle className="text-white">Email Me</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 mb-4">Drop me a line anytime</p>
              <Button asChild variant="outline" className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10">
                <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card className="bg-black/20 backdrop-blur-sm border-white/20 hover:border-green-400/50 transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                <Phone className="h-8 w-8 text-green-400" />
              </div>
              <CardTitle className="text-white">Call Me</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 mb-4">Let's have a conversation</p>
              <Button asChild variant="outline" className="border-green-400/50 text-green-400 hover:bg-green-400/10">
                <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* WhatsApp Card */}
          <Card className="bg-black/20 backdrop-blur-sm border-white/20 hover:border-green-500/50 transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-600/20 rounded-full flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
                <MessageCircle className="h-8 w-8 text-green-500" />
              </div>
              <CardTitle className="text-white">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 mb-4">Quick chat on WhatsApp</p>
              <Button asChild variant="outline" className="border-green-500/50 text-green-500 hover:bg-green-500/10">
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat Now
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Connect With Me</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            <Button asChild variant="outline" size="lg" className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-blue-500/50 text-blue-500 hover:bg-blue-500/10">
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-pink-500/50 text-pink-500 hover:bg-pink-500/10">
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 mr-2" />
                Instagram
              </a>
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-black/20 backdrop-blur-sm border-white/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Something Amazing?</h3>
              <p className="text-gray-300 text-lg mb-6">
                Whether it's a project idea or just a chat, I'm always excited to connect with fellow innovators and creators.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
                <Mail className="h-5 w-5 mr-2" />
                Let's Talk
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;