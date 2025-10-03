import React from 'react';

const Industry40Animation: React.FC = () => {
  return (
    <div className="relative w-full h-48 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-lg overflow-hidden border border-primary/20">
      {/* Background Network Grid */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 400 200">
          <defs>
            <pattern id="networkGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" className="text-primary" opacity="0.3"/>
              <line x1="20" y1="0" x2="20" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-primary" opacity="0.2"/>
              <line x1="0" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-primary" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#networkGrid)" />
        </svg>
      </div>
      
      {/* Central Cloud/AI Hub */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Cloud shape */}
          <div className="w-16 h-10 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full animate-manufacturingGlow">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-primary">
              AI CORE
            </div>
          </div>
          
          {/* Pulsing rings */}
          <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-dotPulse"></div>
          <div className="absolute inset-0 border border-accent/20 rounded-full animate-dotPulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
      
      {/* Manufacturing Stations */}
      <div className="absolute top-8 left-12">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-green-500/40 border-2 border-green-400 rounded animate-roboticMove">
            <div className="text-xs text-center mt-1 text-green-400">🏭</div>
          </div>
          <div className="text-xs mt-1 text-green-400">Factory A</div>
        </div>
      </div>
      
      <div className="absolute top-8 right-12">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-blue-500/40 border-2 border-blue-400 rounded animate-roboticMove" style={{ animationDelay: '1s' }}>
            <div className="text-xs text-center mt-1 text-blue-400">🏭</div>
          </div>
          <div className="text-xs mt-1 text-blue-400">Factory B</div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-20">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-purple-500/40 border-2 border-purple-400 rounded animate-roboticMove" style={{ animationDelay: '2s' }}>
            <div className="text-xs text-center mt-1 text-purple-400">⚙️</div>
          </div>
          <div className="text-xs mt-1 text-purple-400">Assembly</div>
        </div>
      </div>
      
      <div className="absolute bottom-8 right-20">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-yellow-500/40 border-2 border-yellow-400 rounded animate-roboticMove" style={{ animationDelay: '1.5s' }}>
            <div className="text-xs text-center mt-1 text-yellow-400">📊</div>
          </div>
          <div className="text-xs mt-1 text-yellow-400">Analytics</div>
        </div>
      </div>
      
      {/* IoT Sensors */}
      <div className="absolute top-4 left-1/4">
        <div className="w-3 h-3 bg-red-400 rounded-full animate-sensorBlink"></div>
      </div>
      <div className="absolute top-4 right-1/4">
        <div className="w-3 h-3 bg-orange-400 rounded-full animate-sensorBlink" style={{ animationDelay: '0.5s' }}></div>
      </div>
      <div className="absolute bottom-4 left-1/3">
        <div className="w-3 h-3 bg-teal-400 rounded-full animate-sensorBlink" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="absolute bottom-4 right-1/3">
        <div className="w-3 h-3 bg-pink-400 rounded-full animate-sensorBlink" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Data Flow Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="dataStream" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="currentColor" className="text-primary/60" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {/* Connecting lines to AI Core */}
        <line x1="12%" y1="25%" x2="45%" y2="45%" stroke="url(#dataStream)" strokeWidth="2" 
              strokeDasharray="5,5" className="animate-automationFlow" />
        <line x1="88%" y1="25%" x2="55%" y2="45%" stroke="url(#dataStream)" strokeWidth="2" 
              strokeDasharray="5,5" className="animate-automationFlow" style={{ animationDelay: '1s' }} />
        <line x1="20%" y1="75%" x2="45%" y2="55%" stroke="url(#dataStream)" strokeWidth="2" 
              strokeDasharray="5,5" className="animate-automationFlow" style={{ animationDelay: '2s' }} />
        <line x1="80%" y1="75%" x2="55%" y2="55%" stroke="url(#dataStream)" strokeWidth="2" 
              strokeDasharray="5,5" className="animate-automationFlow" style={{ animationDelay: '1.5s' }} />
        
        {/* Sensor data streams */}
        <line x1="25%" y1="10%" x2="45%" y2="40%" stroke="url(#dataStream)" strokeWidth="1" 
              strokeDasharray="3,3" className="animate-sensorBlink" />
        <line x1="75%" y1="10%" x2="55%" y2="40%" stroke="url(#dataStream)" strokeWidth="1" 
              strokeDasharray="3,3" className="animate-sensorBlink" style={{ animationDelay: '0.5s' }} />
        <line x1="33%" y1="90%" x2="45%" y2="60%" stroke="url(#dataStream)" strokeWidth="1" 
              strokeDasharray="3,3" className="animate-sensorBlink" style={{ animationDelay: '1s' }} />
        <line x1="67%" y1="90%" x2="55%" y2="60%" stroke="url(#dataStream)" strokeWidth="1" 
              strokeDasharray="3,3" className="animate-sensorBlink" style={{ animationDelay: '1.5s' }} />
      </svg>
      
      {/* Floating Data Particles */}
      <div className="absolute top-12 left-8">
        <div className="w-1 h-1 bg-cyan-400 rounded-full animate-automationFlow"></div>
      </div>
      <div className="absolute top-16 right-16">
        <div className="w-1 h-1 bg-lime-400 rounded-full animate-automationFlow" style={{ animationDelay: '0.8s' }}></div>
      </div>
      <div className="absolute bottom-12 left-16">
        <div className="w-1 h-1 bg-rose-400 rounded-full animate-automationFlow" style={{ animationDelay: '1.6s' }}></div>
      </div>
      <div className="absolute bottom-16 right-8">
        <div className="w-1 h-1 bg-violet-400 rounded-full animate-automationFlow" style={{ animationDelay: '2.4s' }}></div>
      </div>
      
      {/* Industry 4.0 Labels */}
      <div className="absolute top-2 left-2">
        <div className="text-xs font-bold text-primary/80">INDUSTRY 4.0</div>
        <div className="text-xs text-primary/60">Smart Connected Manufacturing</div>
      </div>
      
      <div className="absolute bottom-2 right-2">
        <div className="flex space-x-2 text-xs text-primary/60">
          <span>IoT</span>
          <span>•</span>
          <span>AI</span>
          <span>•</span>
          <span>Automation</span>
          <span>•</span>
          <span>Analytics</span>
        </div>
      </div>
      
      {/* Real-time Status Indicators */}
      <div className="absolute top-2 right-2">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-sensorBlink"></div>
          <div className="text-xs text-green-400">ONLINE</div>
        </div>
      </div>
    </div>
  );
};

export default Industry40Animation;