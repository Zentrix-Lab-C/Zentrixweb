import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navLinks = [
    { name: "Home", target: "home" },
    { name: "Venture", target: "ventures" },
    { name: "About", target: "about" },
    { name: "Team", target: "team" },
    { name: "Contact", target: "contact" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className={`fixed w-full top-10 left-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/10' : 'bg-gradient-to-r from-black via-gray-900 to-blue-900'
      }`}>
        
        {/* Animated background glow */}
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 188, 212, 0.1) 0%, transparent 50%)`
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse"
              style={{
                left: `${20 + i * 20}%`,
                top: '50%',
                animation: `float ${3 + i * 0.5}s ease-in-out infinite ${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 lg:px- flex justify-between items-center h-20">
          
          {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
  {/* Logo Icon */}
  <div className="relative">
    <div className="w-16 h-16 bg-black rounded flex items-center justify-center">
      <img src={logo} alt="Zentrix Logo" className="w-24 h-24 object-contain" />
    </div>
    {/* Glow effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-all duration-300 -z-10" />
  </div>
  
  {/* Logo Text */}
  <div className="flex flex-col leading-tight">
    <span className="text-white font-bold text-xl tracking-wider transform transition-all duration-300 group-hover:scale-105">
      ZENTRIX
    </span>
    <span className="text-gray-300 font-light text-sm tracking-widest -mt-1 transition-colors duration-300 group-hover:text-cyan-300">
      LAB
    </span>
  </div>
</div>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1 border border-gray-700/50">
            {navLinks.map((link, index) => (
              <button
                key={link.name}
                onClick={() => {
                  setActive(link.name);
                  handleScroll(link.target);
                }}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  active === link.name
                    ? "text-black bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg shadow-cyan-500/50"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Background glow for active item */}
                {active === link.name && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-lg opacity-50 -z-10 animate-pulse" />
                )}
                
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10" />
                
                {link.name}
                
                {/* Active indicator dot */}
                {active === link.name && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-gray-700/50 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
            >
              <Menu size={24} className="text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Bottom border glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      </nav>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Sidebar */}
          <div className={`fixed top-0 right-0 w-80 h-full bg-gradient-to-b from-black via-gray-900 to-black shadow-2xl z-50 transform transition-transform duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/20 to-transparent rounded-bl-full" />
            
            <div className="relative p-6 flex flex-col h-full">
              {/* Close Button */}
              <button 
                className="self-end mb-8 p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-gray-700/50 hover:bg-red-500/20 transition-all duration-300 transform hover:scale-110"
                onClick={() => setIsOpen(false)}
              >
                <X size={24} className="text-cyan-400 hover:text-red-400 transition-colors duration-300" />
              </button>

              {/* Mobile Links */}
              <ul className="flex flex-col gap-4 text-lg flex-1">
                {navLinks.map((link, index) => (
                  <li 
                    key={link.name}
                    className="transform transition-all duration-300"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animation: `slideInRight 0.5s ease-out ${index * 100}ms both`
                    }}
                  >
                    <button
                      onClick={() => {
                        setActive(link.name);
                        handleScroll(link.target);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                        active === link.name
                          ? "text-black bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg shadow-cyan-500/30 font-bold"
                          : "text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-cyan-400/30"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{link.name}</span>
                        {active === link.name && (
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        )}
                      </div>
                      
                      {/* Hover line effect */}
                      <div className={`h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 ${
                        active === link.name ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                    </button>
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="mt-auto pt-6 border-t border-gray-700/50">
                <p className="text-gray-400 text-sm text-center">
                  © 2025 Zentrix Lab
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;