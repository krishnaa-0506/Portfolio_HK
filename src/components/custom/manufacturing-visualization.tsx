import React from 'react';

const ManufacturingVisualization: React.FC = () => {
  return (
    <div className="relative w-full h-40 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg overflow-hidden">
      {/* Assembly Line */}
      <div className="absolute bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-primary/30 to-primary/20 rounded-full">
        {/* Moving parts on the assembly line */}
        <div className="absolute top-0 w-4 h-2 bg-accent rounded-full animate-automationFlow"></div>
        <div className="absolute top-0 w-3 h-2 bg-primary rounded-full animate-automationFlow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 w-5 h-2 bg-accent/80 rounded-full animate-automationFlow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Robotic Arms */}
      <div className="absolute top-8 left-12">
        <div className="w-8 h-1 bg-primary/60 rounded-full transform-gpu animate-roboticMove origin-left"></div>
        <div className="w-6 h-1 bg-accent/60 rounded-full transform-gpu animate-roboticMove origin-left" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="absolute top-8 right-12">
        <div className="w-8 h-1 bg-primary/60 rounded-full transform-gpu animate-roboticMove origin-right"></div>
        <div className="w-6 h-1 bg-accent/60 rounded-full transform-gpu animate-roboticMove origin-right" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Sensors */}
      <div className="absolute top-4 left-1/4">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-sensorBlink"></div>
        <div className="text-xs text-green-400 mt-1 opacity-60">Temp</div>
      </div>
      
      <div className="absolute top-4 left-1/2">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-sensorBlink" style={{ animationDelay: '0.5s' }}></div>
        <div className="text-xs text-blue-400 mt-1 opacity-60">Pressure</div>
      </div>
      
      <div className="absolute top-4 right-1/4">
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-sensorBlink" style={{ animationDelay: '1s' }}></div>
        <div className="text-xs text-yellow-400 mt-1 opacity-60">Quality</div>
      </div>
      
      {/* Manufacturing Stations */}
      <div className="absolute bottom-12 left-8">
        <div className="w-6 h-6 bg-primary/40 rounded border-2 border-primary/60 animate-manufacturingGlow"></div>
        <div className="text-xs text-center mt-1 text-primary opacity-70">Station 1</div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-6 bg-accent/40 rounded border-2 border-accent/60 animate-manufacturingGlow" style={{ animationDelay: '1s' }}></div>
        <div className="text-xs text-center mt-1 text-accent opacity-70">Station 2</div>
      </div>
      
      <div className="absolute bottom-12 right-8">
        <div className="w-6 h-6 bg-primary/40 rounded border-2 border-primary/60 animate-manufacturingGlow" style={{ animationDelay: '2s' }}></div>
        <div className="text-xs text-center mt-1 text-primary opacity-70">QC</div>
      </div>
      
      {/* Data Flow Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="currentColor" className="text-primary/30" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {/* Connecting lines between stations */}
        <line 
          x1="20%" y1="70%" 
          x2="50%" y2="70%" 
          stroke="url(#dataFlow)" 
          strokeWidth="1" 
          strokeDasharray="5,5"
          className="animate-automationFlow"
        />
        <line 
          x1="50%" y1="70%" 
          x2="80%" y2="70%" 
          stroke="url(#dataFlow)" 
          strokeWidth="1" 
          strokeDasharray="5,5"
          className="animate-automationFlow"
          style={{ animationDelay: '1s' }}
        />
        
        {/* Sensor data lines */}
        <line 
          x1="25%" y1="30%" 
          x2="25%" y2="60%" 
          stroke="url(#dataFlow)" 
          strokeWidth="1" 
          strokeDasharray="3,3"
          className="animate-sensorBlink"
        />
        <line 
          x1="50%" y1="30%" 
          x2="50%" y2="60%" 
          stroke="url(#dataFlow)" 
          strokeWidth="1" 
          strokeDasharray="3,3"
          className="animate-sensorBlink"
          style={{ animationDelay: '0.5s' }}
        />
        <line 
          x1="75%" y1="30%" 
          x2="75%" y2="60%" 
          stroke="url(#dataFlow)" 
          strokeWidth="1" 
          strokeDasharray="3,3"
          className="animate-sensorBlink"
          style={{ animationDelay: '1s' }}
        />
      </svg>
      
      {/* Title */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
        <div className="text-sm font-semibold text-primary/80">Smart Manufacturing Line</div>
      </div>
    </div>
  );
};

export default ManufacturingVisualization;