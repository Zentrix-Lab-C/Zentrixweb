import React, { useState, useEffect } from 'react';

const Ventures = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const ventures = [
    {
      id: 'boma',
      name: 'BOMA',
      subtitle: 'BEYOND ORDINARY MACHINE ASSISTANCE',
      description: 'next-gen AI assistant platform inspired by J.A.R.V.I.S, designed to deliver powerful, adaptive, and modular intelligence across voice, text, and real-world control systems.',
      image: "./assets/boma.png", 
      color: 'cyan',
      gradient: 'from-cyan-500 via-blue-500 to-cyan-400',
      bgGlow: 'bg-cyan-500/20'
    },
    {
      id: 'zylo',
      name: 'ZYLO',
      subtitle: 'ROBOTICS ECOSYSTEM',
      description: 'next-gen AI-powered humanoid robotics ecosystem developed by Zentrix Lab to protect, assist, simulate, and explore across multiple domains.',
      image: "./assets/zylo.png", 
      color: 'pink',
      gradient: 'from-pink-500 via-purple-500 to-cyan-400',
      bgGlow: 'bg-pink-500/20'
    },
    {
      id: 'mathub',
      name: 'Mathub Biz',
      subtitle: 'HYBRID LIFESTYLE SERVICES',
      description: 'hybrid lifestyle and digital services brand that delivers real-world essentials, from fashion and salon care to tech repairs and digital products under one trusted name.',
      image: "./assets/mathub.png", 
      color: 'amber',
      gradient: 'from-amber-500 via-orange-500 to-yellow-400',
      bgGlow: 'bg-amber-500/20'
    },
    {
      id: 'aning',
      name: 'ANING',
      subtitle: 'SMART DISCOVERY PLATFORM',
      description: 'smart business & service discovery platform that connects users to verified brands, professionals, and companies worldwide, powered by location detection, trust indicators, & more',
      image: "./assets/aning.png", 
      color: 'blue',
      gradient: 'from-blue-500 via-indigo-500 to-purple-400',
      bgGlow: 'bg-blue-500/20'
    },
    {
      id: 'kopo',
      name: 'KOPO',
      subtitle: 'FINANCIAL SUPER APP',
      description: 'next-gen financial super app that merges traditional banking, crypto custody, smart financial automation, and community-driven tools all in one secure platform',
      image: "./assets/kopo.png",
      color: 'purple',
      gradient: 'from-purple-500 via-indigo-500 to-blue-400',
      bgGlow: 'bg-purple-500/20'
    }
  ];

  return (
    <div className="min-h-scree bg-gray-950 text-white overflow-hidden relative">
      {/* Background Elements with zoom animation */}
      <div className={`absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black transition-all duration-2000 ${
        isVisible ? 'scale-100' : 'scale-110'
      }`} />
      
      {/* Floating orbs with zoom and fade */}
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl transition-all duration-3000 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`} />
      <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-3000 delay-500 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`} />
      
      {/* Grid Pattern with fade in */}
      <div className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] transition-opacity duration-2000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`} />

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header with dramatic zoom in */}
        <div className={`text-center mb-16 transition-all duration-1500 ${
          isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-20'
        }`}>
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent transition-all duration-2000 ${
            isVisible ? 'scale-100' : 'scale-150'
          }`}>
            Our Ventures
          </h1>
          <div className={`w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full transition-all duration-1500 delay-300 ${
            isVisible ? 'scale-x-100' : 'scale-x-0'
          }`} />
        </div>

        {/* Ventures Grid with staggered zoom animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {ventures.map((venture, index) => (
            <div
              key={venture.id}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 200 + 600}ms`,
                perspective: '1000px'
              }}
              onMouseEnter={() => setHoveredCard(venture.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card with enhanced hover zoom */}
              <div
                className={`
                  relative bg-gray-900/80 backdrop-blur-xl border border-gray-800/50
                  rounded-2xl p-3 h-full min-h-[220px] overflow-hidden
                  transition-all duration-500 group-hover:border-gray-700/50
                  group-hover:shadow-2xl group-hover:shadow-cyan-500/10
                  flex flex-col md:flex-row items-center gap-6
                  ${hoveredCard === venture.id ? 'scale-105 -translate-y-2' : 'scale-100 translate-y-0'}
                `}
              >
                {/* Background Glow with zoom effect */}
                <div
                  className={`
                    absolute -top-20 -right-20 w-40 h-40 ${venture.bgGlow} 
                    rounded-full blur-3xl transition-all duration-700
                    ${hoveredCard === venture.id ? 'opacity-100 scale-150' : 'opacity-0 scale-100'}
                  `}
                />

                {/* Image side with rotation and zoom */}
                <div
                  className={`
                    flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-xl
                    bg-gradient-to-br ${venture.gradient} shadow-lg relative z-10 overflow-hidden
                    transition-all duration-600 
                    ${hoveredCard === venture.id ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}
                  `}
                >
                  <img
                    src={venture.image}
                    alt={venture.name}
                    className={`w-full h-full object-cover transition-all duration-600 ${
                      hoveredCard === venture.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  {/* Image overlay zoom effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${venture.gradient} opacity-0 transition-all duration-500 ${
                    hoveredCard === venture.id ? 'opacity-20' : 'opacity-0'
                  }`} />
                </div>

                {/* Text side with zoom animation */}
                <div className={`relative z-10 flex-1 transition-all duration-500 ${
                  hoveredCard === venture.id ? 'scale-105' : 'scale-100'
                }`}>
                  <h2
                    className={`
                      text-2xl font-bold mb-2 bg-gradient-to-r ${venture.gradient} 
                      bg-clip-text text-transparent transition-all duration-500
                      ${hoveredCard === venture.id ? 'scale-110' : 'scale-100'}
                    `}
                  >
                    {venture.name}
                  </h2>

                  <p className={`text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 opacity-80 transition-all duration-500 ${
                    hoveredCard === venture.id ? 'scale-105 opacity-100' : 'scale-100 opacity-80'
                  }`}>
                    {venture.subtitle}
                  </p>

                  <p
                    className={`text-gray-300 text-sm leading-relaxed transition-all duration-500 ${
                      hoveredCard === venture.id ? 'opacity-100 scale-105' : 'opacity-80 scale-100'
                    }`}
                  >
                    {venture.description}
                  </p>
                </div>

                {/* Hover Effect Border with pulse zoom */}
                <div
                  className={`
                    absolute inset-0 rounded-2xl bg-gradient-to-r ${venture.gradient} 
                    transition-all duration-500 pointer-events-none
                    ${hoveredCard === venture.id ? 'opacity-10 scale-105' : 'opacity-0 scale-100'}
                  `}
                />

                {/* Interactive Elements with zoom */}
                <div
                  className={`absolute bottom-4 right-4 w-6 h-6 border-2 border-gray-600 rounded-full transition-all duration-300 ${
                    hoveredCard === venture.id ? 'opacity-100 scale-125' : 'opacity-0 scale-75'
                  }`}
                  style={{
                    borderColor: hoveredCard === venture.id ? (
                      venture.color === 'cyan' ? '#00bcd4' : 
                      venture.color === 'pink' ? '#e91e63' :
                      venture.color === 'amber' ? '#ffc107' :
                      venture.color === 'blue' ? '#2196f3' : '#9c27b0'
                    ) : '#4b5563'
                  }}
                />
              </div>

              {/* Card reflection effect */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-2xl pointer-events-none transition-all duration-500 ${
                  hoveredCard === venture.id ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                }`} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Additional floating particles with zoom animations */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 bg-cyan-400/60 rounded-full transition-all duration-2000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transitionDelay: `${Math.random() * 2000 + 1000}ms`,
            animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.5); 
          }
        }
      `}</style>
    </div>
  );
};

export default Ventures;