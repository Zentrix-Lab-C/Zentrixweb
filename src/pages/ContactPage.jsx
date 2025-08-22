import React, { useState, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, 
  Linkedin, Twitter, Facebook, Instagram, 
  MessageCircle, Send
} from 'lucide-react';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const FloatingOrb = ({ size, color, delay, duration, position }) => (
    <div 
      className={`absolute ${size} ${color} rounded-full blur-xl opacity-20`}
      style={{
        animation: `float ${duration}s ease-in-out infinite ${delay}s, pulse 2s ease-in-out infinite`,
        ...position
      }}
    />
  );

  const AnimatedGrid = () => (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        animation: 'gridMove 20s linear infinite'
      }} />
    </div>
  );

  const communityLinks = {
  // 'LinkedIn': 'https://linkedin.com/in/YourProfile',
  // 'X': 'https://x.com/zentrix_lab',
  // 'Facebook': 'https://web.facebook.com/zentrixlab?rdid=vZv7eQWwBSZAx79R&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1Ar13AisKp%2F%3F_rdc%3D1%26_rdr#',
  // 'Instagram': 'https://www.instagram.com/zentrixlab',
  // 'Tik Tok': 'https://www.tiktok.com/@zentrixlab',
  'Discord': 'https://discord.com/invite/YZR3SBPp',
  'Telegram': 'https://t.me/zentrixlab',
  // 'WhatsApp': 'https://chat.whatsapp.com/CKJp55a1RNoCX2tZEtxmIR',
};


  return (
        <div className="bg-white text-gray-900 dark:bg-black dark:text-white relative overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Moving gradient orbs */}
        <FloatingOrb 
          size="w-96 h-96" 
          color="bg-gradient-to-r from-blue-500/30 to-cyan-500/30" 
          delay={0} 
          duration={8}
          position={{ left: '10%', top: '20%' }}
        />
        <FloatingOrb 
          size="w-80 h-80" 
          color="bg-gradient-to-r from-purple-500/20 to-pink-500/20" 
          delay={2} 
          duration={10}
          position={{ right: '15%', top: '10%' }}
        />
        <FloatingOrb 
          size="w-64 h-64" 
          color="bg-gradient-to-r from-emerald-500/25 to-teal-500/25" 
          delay={4} 
          duration={12}
          position={{ left: '60%', bottom: '20%' }}
        />
        <FloatingOrb 
          size="w-72 h-72" 
          color="bg-gradient-to-r from-orange-500/15 to-red-500/15" 
          delay={6} 
          duration={9}
          position={{ left: '20%', bottom: '30%' }}
        />

        {/* Interactive mouse follower */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            left: `${mousePosition.x - 10}%`,
            top: `${mousePosition.y - 10}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Animated grid */}
        <AnimatedGrid />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 dark:bg-cyan-300 rounded-full opacity-50 dark:opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className={`relative z-10 container mx-auto px-6 py-12 transition-all duration-1500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Contact Us Section */}
          <div className={`space-y-5 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white relative">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />
            </h2>
            
            <div className="space-y-3">
              <div className="group flex items-center space-x-4 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2">
                <Phone className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                <div>
                  <span className="text-gray-700 dark:text-gary-300 text-sm">Call Us:</span>
                  <div className="text-black dark:text-white font-semibold">+234 707 428 3755</div>
                </div>
                
              </div>
              
              <div className="group flex items-center space-x-4 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2">
                <Mail className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                <div>
                 <span className="text-sm text-gray-700 dark:text-gray-300">Email Us:</span>
<div className="font-semibold text-black dark:text-white break-all">
  zentrixlab.new@gmail.com
</div>

                </div>
              </div>
              
              <div className="group flex items-center space-x-4 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2">
                <MapPin className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={20} />
                <div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Location:</span>
                  <div className="font-semibold text-black dark:text-white break-all">Oluyole Ibadan, Nigeria</div>
                </div>
              </div>
            </div>

           {/* Social Media Icons */}
<div className="flex space-x-4 mt-8">
  {/* Twitter/X */}
  <a 
    href="https://x.com/zentrix_lab" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-gray-600 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-12 border border-white/20"
  >
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white group-hover:fill-black transition-colors duration-300">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  </a>
  
  {/* LinkedIn */}
  <a 
    href="https://linkedin.com/in/YourProfile" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-12 border border-white/20"
  >
    <Linkedin className="w-6 h-6 text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300" />
  </a>
  
  {/* Instagram */}
  <a 
    href="https://www.instagram.com/zentrixlab" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-12 border border-white/20"
  >
    <Instagram className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" />
  </a>
  
  {/* TikTok */}
  <a 
    href="https://www.tiktok.com/@zentrixlab" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-black transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-12 border border-white/20"
  >
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white group-hover:fill-white transition-colors duration-300">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  </a>
  
  {/* Facebook */}
  <a 
    href="https://web.facebook.com/zentrixlab?rdid=vZv7eQWwBSZAx79R&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F1Ar13AisKp%2F%3F_rdc%3D1%26_rdr#" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-blue-500 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-12 border border-white/20"
  >
    <Facebook className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" />
  </a>
</div>

          </div>

          {/* Community Section */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white relative">
              Community
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse delay-300" />
            </h2>
            
            <div className="space-y-3">
  {Object.keys(communityLinks).map((platform, index) => (
    <a
      key={platform}
      href={communityLinks[platform]}
      target="_blank"
      rel="noopener noreferrer"
     className="block group text-lg p-2 rounded-lg 
  bg-gray-100 dark:bg-white/5 
  text-gray-900 dark:text-white
  border border-gray-300 dark:border-white/10 
  hover:border-purple-400/50 hover:bg-gray-200 dark:hover:bg-white/10 
  transition-all duration-500 cursor-pointer 
  transform hover:translate-x-2 hover:shadow-lg hover:shadow-purple-500/20"

      style={{ animationDelay: `${index * 100}ms` }}
    >
      <span className="font-semibold group-hover:text-purple-300 transition-colors duration-300">{platform}</span>
      <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 mt-1" />
    </a>
  ))}
</div>

          </div>

          {/* Menu Section */}
          <div className={`space-y-8 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white relative">
              Menu
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-pulse delay-500" />
            </h2>
            
            <div className="space-y-3">
  {['Home', 'About', 'Team', 'Venture'].map((item, index) => {
    // Map the display name to the actual section ID
    const sectionIds = {
      Home: 'home',
      Venture: 'ventures',
      About: 'about',
      Team: 'team'
    };

    const handleScroll = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <div
        key={item}
        onClick={() => handleScroll(sectionIds[item])}
        className="group text-white text-lg p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-400/50 hover:bg-white/10 transition-all duration-300 cursor-pointer transform hover:translate-x-2 hover:shadow-lg hover:shadow-emerald-500/20"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <span className="group-hover:text-emerald-300 transition-colors duration-300 font-semibold text-black dark:text-white break-all">
          {item}
        </span>
        <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-300 mt-1" />
      </div>
    );
  })}
</div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
}