"use client";
import { useEffect } from 'react';

const ScrollAnimationTrigger = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Add various animation classes based on element's data attributes or classes
          if (element.classList.contains('scroll-animate-fade')) {
            element.classList.add('is-visible');
          }
          if (element.classList.contains('scroll-animate-slide-up')) {
            element.classList.add('is-visible');
          }
          if (element.classList.contains('scroll-animate-slide-left')) {
            element.classList.add('is-visible');
          }
          if (element.classList.contains('scroll-animate-slide-right')) {
            element.classList.add('is-visible');
          }
          if (element.classList.contains('scroll-animate-scale')) {
            element.classList.add('is-visible');
          }
          if (element.classList.contains('scroll-animate-rotate')) {
            element.classList.add('is-visible');
          }

          // Stagger animation for containers
          if (element.classList.contains('stagger-container')) {
            const children = element.querySelectorAll('.stagger-item');
            children.forEach((child, index) => {
              setTimeout(() => {
                (child as HTMLElement).style.opacity = '1';
                (child as HTMLElement).style.transform = 'translateY(0)';
              }, index * 100);
            });
          }
        }
      });
    }, observerOptions);

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll(`
      .scroll-animate-fade,
      .scroll-animate-slide-up,
      .scroll-animate-slide-left,
      .scroll-animate-slide-right,
      .scroll-animate-scale,
      .scroll-animate-rotate,
      .stagger-container
    `);

    animatedElements.forEach((element) => {
      observer.observe(element);
      
      // Set initial styles for stagger items
      if (element.classList.contains('stagger-container')) {
        const children = element.querySelectorAll('.stagger-item');
        children.forEach((child) => {
          const childElement = child as HTMLElement;
          childElement.style.opacity = '0';
          childElement.style.transform = 'translateY(30px)';
          childElement.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
      }
    });

    // Parallax effect for certain elements
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const speed = parseFloat(htmlElement.dataset.speed || '0.5');
        const yPos = -(scrolled * speed);
        htmlElement.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default ScrollAnimationTrigger;