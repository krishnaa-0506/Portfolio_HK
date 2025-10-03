import NavBar from '@/components/custom/nav-bar';
import HeroSection from '@/components/custom/hero-section';
import AboutMeSection from '@/components/custom/about-me-section';
import InteractiveRiddleSection from '@/components/custom/interactive-riddle-wrapper';
import SkillsSection from '@/components/custom/skills-section';
import ProjectsSection from '@/components/custom/projects-section';
import ExperienceSection from '@/components/custom/experience-section';
import EducationSection from '@/components/custom/education-section';
import AchievementsSection from '@/components/custom/achievements-section';
// import ContactSection from '@/components/custom/contact-section';
import Footer from '@/components/custom/footer';
import ResearchPublications from '@/components/custom/research-publications';
import HobbiesPassionSection from '@/components/custom/hobbies-passion-section';

// Advanced Background Effects - Layer by Layer
import MechanicalGears from '@/components/custom/mechanical-gears';
import MatrixRain from '@/components/custom/matrix-rain';
import DNAHelix from '@/components/custom/dna-helix';
import MagneticField from '@/components/custom/magnetic-field';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Multi-Layer Advanced Background System */}
     
      <MagneticField />
      <DNAHelix />
      <MatrixRain />
      <MechanicalGears />
      
      <NavBar />
      <main className="flex-grow relative z-10">
        {/* Engineering Journey Banner */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center gap-4 bg-background/80 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/20">
              <span className="text-lg">🎓</span>
              <span className="text-sm font-medium text-primary">3rd Year Student</span>
              <span className="text-sm text-muted-foreground">|</span>
              <span className="text-lg">🖨️</span>
              <span className="text-sm font-medium text-primary">Additive Manufacturing</span>
              <span className="text-sm text-muted-foreground">|</span>
              <span className="text-lg">🇩🇪</span>
              <span className="text-sm font-medium text-primary">Germany Bound</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <div className="relative">
          <HeroSection />
        </div>
        
        {/* About Section */}
        <div className="relative">
          <AboutMeSection />
        </div>
        
        {/* Interactive Riddle Section */}
        <div className="relative">
          <InteractiveRiddleSection />
        </div>
        
        {/* Skills Section */}
        <div className="relative">
          <SkillsSection />
        </div>
        
        {/* Research Publications */}
        <section className="bg-transparent">
          <ResearchPublications />
        </section>
        
        {/* Projects Section */}
        <div className="relative">
          <ProjectsSection />
        </div>
        
        {/* Experience Section */}
        <div className="relative">
          <ExperienceSection />
        </div>
        
        {/* Education Section */}
        <div className="relative">
          <EducationSection />
        </div>
        
        {/* Achievements Section */}
        <section>
          <AchievementsSection />
        </section>
        
        {/* Hobbies and Passion Section */}
        <section>
          <HobbiesPassionSection />
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24 bg-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
              📧 Get in Touch
            </h2>
            
            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Email Card */}
              <div className="bg-black/20 backdrop-blur-sm border border-white/20 hover:border-blue-400/50 transition-all duration-300 group rounded-lg p-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <span className="text-blue-400 text-2xl">📧</span>
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">Personal Email</h3>
                  <p className="text-gray-300 mb-4">Drop me a line anytime</p>
                  <a href="mailto:krishnaahar05@gmail.com" className="inline-flex items-center px-4 py-2 border border-blue-400/50 text-blue-400 hover:bg-blue-400/10 rounded-md transition-colors">
                    Send Email
                  </a>
                </div>
              </div>

              {/* HYNEX Technologies Email */}
              <div className="bg-black/20 backdrop-blur-sm border border-white/20 hover:border-purple-400/50 transition-all duration-300 group rounded-lg p-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                    <span className="text-purple-400 text-2xl">🏢</span>
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">HYNEX Technologies</h3>
                  <p className="text-gray-300 mb-4">Business inquiries</p>
                  <a href="mailto:hynextechnologies25@gmail.com" className="inline-flex items-center px-4 py-2 border border-purple-400/50 text-purple-400 hover:bg-purple-400/10 rounded-md transition-colors">
                    Business Email
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-black/20 backdrop-blur-sm border border-white/20 hover:border-green-400/50 transition-all duration-300 group rounded-lg p-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <span className="text-green-400 text-2xl">📞</span>
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">Call Me</h3>
                  <p className="text-gray-300 mb-4">Let's have a conversation</p>
                  <a href="tel:+916379726858" className="inline-flex items-center px-4 py-2 border border-green-400/50 text-green-400 hover:bg-green-400/10 rounded-md transition-colors">
                    Call Now
                  </a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-black/20 backdrop-blur-sm border border-white/20 hover:border-green-500/50 transition-all duration-300 group rounded-lg p-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-600/20 rounded-full flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
                    <span className="text-green-500 text-2xl">💬</span>
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">WhatsApp</h3>
                  <p className="text-gray-300 mb-4">Quick chat on WhatsApp</p>
                  <a href="https://wa.me/916379726858" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-green-500/50 text-green-500 hover:bg-green-500/10 rounded-md transition-colors">
                    Chat Now
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-8">Connect With Me</h3>
              <div className="flex justify-center gap-6 flex-wrap">
                <a href="https://www.hynex.tech" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-orange-400/50 text-orange-400 hover:bg-orange-400/10 rounded-md transition-colors">
                  🚀 HYNEX Technologies
                </a>
                
                <a href="https://github.com/krishnaa-0506" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-purple-400/50 text-purple-400 hover:bg-purple-400/10 rounded-md transition-colors">
                  🐙 GitHub
                </a>
                
                <a href="https://www.linkedin.com/in/hari-krishnaa-n-" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-blue-500/50 text-blue-500 hover:bg-blue-500/10 rounded-md transition-colors">
                  💼 LinkedIn
                </a>
                
                <a href="https://www.researchgate.net/profile/Hari-Hk-3?ev=hdr_xprf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 rounded-md transition-colors">
                  📚 ResearchGate
                </a>
                
                <a href="https://www.instagram.com/hari_krishnaa_06?igsh=MXVpYm9lZnFvdTBuMA==" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-pink-500/50 text-pink-500 hover:bg-pink-500/10 rounded-md transition-colors">
                  📸 Instagram
                </a>
              </div>
            </div>

            {/* HYNEX Technologies Showcase */}
            <div className="text-center mt-16 mb-12">
              <div className="bg-gradient-to-r from-orange-500/20 via-red-500/20 to-yellow-500/20 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto border border-orange-400/30">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                    <span className="text-white text-3xl">🚀</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">HYNEX Technologies</h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  My passion startup focused on AI-powered solutions for manufacturing automation and IoT ecosystems. 
                  We're building the future of Industry 4.0 with cutting-edge technology and innovative engineering solutions.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <a href="https://www.hynex.tech" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-md transition-colors">
                    🌐 Visit Website
                  </a>
                  <a href="mailto:hynextechnologies25@gmail.com" className="inline-flex items-center px-6 py-3 border border-orange-400/50 text-orange-400 hover:bg-orange-400/10 rounded-md transition-colors">
                    📧 Business Inquiry
                  </a>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-black/20 backdrop-blur-sm border border-white/20 max-w-2xl mx-auto rounded-lg p-8">
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Something Amazing?</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Whether it's a project collaboration, research discussion, or just a friendly chat about technology and innovation - I'm always excited to connect with fellow innovators and creators.
                </p>
                <a href="https://wa.me/916379726858" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-md transition-colors text-lg">
                  � Let's Talk on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}