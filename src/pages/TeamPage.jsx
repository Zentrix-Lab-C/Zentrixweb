import React, { useState, useEffect } from 'react';

const TeamPage = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  
 const teamMembers = [
    {
      id: 1,
      name: "David Chidimma",
      role: "COO",
      image: "./assets/COO.jpg", // You'll add the actual image path
      isCircular: false,
      bgColor: "from-red-500 to-pink-400"
    },
    {
      id: 2,
      name: "Olagunju Oluwatobi", 
      role: "Lead Designer",
      image: "./assets/Ldesign.jpg", // You'll add the actual image path
      isCircular: true,
      bgColor: "from-blue-600 to-indigo-500"
    },
    {
      id: 3,
      name: "Ayodele Bello",
      role: "Product Designer", 
      image: "./assets/Pdesign.png", // You'll add the actual image path
      isCircular: false,
      bgColor: "from-gray-400 to-gray-200"
    },
    {
      id: 4,
      name: "Gbadegesin Oluwatobi",
      role: "Product Manager",
      image: "./assets/Pmanager.jpg", // You'll add the actual image path
      isCircular: true,
      bgColor: "from-green-500 to-lime-400"
    },
    {
      id: 5,
      name: "Usman Umar",
      role: "Full-Stack Blockchain & AI Developer",
      image: "./assets/Fulldev.jpg", // You'll add the actual image path
      isCircular: false,
      bgColor: "from-yellow-600 to-orange-500"
    },
    {
      id: 6,
      name: "Victor Oluwapelumi",
      role: "Frontend Developer",
      image: "./assets/Frontdev.jpg", // You'll add the actual image path
      isCircular: true,
      bgColor: "from-purple-600 to-blue-500"
    },
    {
      id: 7,
      name: "Bade Olaniyi",
      role: "CEO & Founder",
      image: "./assets/CEO.jpg", // You'll add the actual image path
      isCircular: false,
      isCEO: true,
      bgColor: "from-teal-500 to-cyan-400"
    }
  ];

  useEffect(() => {
    // Header animation
    setTimeout(() => setHeaderVisible(true), 200);
    
    // Logo animation
    setTimeout(() => setLogoVisible(true), 500);
    
    // Stagger card animations
    teamMembers.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, 800 + (index * 150));
    });
  }, []);

  const TeamCard = ({ member, index, colSpan, rowSpan = 1, aspectRatio, mobileColSpan = "col-span-1" }) => {
    const isVisible = visibleCards.includes(index);
    const initials = member.name.split(' ').map(n => n[0]).join('');

    return (
      <div 
        className={`${mobileColSpan} sm:${colSpan} lg:${colSpan} ${rowSpan === 2 ? 'lg:row-span-2' : ''} transform transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100 rotate-0' 
            : 'opacity-0 translate-y-16 scale-90 rotate-1'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className={`${aspectRatio} relative group cursor-pointer`}>
          <div className={`w-full h-full ${
            member.isCircular ? 'rounded-full' : 'rounded-xl sm:rounded-2xl'
          } border-2 sm:border-4 border-gray-700/50 overflow-hidden relative bg-gradient-to-br ${member.bgColor} 
          group-hover:border-cyan-400/70 transition-all duration-500 group-hover:scale-105 
          group-hover:shadow-2xl group-hover:shadow-cyan-500/30 group-hover:-rotate-1`}>
            
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            {member.image ? (
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" 
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${member.bgColor} flex items-center justify-center relative overflow-hidden`}>
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white/30 rounded-full animate-pulse" />
                  <div className="absolute bottom-8 right-6 w-6 h-6 border-2 border-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute top-1/2 right-8 w-4 h-4 border-2 border-white/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
                <span className="text-white text-4xl font-bold z-10 transition-all duration-300 group-hover:scale-110">
                  {initials}
                </span>
              </div>
            )}
            
            {/* Floating particles on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '2s'
                  }}
                />
              ))}
            </div>
            
            {/* Name and role overlay with better animation */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-3 sm:p-6 text-center transform transition-all duration-500 group-hover:from-black/100">
              <h3 className={`font-bold text-white transition-all duration-300 group-hover:text-cyan-300 ${
                member.isCEO ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
              }`}>
                {member.name}
              </h3>
              <p className={`text-gray-200 transition-all duration-300 group-hover:text-gray-100 ${
                member.isCEO ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
              }`}>
                {member.role}
              </p>
            </div>

            {/* Glowing border effect on hover */}
            <div className="absolute inset-0 rounded-inherit border-2 border-cyan-400/0 group-hover:border-cyan-400/50 transition-all duration-500" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-blue-900/20 animate-pulse" style={{ animationDuration: '4s' }} />
        
        {/* Moving particles background */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* City silhouette with enhanced animation */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-gray-900/60 to-transparent" />
        <svg className="absolute bottom-0 left-0 w-full h-48 opacity-80" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1f2937" stopOpacity="1" />
              <stop offset="100%" stopColor="#111827" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path d="M0,200 L0,100 L50,100 L50,80 L100,80 L100,120 L150,120 L150,60 L200,60 L200,90 L250,90 L250,110 L300,110 L300,40 L350,40 L350,130 L400,130 L400,70 L450,70 L450,100 L500,100 L500,50 L550,50 L550,140 L600,140 L600,90 L650,90 L650,60 L700,60 L700,120 L750,120 L750,30 L800,30 L800,110 L850,110 L850,80 L900,80 L900,130 L950,130 L950,70 L1000,70 L1000,100 L1050,100 L1050,40 L1100,40 L1100,120 L1150,120 L1150,90 L1200,90 L1200,200 Z" 
                fill="url(#cityGradient)" className="animate-pulse" style={{ animationDuration: '6s' }} />
        </svg>
        
        {/* Enhanced ambient light spots */}
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-yellow-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-2/3 right-1/3 w-32 h-32 bg-cyan-400/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }} />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-4 h-4 border-2 border-cyan-400/30 rotate-45 animate-spin" style={{ animationDuration: '10s' }} />
        <div className="absolute top-40 right-20 w-6 h-6 border-2 border-purple-400/30 animate-pulse" />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-cyan-400/40 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
      </div>

      {/* Zentrix Lab logo with enhanced animation - hidden on mobile */}
      <div className={`hidden md:block absolute top-8 right-8 z-20 transform transition-all duration-1000 ease-out ${
        logoVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'
      }`}>
      </div>

      <div className="relative z-10 px-4 sm:px-6 py-8 sm:py-16">
        {/* Title with enhanced typing animation */}
        <div className={`text-center mb-8 sm:mb-16 transform transition-all duration-1000 ease-out ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 relative px-4">
            Our Core Team
            {/* Animated underline */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
          </h1>
        </div>

        {/* Team Grid - Responsive layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 h-auto">
            {/* Mobile: Single column, Tablet: 2 columns, Desktop: 12-column grid */}
            
            {/* David - Circular */}
            <TeamCard 
              member={teamMembers[0]} 
              index={0}
              colSpan="col-span-3"
              mobileColSpan="col-span-1"
              // aspectRatio="aspect-[4/5]"
            />

            {/* Olagunju - Circular */}
            <TeamCard 
              member={teamMembers[1]} 
              index={1}
              colSpan="col-span-3"
              mobileColSpan="col-span-1"
              // aspectRatio="aspect-[4/6]"
            />

            {/* Ayodele - Rectangle */}
            <TeamCard 
              member={teamMembers[2]} 
              index={2}
              colSpan="col-span-3"
              mobileColSpan="col-span-1"
              // aspectRatio="aspect-[4/5]"
            />

            {/* Bada (CEO) - Tall Rectangle spanning 2 rows on desktop only */}
            <TeamCard 
              member={teamMembers[6]} 
              index={6}
              colSpan="col-span-3"
              mobileColSpan="col-span-1"
              // rowSpan={2}
              aspectRatio=" lg:h-full"
            />

            {/* Gbadegesin - Rectangle */}
            <TeamCard 
              member={teamMembers[3]} 
              index={3}
              colSpan="col-span-3"
              mobileColSpan="col-span-1"
              aspectRatio="w-full h-full"
            />

            {/* Usman - Rectangle */}
            <TeamCard 
              member={teamMembers[4]} 
              index={4}
              colSpan="col-span-3"
              mobileColSpan="col-span-1"
              // aspectRatio="aspect-[4/5]"
            />

            {/* Victor - Rectangle */}
            <TeamCard 
              member={teamMembers[5]} 
              index={5}
              colSpan="col-span-3"
              mobileColSpan="col-span-1"
              //  aspectRatio="aspect-[4/5]"
            />
          </div>
        </div>
      </div>

      {/* Enhanced bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
      
      {/* Corner decorative elements - hidden on mobile */}
      <div className="hidden sm:block absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-cyan-400/30 animate-pulse" />
      <div className="hidden sm:block absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-cyan-400/30 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default TeamPage;