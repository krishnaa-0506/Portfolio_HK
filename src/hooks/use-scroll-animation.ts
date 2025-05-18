"use client";

import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation<T extends HTMLElement = HTMLElement>(options?: IntersectionObserverInit) {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally unobserve after first intersection
          // observer.unobserve(entry.target);
        } else {
          // Optionally reset animation if element scrolls out of view
          // setIsVisible(false); 
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        ...options,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  useEffect(() => {
    if (isVisible && elementRef.current) {
      elementRef.current.classList.add('is-visible');
    } else if (!isVisible && elementRef.current) {
      // Optionally remove class if element scrolls out of view and reset is desired
      // elementRef.current.classList.remove('is-visible');
    }
  }, [isVisible]);

  return elementRef;
}
