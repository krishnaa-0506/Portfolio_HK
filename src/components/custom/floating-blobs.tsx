import React from 'react';

const FloatingBlobs: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Clean gradient orbs */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-[floatingBlobs1_25s_infinite_ease-in-out] opacity-60"
        style={{ top: '20%', left: '10%' }}
      />
      <div 
        className="absolute w-80 h-80 bg-gradient-to-br from-accent/8 to-transparent rounded-full blur-3xl animate-[floatingBlobs2_30s_infinite_ease-in-out_5s] opacity-50"
        style={{ bottom: '15%', right: '15%' }}
      />
      <div 
        className="absolute w-72 h-72 bg-gradient-to-br from-primary/6 to-transparent rounded-full blur-3xl animate-[floatingBlobs1_20s_infinite_ease-in-out_10s] opacity-40"
        style={{ top: '50%', right: '20%' }}
      />
      
      {/* Subtle geometric elements */}
      <div 
        className="absolute w-1 h-20 bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-[fadeInOut_8s_infinite_ease-in-out] opacity-30"
        style={{ top: '30%', left: '20%' }}
      />
      <div 
        className="absolute w-1 h-16 bg-gradient-to-b from-transparent via-accent/15 to-transparent animate-[fadeInOut_6s_infinite_ease-in-out_2s] opacity-25"
        style={{ top: '60%', left: '80%' }}
      />
      <div 
        className="absolute w-20 h-1 bg-gradient-to-r from-transparent via-primary/15 to-transparent animate-[fadeInOut_10s_infinite_ease-in-out_4s] opacity-20"
        style={{ top: '40%', left: '60%' }}
      />
      
      {/* Minimal floating dots */}
      <div 
        className="absolute w-2 h-2 bg-primary/30 rounded-full animate-[gentleFloat_12s_infinite_ease-in-out] opacity-40"
        style={{ top: '25%', left: '70%' }}
      />
      <div 
        className="absolute w-1.5 h-1.5 bg-accent/25 rounded-full animate-[gentleFloat_15s_infinite_ease-in-out_3s] opacity-35"
        style={{ top: '70%', left: '30%' }}
      />
      <div 
        className="absolute w-2.5 h-2.5 bg-primary/20 rounded-full animate-[gentleFloat_18s_infinite_ease-in-out_6s] opacity-30"
        style={{ top: '80%', left: '75%' }}
      />
      
      {/* Clean grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      {/* Subtle radial gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-primary/5 opacity-30"
      />
    </div>
  );
};

export default FloatingBlobs;
