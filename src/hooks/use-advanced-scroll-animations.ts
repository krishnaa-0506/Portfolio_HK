"use client";
import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  animationType?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom' | 'rotate' | 'flip';
  delay?: number;
  duration?: number;
}

export const useAdvancedScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    animationType = 'fade',
    delay = 0,
    duration = 600
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasTriggered || !triggerOnce) {
            setTimeout(() => {
              setIsInView(true);
              if (triggerOnce) setHasTriggered(true);
            }, delay);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce, delay, hasTriggered]);

  const getAnimationStyles = () => {
    const baseStyles = {
      transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    };

    if (!isInView) {
      switch (animationType) {
        case 'fade':
          return { ...baseStyles, opacity: 0 };
        case 'slide-up':
          return { ...baseStyles, opacity: 0, transform: 'translateY(50px)' };
        case 'slide-left':
          return { ...baseStyles, opacity: 0, transform: 'translateX(-50px)' };
        case 'slide-right':
          return { ...baseStyles, opacity: 0, transform: 'translateX(50px)' };
        case 'zoom':
          return { ...baseStyles, opacity: 0, transform: 'scale(0.8)' };
        case 'rotate':
          return { ...baseStyles, opacity: 0, transform: 'rotate(-10deg) scale(0.8)' };
        case 'flip':
          return { ...baseStyles, opacity: 0, transform: 'rotateY(-90deg)' };
        default:
          return { ...baseStyles, opacity: 0 };
      }
    }

    return {
      ...baseStyles,
      opacity: 1,
      transform: 'translateY(0) translateX(0) scale(1) rotate(0) rotateY(0)'
    };
  };

  return {
    ref: elementRef,
    style: getAnimationStyles(),
    isInView,
  };
};

// Scroll-triggered counter animation
export const useCounterAnimation = (
  endValue: number,
  options: { duration?: number; startValue?: number; triggerOnce?: boolean } = {}
) => {
  const { duration = 2000, startValue = 0, triggerOnce = true } = options;
  const [count, setCount] = useState(startValue);
  const [isAnimating, setIsAnimating] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!isAnimating || !triggerOnce)) {
          setIsAnimating(true);
          
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);
            
            setCount(currentValue);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          animate();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [endValue, duration, startValue, triggerOnce, isAnimating]);

  return { ref: elementRef, count };
};

// Scroll progress indicator
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setProgress(Math.min(Math.max(progress, 0), 100));
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return progress;
};

// Parallax effect hook
export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const scrolled = window.scrollY;
      const rate = scrolled * speed;
      
      setOffset(rate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return {
    ref: elementRef,
    style: {
      transform: `translateY(${offset}px)`,
    },
  };
};