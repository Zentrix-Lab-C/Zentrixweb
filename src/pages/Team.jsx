import React from 'react';
import { motion } from 'framer-motion';


const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "David Chidimma",
      role: "COO",
      image: "./assets/COO.jpg", // You'll add the actual image path
      isCircular: true,
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
      isCircular: false,
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
      isCircular: false,
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background matching the screenshot */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent" />
        
        {/* City silhouette at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-gray-900/50 to-transparent" />
        <svg className="absolute bottom-0 left-0 w-full h-48" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path d="M0,200 L0,100 L50,100 L50,80 L100,80 L100,120 L150,120 L150,60 L200,60 L200,90 L250,90 L250,110 L300,110 L300,40 L350,40 L350,130 L400,130 L400,70 L450,70 L450,100 L500,100 L500,50 L550,50 L550,140 L600,140 L600,90 L650,90 L650,60 L700,60 L700,120 L750,120 L750,30 L800,30 L800,110 L850,110 L850,80 L900,80 L900,130 L950,130 L950,70 L1000,70 L1000,100 L1050,100 L1050,40 L1100,40 L1100,120 L1150,120 L1150,90 L1200,90 L1200,200 Z" 
                fill="#1f2937" opacity="0.8"/>
        </svg>
        
        {/* Ambient light spots */}
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute top-2/3 right-1/3 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl" />
      </div>

      {/* Zentrix Lab logo in top right - exact positioning */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 right-8 z-20"
      >
        <div className="bg-gray-800/40 backdrop-blur border border-cyan-400/30 rounded-2xl p-5 min-w-[200px]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center border-2 border-cyan-400/50">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div>
              <div className="text-white font-bold text-xl">ZENTRIX</div>
              <div className="text-cyan-400 text-sm font-medium">LAB</div>
            </div>
          </div>
          <div className="text-gray-300 text-sm">Smart Ideas. Real Impact. One Lab.</div>
        </div>
      </motion.div>

      <div className="relative z-10 px-6 py-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-cyan-400">
            Our Core Team
          </h1>
        </motion.div>

        {/* Team Grid - Exact layout from screenshot */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-12 gap-6 h-auto">
            {/* Row 1 */}
            {/* David - Circular */}
            <motion.div variants={cardVariants} className="col-span-3">
              <div className="aspect-square relative group cursor-pointer">
                <div className="w-full h-full rounded-full border-4 border-gray-700/50 overflow-hidden relative bg-gradient-to-br from-red-500 to-pink-400 group-hover:border-cyan-400/50 transition-all duration-300">
                  {teamMembers[0].image ? (
                    <img src={teamMembers[0].image} alt={teamMembers[0].name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-red-500 to-pink-400 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">DC</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 text-center">
                    <h3 className="font-bold text-white text-lg">{teamMembers[0].name}</h3>
                    <p className="text-gray-200 text-sm">{teamMembers[0].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Olagunju - Circular */}
            <motion.div variants={cardVariants} className="col-span-3">
              <div className="aspect-square relative group cursor-pointer">
                <div className="w-full h-full rounded-full border-4 border-gray-700/50 overflow-hidden relative bg-gradient-to-br from-blue-600 to-indigo-500 group-hover:border-cyan-400/50 transition-all duration-300">
                  {teamMembers[1].image ? (
                    <img src={teamMembers[1].image} alt={teamMembers[1].name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">OO</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 text-center">
                    <h3 className="font-bold text-white text-lg">{teamMembers[1].name}</h3>
                    <p className="text-gray-200 text-sm">{teamMembers[1].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Ayodele - Rectangle */}
            <motion.div variants={cardVariants} className="col-span-3">
              <div className="aspect-[4/5] relative group cursor-pointer">
                <div className="w-full h-full rounded-2xl border-4 border-gray-700/50 overflow-hidden relative bg-gradient-to-br from-gray-400 to-gray-200 group-hover:border-cyan-400/50 transition-all duration-300">
                  {teamMembers[2].image ? (
                    <img src={teamMembers[2].image} alt={teamMembers[2].name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-200 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">AB</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 text-center">
                    <h3 className="font-bold text-white text-lg">{teamMembers[2].name}</h3>
                    <p className="text-gray-200 text-sm">{teamMembers[2].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bade (CEO) - Tall Rectangle spanning 2 rows */}
            <motion.div variants={cardVariants} className="col-span-3 row-span-2">
              <div className="h-full relative group cursor-pointer">
                <div className="w-full h-full rounded-2xl border-4 border-gray-700/50 overflow-hidden relative bg-gradient-to-br from-teal-500 to-cyan-400 group-hover:border-cyan-400/50 transition-all duration-300">
                  {teamMembers[6].image ? (
                    <img src={teamMembers[6].image} alt={teamMembers[6].name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center">
                      <span className="text-white text-5xl font-bold">BO</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 text-center">
                    <h3 className="font-bold text-white text-xl">{teamMembers[6].name}</h3>
                    <p className="text-gray-200 text-base">{teamMembers[6].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Row 2 */}
            {/* Gbadegesin - Rectangle */}
            <motion.div variants={cardVariants} className="col-span-3">
              <div className="aspect-[4/5] relative group cursor-pointer">
                <div className="w-full h-full rounded-2xl border-4 border-gray-700/50 overflow-hidden relative bg-gradient-to-br from-green-500 to-lime-400 group-hover:border-cyan-400/50 transition-all duration-300">
                  {teamMembers[3].image ? (
                    <img src={teamMembers[3].image} alt={teamMembers[3].name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-green-500 to-lime-400 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">GO</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 text-center">
                    <h3 className="font-bold text-white text-lg">{teamMembers[3].name}</h3>
                    <p className="text-gray-200 text-sm">{teamMembers[3].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Usman - Rectangle */}
            <motion.div variants={cardVariants} className="col-span-3">
              <div className="aspect-[4/5] relative group cursor-pointer">
                <div className="w-full h-full rounded-2xl border-4 border-gray-700/50 overflow-hidden relative bg-gradient-to-br from-yellow-600 to-orange-500 group-hover:border-cyan-400/50 transition-all duration-300">
                  {teamMembers[4].image ? (
                    <img src={teamMembers[4].image} alt={teamMembers[4].name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-yellow-600 to-orange-500 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">UU</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 text-center">
                    <h3 className="font-bold text-white text-lg">{teamMembers[4].name}</h3>
                    <p className="text-gray-200 text-sm">{teamMembers[4].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Victor - Rectangle */}
            <motion.div variants={cardVariants} className="col-span-3">
              <div className="aspect-[4/5] relative group cursor-pointer">
                <div className="w-full h-full rounded-2xl border-4 border-gray-700/50 overflow-hidden relative bg-gradient-to-br from-purple-600 to-blue-500 group-hover:border-cyan-400/50 transition-all duration-300">
                  {teamMembers[5].image ? (
                    <img src={teamMembers[5].image} alt={teamMembers[5].name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">VO</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 text-center">
                    <h3 className="font-bold text-white text-lg">{teamMembers[5].name}</h3>
                    <p className="text-gray-200 text-sm">{teamMembers[5].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage;