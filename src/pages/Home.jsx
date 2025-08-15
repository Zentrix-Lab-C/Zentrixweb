import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";


const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
    setTimeout(() => setTextVisible(true), 600);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-black">

{/* Orbiting objects - hidden on mobile */}
<div className="absolute inset-0 items-center justify-center z-[5] pointer-events-none hidden sm:flex">
  <div className="relative w-[700px] h-[700px] animate-spin-slow">
    {/* Orbit path */}
    <div className="absolute inset-0 rounded-full border border-green-400/20" />

    {/* Orbiting dots */}
    {[...Array(7)].map((_, i) => {
      const angle = (i / 7) * 2 * Math.PI;
      const radius = 380; // bigger radius for bigger orbit
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      return (
        <div
          key={i}
          className="absolute w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
          style={{
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      );
    })}
  </div>
</div>

{/* Static Triangle Zentrix Logos */}
<div className="absolute inset-0 overflow-hidden pointer-events-none z-[1] hidden sm:flex">
  <div className="relative w-full h-full flex items-center justify-center">
    {[...Array(3)].map((_, i) => {
      const angle = (i / 3) * 2 * Math.PI; // 0°, 120°, 240°
      const radius = 450; // distance from center
      const verticalOffset = -100; // moves entire triangle upward
      const x = radius * Math.cos(angle) + verticalOffset;
      const y = radius * Math.sin(angle);

      return (
        <div
          key={i}
          className="absolute flex items-center gap-3 opacity-40"
          style={{
            left: `calc(50% + ${y}px)`,
            top: `calc(50% + ${x}px)`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Logo Icon */}
          <div className="relative">
            <div className="w-24 h-24 rounded flex items-center justify-center">
              <img
                src={logo}
                alt="Zentrix Logo"
                className="w-32 h-32 object-contain opacity-50"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-20 -z-10" />
          </div>

          {/* Logo Text */}
          <div className="flex flex-col leading-tight opacity-50">
            <span className="text-white font-[Orbitron] text-xl tracking-wider">ZENTRIX</span>
            <span className="text-gray-300 font-[Orbitron] text-sm tracking-widest -mt-1">LAB</span>
          </div>
        </div>
      );
    })}
  </div>
</div>


       <div className="absolute inset-0">
  {/* Base gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/30 via-cyan-900/20 to-black" />
  
  {/* Moving gradient overlay */}
  <div
    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 via-green-400/10 to-transparent animate-pulse"
    style={{ animationDuration: '5s' }}
  />

  {/* Additional shifting glow layer */}
  <div
    className="absolute inset-0 bg-gradient-to-tl from-transparent via-blue-500/5 via-green-300/5 to-transparent animate-[pulse_6s_infinite]"
  />
  

  {/* Floating particles */}
  {[...Array(40)].map((_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 rounded-full animate-pulse"
      style={{
        backgroundColor: ['rgba(6,182,212,0.3)', 'rgba(59,130,246,0.3)', 'rgba(34,197,94,0.3)'][Math.floor(Math.random() * 3)],
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
      }}
    />
  ))}

  {/* Geometric shapes */}
  <div className="absolute top-20 left-10 w-8 h-8 border-2 border-cyan-400/30 rotate-45 animate-spin"
    style={{ animationDuration: '15s' }} />
  <div className="absolute top-40 right-20 w-6 h-6 border-2 border-green-400/20 animate-pulse" />
  <div className="absolute bottom-32 left-16 w-4 h-4 bg-blue-400/30 rounded-full animate-bounce"
    style={{ animationDuration: '4s' }} />

  {/* Neural network lines */}
  <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
    <g className="animate-pulse" style={{ animationDuration: '6s' }}>
      <path d="M100,200 Q300,100 500,200 T900,200" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
      <path d="M100,400 Q300,300 500,400 T900,400" stroke="url(#gradient2)" strokeWidth="2" fill="none" />
      <path d="M100,600 Q300,500 500,600 T900,600" stroke="url(#gradient3)" strokeWidth="2" fill="none" />
    </g>
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
        <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#34d399" stopOpacity="0" />
        <stop offset="50%" stopColor="#34d399" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
        <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
</div>

<div className="absolute inset-0 flex items-center justify-center">
  <div className="w-[80%] h-[80%] rounded-full bg-cyan-500/20 blur-[140px]" />
  <div className="absolute w-[50%] h-[50%] rounded-full bg-emerald-400/10 blur-[120px]" />
</div>





      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/30 via-cyan-900/20 to-black" />

        {/* Moving gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 via-green-400/10 to-transparent animate-pulse"
          style={{ animationDuration: '5s' }}
        />

        {/* Glow effect center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[70%] h-[70%] rounded-full bg-purple-700/30 blur-3xl"></div>
        </div>

        {/* Particles */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-pulse"
            style={{
              backgroundColor: ['rgba(6,182,212,0.3)', 'rgba(59,130,246,0.3)', 'rgba(34,197,94,0.3)'][Math.floor(Math.random() * 3)],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Neural network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <g className="animate-pulse" style={{ animationDuration: '6s' }}>
            <path d="M100,200 Q300,100 500,200 T900,200" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
            <path d="M100,400 Q300,300 500,400 T900,400" stroke="url(#gradient2)" strokeWidth="2" fill="none" />
            <path d="M100,600 Q300,500 500,600 T900,600" stroke="url(#gradient3)" strokeWidth="2" fill="none" />
          </g>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0" />
              <stop offset="50%" stopColor="#34d399" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        
        {/* Heading */}
        <div className={`max-w-6xl mx-auto mb-8 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white font-[Orbitron] tracking-wide">
            <span className="block mb-2">
              SHAPING THE{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 animate-pulse">
                FUTURE
              </span>
              {' '}OF INNOVATION,
            </span>
            <span className="block">
              ONE VENTURE AT A{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-300">
                TIME.
              </span>
            </span>
          </h1>
        </div>

        <div className="space-y-6 text-2xl sm:text-3xl lg:text-4xl font-[Orbitron] tracking-wide mb-12">
            <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <span className="text-gray-300">SMART </span>
              <span className="text-white font-semibold">IDEAS</span>
              <span className="text-cyan-400">.</span>
            </div>
            
            <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 font-semibold">
                REAL IMPACT
              </span>
              <span className="text-cyan-400">.</span>
            </div>
            
            <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="text-gray-300">ONE </span>
              <span className="text-white font-semibold">LAB</span>
              <span className="text-cyan-400">.</span>
            </div>
          </div>

        {/* Buttons */}
     <div className={`flex flex-col sm:flex-row gap-6 sm:gap-12 transform transition-all duration-1000 delay-500 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
  <button
    onClick={() => scrollTo('ventures')}
    className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-full text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
  >
    <span className="relative z-10">Explore Ventures</span>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </button>
  
  <button
    onClick={() => scrollTo('contact')}
    className="group px-8 py-4 border-2 border-gray-600 rounded-full text-gray-300 font-semibold text-lg transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-400/25 hover:scale-105 relative overflow-hidden"
  >
    <span className="relative z-10">Get In Touch</span>
  </button>
</div>


      </div>

      <style jsx>{`
      @keyframes slow-pan {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
      .animate-slow-pan {
        animation: slow-pan 30s linear infinite;
      }
      `}
      </style>
      

   <style jsx>{`
 @keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spin-slow 25s linear infinite;
}


`}</style>
    </section>
  );
};



export default Home;
