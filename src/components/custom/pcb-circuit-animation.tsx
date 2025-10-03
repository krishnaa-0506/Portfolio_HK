import React from 'react';

const PCBCircuitAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-40 bg-gradient-to-br from-green-800 to-green-900 rounded-lg overflow-hidden border-2 border-yellow-600/30">
      {/* PCB Background - More realistic green */}
      <div className="absolute inset-0 bg-green-800">
        {/* PCB Substrate texture */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 400 160">
            <defs>
              <pattern id="pcbTexture" width="8" height="8" patternUnits="userSpaceOnUse">
                <rect width="8" height="8" fill="none"/>
                <circle cx="4" cy="4" r="0.5" fill="#22c55e" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pcbTexture)"/>
          </svg>
        </div>
      </div>
      
      {/* Copper Traces - More realistic */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="copperTrace" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        
        {/* Main power traces */}
        <path 
          d="M 20 30 L 80 30 L 100 45 L 160 45 L 180 30 L 250 30 L 270 45 L 340 45 L 380 30" 
          fill="none" 
          stroke="url(#copperTrace)" 
          strokeWidth="3"
          opacity="0.9"
        />
        <path 
          d="M 20 80 L 60 80 L 80 95 L 140 95 L 160 80 L 220 80 L 240 95 L 300 95 L 320 80 L 380 80" 
          fill="none" 
          stroke="url(#copperTrace)" 
          strokeWidth="3"
          opacity="0.9"
        />
        
        {/* Signal traces */}
        <path 
          d="M 20 110 L 120 110 L 140 125 L 200 125 L 220 110 L 380 110" 
          fill="none" 
          stroke="url(#copperTrace)" 
          strokeWidth="1.5"
          opacity="0.8"
        />
        
        {/* Via connections */}
        <circle cx="80" cy="30" r="2" fill="#fbbf24" stroke="#f59e0b" strokeWidth="0.5"/>
        <circle cx="160" cy="45" r="2" fill="#fbbf24" stroke="#f59e0b" strokeWidth="0.5"/>
        <circle cx="240" cy="95" r="2" fill="#fbbf24" stroke="#f59e0b" strokeWidth="0.5"/>
        <circle cx="140" cy="125" r="2" fill="#fbbf24" stroke="#f59e0b" strokeWidth="0.5"/>
      </svg>
      
      {/* Electronic Components - More realistic */}
      {/* Main Microcontroller */}
      <div className="absolute top-4 left-12">
        <div className="w-12 h-8 bg-black border border-gray-600 rounded-sm shadow-lg">
          <div className="text-xs text-yellow-400 text-center mt-1 font-mono">STM32</div>
          <div className="flex justify-between px-1 mt-1">
            <div className="w-1 h-1 bg-silver rounded-full"></div>
            <div className="w-1 h-1 bg-silver rounded-full"></div>
            <div className="w-1 h-1 bg-silver rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Sensor Module */}
      <div className="absolute top-4 right-16">
        <div className="w-8 h-8 bg-blue-900 border border-blue-400 rounded-sm shadow-lg">
          <div className="text-xs text-blue-300 text-center mt-1">IMU</div>
          <div className="w-2 h-2 bg-blue-400 rounded-full mx-auto mt-1 animate-pulse"></div>
        </div>
      </div>
      
      {/* Resistors */}
      <div className="absolute top-8 left-32">
        <div className="w-6 h-2 bg-gradient-to-r from-yellow-600 via-red-600 to-yellow-600 rounded-sm shadow-sm"></div>
        <div className="text-xs text-yellow-300 text-center mt-1">10kΩ</div>
      </div>
      
      <div className="absolute bottom-8 left-40">
        <div className="w-6 h-2 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 rounded-sm shadow-sm"></div>
        <div className="text-xs text-orange-300 text-center mt-1">4.7kΩ</div>
      </div>
      
      {/* Capacitors */}
      <div className="absolute top-6 right-32">
        <div className="w-4 h-6 bg-gray-700 border border-gray-500 rounded-sm shadow-lg">
          <div className="w-full h-1 bg-silver mt-2"></div>
          <div className="w-full h-1 bg-silver mt-1"></div>
        </div>
        <div className="text-xs text-gray-300 text-center mt-1">100μF</div>
      </div>
      
      {/* Crystal Oscillator */}
      <div className="absolute bottom-4 right-20">
        <div className="w-5 h-3 bg-silver border border-gray-400 rounded-sm shadow-lg">
          <div className="text-xs text-gray-800 text-center">16M</div>
        </div>
      </div>
      
      {/* LEDs with realistic glow */}
      <div className="absolute top-3 right-4">
        <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg animate-pulse">
          <div className="w-1 h-1 bg-green-300 rounded-full mx-auto mt-1"></div>
        </div>
        <div className="text-xs text-green-400 mt-1">PWR</div>
      </div>
      
      <div className="absolute bottom-3 right-8">
        <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1s' }}>
          <div className="w-1 h-1 bg-blue-300 rounded-full mx-auto mt-1"></div>
        </div>
        <div className="text-xs text-blue-400 mt-1">DATA</div>
      </div>
      
      {/* Connector/Header */}
      <div className="absolute bottom-2 left-8">
        <div className="flex space-x-1">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-1 h-4 bg-gray-600 border border-gray-500"></div>
          ))}
        </div>
        <div className="text-xs text-gray-400 text-center mt-1">GPIO</div>
      </div>
      
      {/* Sensor highlight area */}
      <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
        <div className="px-3 py-1 bg-blue-500/20 border border-blue-400/50 rounded text-xs text-blue-300 font-semibold">
          🔬 Smart Sensor Integration PCB
        </div>
      </div>
      
      {/* PCB Info */}
      <div className="absolute bottom-1 left-2">
        <div className="text-xs font-mono text-yellow-400 opacity-80">Rev 2.1 | 4-Layer</div>
      </div>
      
      {/* Signal indicators */}
      <div className="absolute bottom-1 right-2">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default PCBCircuitAnimation;