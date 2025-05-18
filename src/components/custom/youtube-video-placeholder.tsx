
"use client";
import React from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Card, CardContent } from '@/components/ui/card';

const YouTubeVideoPlaceholder: React.FC = () => {
  const sectionRef = useScrollAnimation();
  // Convert YouTube URL to embed URL
  const videoId = "YzjU4DcSTVA";
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <section id="video-intro" ref={sectionRef} className="py-16 sm:py-24 bg-background scroll-animate scroll-animate-fade-slide-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">
          🎬 A short Introduction
        </h2>
        <Card className="shadow-xl overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-video w-full">
              <iframe
                src={embedUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default YouTubeVideoPlaceholder;
