
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Achievements', href: '#achievements', id: 'achievements' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const NavBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Runs once on mount to set initial theme and mounted status
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    // Apply theme class and update localStorage when theme or mounted status changes
    if (!mounted) return;

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    if (!mounted) return; // Prevent toggle before hydration
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    let currentSection = 'hero';
    navItems.forEach(item => {
      const section = document.getElementById(item.id);
      if (section) {
        const sectionTop = section.offsetTop - 100; // Adjusted offset
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = item.id;
        }
      }
    });
    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="#hero" className="text-2xl font-bold text-primary hover:text-accent transition-colors">
            Sparklefolio ✨
          </Link>
          <div className="flex items-center space-x-1">
            <nav className="hidden md:flex space-x-1">
              {navItems.map(item => (
                <Button
                  key={item.label}
                  variant="ghost"
                  asChild
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  )}
                >
                  <Link href={item.href} onClick={handleLinkClick}>{item.label}</Link>
                </Button>
              ))}
            </nav>
             {/* Theme Toggle Button - Desktop */}
            <div className="hidden md:flex items-center ml-2">
              <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                {mounted ? (theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />) : <div className="h-5 w-5" />}
              </Button>
            </div>
          </div>
         
          {/* Mobile Menu Toggle and Theme Toggle */}
          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme" className="mr-1">
              {mounted ? (theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />) : <div className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm shadow-lg">
          <nav className="flex flex-col items-center space-y-1 px-2 pb-3 pt-2">
            {navItems.map(item => (
              <Button
                key={item.label}
                variant="ghost"
                asChild
                className={cn(
                  "block w-full px-3 py-2 rounded-md text-base font-medium text-center",
                  activeSection === item.id
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                )}
              >
                <Link href={item.href} onClick={handleLinkClick}>{item.label}</Link>
              </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
