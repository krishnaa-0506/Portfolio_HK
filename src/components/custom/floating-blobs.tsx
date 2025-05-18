import React from 'react';

const FloatingBlobs: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div 
        className="absolute w-72 h-72 bg-primary/30 rounded-full opacity-60 animate-[floatingBlobs1_20s_infinite_ease-in-out]"
        style={{ top: '10%', left: '20%' }}
      />
      <div 
        className="absolute w-96 h-96 bg-accent/30 rounded-full opacity-50 animate-[floatingBlobs2_25s_infinite_ease-in-out_2s]"
        style={{ bottom: '5%', right: '15%' }}
      />
      <div 
        className="absolute w-60 h-60 bg-secondary/40 rounded-full opacity-60 animate-[floatingBlobs1_18s_infinite_ease-in-out_1s]"
        style={{ top: '30%', right: '30%' }}
      />
       <div 
        className="absolute w-80 h-80 bg-primary/20 rounded-full opacity-50 animate-[floatingBlobs2_22s_infinite_ease-in-out_3s]"
        style={{ bottom: '20%', left: '10%' }}
      />
    </div>
  );
};

export default FloatingBlobs;
