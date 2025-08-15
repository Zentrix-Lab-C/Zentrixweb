import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TeamPage = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  const teamMembers = [
    { id: 1, name: "David Chidimma", role: "COO", image: "./assets/COO.jpg", bgColor: "from-red-500 to-pink-400" },
    { id: 2, name: "Olagunju Oluwatobi", role: "Product Designer", image: "./assets/Ldesign.jpg", bgColor: "from-blue-600 to-indigo-500" },
    { id: 3, name: "Ayodele Bello", role: "Product Designer", image: "./assets/Pdesign.png", bgColor: "from-gray-400 to-gray-200" },
    { id: 4, name: "Gbadegesin Oluwatobi", role: "Product Manager", image: "./assets/Pmanager.jpg", bgColor: "from-green-500 to-lime-400" },
    { id: 5, name: "Usman Umar", role: "Full-Stack Blockchain & AI Developer", image: "./assets/Fulldev.jpg", bgColor: "from-yellow-600 to-orange-500" },
    { id: 6, name: "Victor Oluwapelumi", role: "Frontend Developer", image: "./assets/Frontdev.jpg", bgColor: "from-purple-600 to-blue-500" },
    { id: 7, name: "Bade Olaniyi", role: "CEO & Founder", image: "./assets/CEO.jpg", bgColor: "from-teal-500 to-cyan-400" },
  ];

  useEffect(() => {
    teamMembers.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, 200 + index * 150);
    });
  }, []);

  const TeamCard = ({ member, index }) => {
    const initials = member.name.split(" ").map((n) => n[0]).join("");
    const isVisible = visibleCards.includes(index);

    return (
      <div
        className={`flex-[0_0_80%] sm:flex-[0_0_240px] h-[300px] sm:h-[340px] flex-shrink-0 transform transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div
          className={`w-full h-full relative group rounded-xl overflow-hidden border-2 sm:border-4 border-gray-700/50 bg-gradient-to-br ${member.bgColor} transition-all duration-500 group-hover:scale-105`}
        >
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-white">
              {initials}
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 sm:p-4 text-center">
            <h3 className="font-bold text-white text-base sm:text-lg group-hover:text-cyan-300">{member.name}</h3>
            <p className="text-gray-300 text-xs sm:text-sm">{member.role}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col items-center justify-center py-10 px-4">

      {/* Cinematic Glow Circles */}
      <div className="absolute -top-20 -left-20 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Floating Gradient Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[150%] h-[2px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
            style={{ top: `${15 + i * 15}%` }}
            animate={{ x: ["0%", "50%", "0%"] }}
            transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Background Stars */}
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `twinkle ${2 + Math.random() * 3}s infinite ease-in-out`,
          }}
        />
      ))}

      {/* Title */}
      <h1 className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 z-10 text-center">
        Our Core Team
      </h1>

      {/* Top Row */}
      <motion.div
        className="flex flex-row sm:flex-row space-x-4 sm:space-x-6 mb-8 sm:mb-10 z-10 overflow-x-auto sm:overflow-visible scrollbar-hide"
        animate={{ x: ["0%", "-3%", "0%"] }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 5, ease: "easeInOut" }}
      >
        {teamMembers.slice(0, 4).map((member, index) => (
          <TeamCard key={member.id} member={member} index={index} />
        ))}
      </motion.div>

      {/* Bottom Row */}
      <motion.div
        className="flex flex-row sm:flex-row space-x-4 sm:space-x-6 z-10 overflow-x-auto sm:overflow-visible scrollbar-hide"
        animate={{ x: ["0%", "3%", "0%"] }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 5, ease: "easeInOut" }}
      >
        {teamMembers.slice(4).map((member, index) => (
          <TeamCard key={member.id} member={member} index={index + 4} />
        ))}
      </motion.div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default TeamPage;
