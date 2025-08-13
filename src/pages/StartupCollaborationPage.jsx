import React, { useState, useEffect } from 'react';
import { Users, Lightbulb, DollarSign, ArrowRight, Sparkles } from 'lucide-react';

export default function StartupCollaborationPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const FloatingParticle = ({ delay, duration, size }) => (
    <div 
      className={`absolute rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 animate-pulse ${size}`}
      style={{
        animation: `float ${duration}s ease-in-out infinite ${delay}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl transition-transform duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '20%',
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl transition-transform duration-1000"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            right: '10%',
            bottom: '20%',
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <FloatingParticle 
            key={i}
            delay={i * 0.5}
            duration={3 + i * 0.5}
            size={i % 2 === 0 ? 'w-2 h-2' : 'w-1 h-1'}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className={`max-w-4xl w-full text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="text-cyan-400 mr-2 animate-pulse" size={24} />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Startup Collaboration
              </h1>
              <Sparkles className="text-cyan-400 ml-2 animate-pulse" size={24} />
            </div>
            <div className="text-2xl md:text-3xl text-gray-300 font-light">
              Product Co-creation
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            
            {/* Left Side - We're inviting */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h2 className="text-2xl md:text-3xl text-white font-semibold mb-8">
                We're inviting:
              </h2>
              
              <div className="space-y-6">
                {[
                  { icon: Users, text: "Talented builders", color: "from-green-400 to-emerald-500" },
                  { icon: Lightbulb, text: "Curious early users", color: "from-yellow-400 to-orange-500" },
                  { icon: DollarSign, text: "Mission-aligned investors", color: "from-purple-400 to-pink-500" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="group flex items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 cursor-pointer transform hover:scale-105"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${item.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="text-white" size={24} />
                    </div>
                    <span className="text-lg md:text-xl text-gray-200 group-hover:text-white transition-colors duration-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Join us early */}
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <h2 className="text-2xl md:text-3xl text-white font-semibold mb-8">
                Join us early. Help shape what's next:
              </h2>
              
              <div className="space-y-6">
                {[
                  "Want to work with us?",
                  "Share your idea?",
                  "Want to invest?"
                ].map((text, index) => (
                  <div 
                    key={index}
                    className="group flex items-center justify-between p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 cursor-pointer transform hover:scale-105"
                    style={{ animationDelay: `${(index + 3) * 200}ms` }}
                  >
                    <span className="text-lg md:text-xl text-gray-200 group-hover:text-white transition-colors duration-300">
                      {text}
                    </span>
                    <ArrowRight 
                      className="text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" 
                      size={20} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button className="group relative px-12 py-4 text-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center">
                JOIN US
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </div>
              
              {/* Button Shine Effect */}
              <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
}