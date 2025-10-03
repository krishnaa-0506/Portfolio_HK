import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animationType?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'rotate' | 'slideDown' | 'bounce';
  delay?: number;
  duration?: number;
}

export const useAdvancedScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    animationType = 'fadeUp',
    delay = 0,
    duration = 800
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            element.classList.add('animate-in');
            
            // Apply animation based on type
            switch (animationType) {
              case 'fadeUp':
                element.style.transform = 'translateY(0)';
                element.style.opacity = '1';
                break;
              case 'fadeLeft':
                element.style.transform = 'translateX(0)';
                element.style.opacity = '1';
                break;
              case 'fadeRight':
                element.style.transform = 'translateX(0)';
                element.style.opacity = '1';
                break;
              case 'scale':
                element.style.transform = 'scale(1)';
                element.style.opacity = '1';
                break;
              case 'rotate':
                element.style.transform = 'rotate(0deg) scale(1)';
                element.style.opacity = '1';
                break;
              case 'slideDown':
                element.style.transform = 'translateY(0)';
                element.style.opacity = '1';
                break;
              case 'bounce':
                element.style.transform = 'translateY(0)';
                element.style.opacity = '1';
                element.style.animation = `bounceIn ${duration}ms ease-out`;
                break;
            }
          }, delay);
        }
      },
      { threshold, rootMargin }
    );

    // Set initial styles based on animation type
    element.style.transition = `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
    element.style.opacity = '0';
    
    switch (animationType) {
      case 'fadeUp':
        element.style.transform = 'translateY(60px)';
        break;
      case 'fadeLeft':
        element.style.transform = 'translateX(-60px)';
        break;
      case 'fadeRight':
        element.style.transform = 'translateX(60px)';
        break;
      case 'scale':
        element.style.transform = 'scale(0.8)';
        break;
      case 'rotate':
        element.style.transform = 'rotate(-10deg) scale(0.8)';
        break;
      case 'slideDown':
        element.style.transform = 'translateY(-60px)';
        break;
      case 'bounce':
        element.style.transform = 'translateY(60px)';
        break;
    }

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, animationType, delay, duration]);

  return { elementRef, isVisible };
};

// Stagger animation hook for animating multiple elements
export const useStaggerAnimation = (childSelector: string = '.stagger-item', delay: number = 100) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = container.querySelectorAll(childSelector);
          children.forEach((child, index) => {
            setTimeout(() => {
              (child as HTMLElement).style.opacity = '1';
              (child as HTMLElement).style.transform = 'translateY(0)';
            }, index * delay);
          });
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Set initial styles for children
    const children = container.querySelectorAll(childSelector);
    children.forEach((child) => {
      const element = child as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [childSelector, delay]);

  return containerRef;
};

// Parallax scroll hook
export const useParallaxScroll = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      element.style.transform = `translateY(${rate}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return elementRef;
};

// Mouse follow animation hook
export const useMouseFollow = (intensity: number = 0.1) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * intensity;
      const y = (e.clientY - rect.top - rect.height / 2) * intensity;
      
      element.style.transform = `translate(${x}px, ${y}px)`;
    };

    element.addEventListener('mousemove', handleMouseMove);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
    };
  }, [intensity]);

  return elementRef;
};