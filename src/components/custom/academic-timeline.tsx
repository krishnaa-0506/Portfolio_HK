import React from 'react';

const AcademicTimeline: React.FC = () => {
  const timelineData = [
    {
      year: 'KG-12th',
      title: 'Foundation Years',
      description: 'Primary & Secondary Education',
      icon: '📚',
      status: 'completed',
      details: 'Built strong foundation in mathematics and sciences'
    },
    {
      year: '2022',
      title: 'Engineering Begins',
      description: 'Joined Mechatronics Engineering',
      icon: '🎓',
      status: 'completed',
      details: 'Started journey at [Your College Name]'
    },
    {
      year: '2023',
      title: '2nd Year Excellence',
      description: 'Core subjects & first research papers',
      icon: '📝',
      status: 'completed',
      details: 'Published first research papers, learned advanced concepts'
    },
    {
      year: '2024',
      title: '3rd Year Innovation',
      description: 'Specialization + Startup + 20 Research Papers',
      icon: '💡',
      status: 'current',
      details: 'Founded HYNEX Technologies, published 20+ papers, Azure AI certified'
    },
    {
      year: '2025',
      title: 'Final Year Project',
      description: 'Advanced AI-Manufacturing Integration',
      icon: '🔬',
      status: 'upcoming',
      details: 'Capstone project combining all expertise'
    },
    {
      year: '2026',
      title: 'Germany - Masters',
      description: 'Advanced Manufacturing & Automation with AI',
      icon: '🇩🇪',
      status: 'goal',
      details: 'Areas of Interest: Hobby and passion as CEO of HYNEX Technologies to develop leadership. Completed 30+ projects for work professionals and college students. Looking forward to the future in Germany'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'current': return 'bg-primary animate-circuitPulse';
      case 'upcoming': return 'bg-yellow-500 animate-sensorBlink';
      case 'goal': return 'bg-gradient-to-r from-red-500 to-yellow-500 animate-manufacturingGlow';
      default: return 'bg-gray-400';
    }
  };

  const getTextColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600';
      case 'current': return 'text-primary font-bold';
      case 'upcoming': return 'text-yellow-600';
      case 'goal': return 'text-red-600 font-bold';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="relative py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">
          🎯 My Academic & Career Roadmap
        </h3>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
        
        {timelineData.map((item, index) => (
          <div key={item.year} className="relative flex items-start mb-8">
            {/* Timeline dot */}
            <div className={`relative z-10 w-16 h-16 rounded-full ${getStatusColor(item.status)} flex items-center justify-center text-white font-bold shadow-lg`}>
              <span className="text-xl">{item.icon}</span>
            </div>
            
            {/* Content */}
            <div className="ml-6 flex-1">
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getTextColor(item.status)} bg-background border border-current/20`}>
                {item.year}
              </div>
              <h4 className={`text-lg font-semibold mt-2 ${getTextColor(item.status)}`}>
                {item.title}
              </h4>
              <p className="text-muted-foreground mb-2">
                {item.description}
              </p>
              <p className="text-sm text-foreground/70 italic">
                {item.details}
              </p>
              
              {item.status === 'current' && (
                <div className="mt-2 inline-flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-sensorBlink"></div>
                  <span className="text-xs font-medium text-primary">Currently Active</span>
                </div>
              )}
              
              {item.status === 'goal' && (
                <div className="mt-2 inline-flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-sensorBlink"></div>
                  <span className="text-xs font-medium text-red-600">Future Destination</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default AcademicTimeline;