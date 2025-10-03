"use client";
import dynamic from 'next/dynamic';

// Import the riddle section component with SSR disabled to prevent hydration issues
const InteractiveRiddleSection = dynamic(() => import('./interactive-riddle-section'), {
  ssr: false,
  loading: () => (
    <section className="py-16 sm:py-24 bg-transparent relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            🧠 Interactive Math Challenge
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Loading interactive riddles...
          </p>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        </div>
      </div>
    </section>
  )
});

export default InteractiveRiddleSection;