import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          Made with <span role="img" aria-label="love" className="text-accent animate-pulse">💖</span> by Hari krishnaa
        </p>
        <p className="text-xs text-muted-foreground/70 mt-1">
          © {new Date().getFullYear()} HK&apos;s Portfolio – From Mechatronics to AI. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
