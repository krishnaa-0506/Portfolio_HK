// Add client-side rendering guard
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const toggleTheme = (e: React.MouseEvent) => {
    e.preventDefault();
    // theme switching logic
  };

  return (
    <button 
      onClick={toggleTheme}
      className="..."
    >
      {/* Icon rendering */}
    </button>
  );
};