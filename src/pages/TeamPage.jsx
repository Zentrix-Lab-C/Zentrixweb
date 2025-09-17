import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Twitter, Github, MapPin, Calendar, Award, Users } from "lucide-react";

const TeamPage = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [filterRole, setFilterRole] = useState("All");

  const teamMembers = [
    {
      id: 1,
      name: "Bade Olaniyi",
      role: "CEO & Founder",
      department: "Executive",
      image: "./assets/CEO.jpg",
      bgColor: "from-teal-500 to-cyan-400",
      bio: "Visionary leader with 10+ years in tech innovation and startup development.",
      location: "Lagos, Nigeria",
      joinedDate: "January 2020",
      skills: ["Strategy", "Leadership", "Innovation", "Business Development"],
      achievements: ["Forbes 30 Under 30", "Tech Innovation Award 2023"],
      social: {
        email: "bade@company.com",
        linkedin: "linkedin.com/in/bade-olaniyi",
        twitter: "@badeolaniyi"
      }
    },
    {
      id: 2,
      name: "David Chidimma",
      role: "COO",
      department: "Operations",
      image: "./assets/COO.jpg",
      bgColor: "from-red-500 to-pink-400",
      bio: "Operations expert focused on scaling teams and optimizing processes.",
      location: "Abuja, Nigeria",
      joinedDate: "March 2020",
      skills: ["Operations", "Process Optimization", "Team Management"],
      achievements: ["Operational Excellence Award", "Process Innovation Leader"],
      social: {
        email: "david@company.com",
        linkedin: "linkedin.com/in/david-chidimma"
      }
    },
    {
      id: 3,
      name: "Edak Ephraim",
      role: "Lead Designer",
      department: "Design",
      image: "./assets/Ldesign.jpg",
      bgColor: "from-blue-600 to-indigo-500",
      bio: "Creative designer passionate about user experience and visual storytelling.",
      location: "Lagos, Nigeria",
      joinedDate: "June 2020",
      skills: ["UI/UX Design", "Brand Identity", "Design Systems"],
      achievements: ["Design Excellence Award", "UX Innovation Leader"],
      social: {
        email: "edak@company.com",
        linkedin: "linkedin.com/in/edak-ephraim",
        twitter: "@edakdesigns"
      }
    },
    {
      id: 4,
      name: "Grace Olatinwo",
      role: "Head of Content",
      department: "Marketing",
      image: "./assets/HOC.jpg",
      bgColor: "from-purple-500 to-pink-400",
      bio: "Content strategist and storyteller driving brand narrative and engagement.",
      location: "Ibadan, Nigeria",
      joinedDate: "August 2020",
      skills: ["Content Strategy", "Copywriting", "Brand Storytelling"],
      achievements: ["Content Marketing Excellence", "Brand Voice Champion"],
      social: {
        email: "grace@company.com",
        linkedin: "linkedin.com/in/grace-olatinwo"
      }
    },
    {
      id: 5,
      name: "Elizabeth Agbana",
      role: "CMO",
      department: "Marketing",
      image: "./assets/CMO.jpg",
      bgColor: "from-green-500 to-emerald-400",
      bio: "Marketing leader driving growth through innovative campaigns and strategies.",
      location: "Port Harcourt, Nigeria",
      joinedDate: "September 2020",
      skills: ["Digital Marketing", "Growth Strategy", "Brand Management"],
      achievements: ["Marketing Leader of the Year", "Growth Champion 2023"],
      social: {
        email: "elizabeth@company.com",
        linkedin: "linkedin.com/in/elizabeth-agbana",
        twitter: "@elizabethcmo"
      }
    },
    {
      id: 6,
      name: "Hakeem Omeiza",
      role: "Product Designer",
      department: "Design",
      image: "./assets/Pdesign1.png",
      bgColor: "from-orange-500 to-red-400",
      bio: "Product designer focused on creating intuitive and delightful user experiences.",
      location: "Kano, Nigeria",
      joinedDate: "November 2020",
      skills: ["Product Design", "Prototyping", "User Research"],
      achievements: ["Design Innovation Award", "User Experience Excellence"],
      social: {
        email: "hakeem@company.com",
        linkedin: "linkedin.com/in/hakeem-omeiza"
      }
    },
    {
      id: 7,
      name: "Boluwatife Ilerioluwa",
      role: "Full-Stack Developer",
      department: "Engineering",
      image: "./assets/Fulldev1.jpg",
      bgColor: "from-yellow-600 to-orange-500",
      bio: "Full-stack engineer building scalable solutions with modern technologies.",
      location: "Lagos, Nigeria",
      joinedDate: "January 2021",
      skills: ["React", "Node.js", "Python", "Cloud Architecture"],
      achievements: ["Technical Excellence Award", "Innovation Champion"],
      social: {
        email: "bolu@company.com",
        linkedin: "linkedin.com/in/boluwatife-ilerioluwa",
        github: "github.com/boludev"
      }
    },
    {
      id: 8,
      name: "Victor Oluwapelumi",
      role: "Frontend Developer",
      department: "Engineering",
      image: "./assets/Frontdev.jpg",
      bgColor: "from-purple-600 to-blue-500",
      bio: "Frontend specialist creating beautiful and performant web applications.",
      location: "Ibadan, Nigeria",
      joinedDate: "March 2021",
      skills: ["React", "TypeScript", "CSS", "Performance Optimization"],
      achievements: ["Frontend Excellence Award", "Code Quality Champion"],
      social: {
        email: "victor@company.com",
        linkedin: "linkedin.com/in/victor-oluwapelumi",
        github: "github.com/victordev"
      }
    },
    {
      id: 9,
      name: "Fayinminu Emmanuel",
      role: "Full-Stack Developer",
      department: "Engineering",
      image: "./assets/Fulldev2.jpg",
      bgColor: "from-teal-600 to-blue-500",
      bio: "Versatile developer passionate about clean code and innovative solutions.",
      location: "Abuja, Nigeria",
      joinedDate: "May 2021",
      skills: ["JavaScript", "Python", "Docker", "API Development"],
      achievements: ["Code Innovation Award", "Technical Leadership"],
      social: {
        email: "fayinminu@company.com",
        linkedin: "linkedin.com/in/fayinminu-emmanuel",
        github: "github.com/fayinminu"
      }
    },
    {
      id: 10,
      name: "Abdulrafiu Abolaji",
      role: "Full-Stack Developer",
      department: "Engineering",
      image: "./assets/Fulldev3.jpg",
      bgColor: "from-indigo-600 to-purple-500",
      bio: "Backend-focused developer ensuring robust and secure system architecture.",
      location: "Lagos, Nigeria",
      joinedDate: "July 2021",
      skills: ["Node.js", "Database Design", "Security", "DevOps"],
      achievements: ["Security Excellence Award", "System Architecture Leader"],
      social: {
        email: "abdulrafiu@company.com",
        linkedin: "linkedin.com/in/abdulrafiu-abolaji",
        github: "github.com/abdulrafiu"
      }
    },
    {
      id: 11,
      name: "Bamigboye Bamidele",
      role: "Product Designer",
      department: "Design",
      image: "./assets/Pdesign2.jpg",
      bgColor: "from-pink-600 to-rose-500",
      bio: "Creative product designer focused on solving complex user problems.",
      location: "Ibadan, Nigeria",
      joinedDate: "September 2021",
      skills: ["Product Strategy", "Design Thinking", "Wireframing"],
      achievements: ["Product Design Excellence", "User-Centered Design Award"],
      social: {
        email: "bamigboye@company.com",
        linkedin: "linkedin.com/in/bamigboye-bamidele"
      }
    },
    {
      id: 12,
      name: "Sarah Johnson",
      role: "Data Scientist",
      department: "Analytics",
      image: "",
      bgColor: "from-cyan-600 to-blue-500",
      bio: "Data scientist turning insights into actionable business strategies.",
      location: "Remote",
      joinedDate: "November 2021",
      skills: ["Machine Learning", "Python", "Data Visualization", "Statistics"],
      achievements: ["Data Innovation Award", "Analytics Excellence"],
      social: {
        email: "sarah@company.com",
        linkedin: "linkedin.com/in/sarah-johnson",
        github: "github.com/sarahdata"
      }
    }
  ];

  const departments = ["All", "Executive", "Engineering", "Design", "Marketing", "Operations", "Analytics"];

  const filteredMembers = filterRole === "All" 
    ? teamMembers 
    : teamMembers.filter(member => member.department === filterRole);

  useEffect(() => {
    setVisibleCards([]);
    filteredMembers.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, 100 + index * 150);
    });
  }, [filterRole]);

  const TeamCard = ({ member, index }) => {
    const initials = member.name
      .split(" ")
      .map((n) => n[0])
      .join("");
    const isVisible = visibleCards.includes(index);

    return (
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 50,
          scale: isVisible ? 1 : 0.9
        }}
        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
        className="group cursor-pointer"
        onClick={() => setSelectedMember(member)}
      >
        <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${member.bgColor} 
          shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2
          border border-white/20 backdrop-blur-sm group-hover:border-white/40`}
        >
          {/* Teamwork Connection Pulse */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 rounded-2xl opacity-0 group-hover:opacity-100"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(34, 211, 238, 0.2), rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))",
                "linear-gradient(45deg, rgba(236, 72, 153, 0.2), rgba(34, 211, 238, 0.2), rgba(168, 85, 247, 0.2))",
                "linear-gradient(45deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2), rgba(34, 211, 238, 0.2))"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Card Content */}
          <div className="aspect-[3/4] relative">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <motion.div 
                  className="text-6xl font-bold text-white/90"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0] 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {initials}
                </motion.div>
              </div>
            )}
          </div>

          {/* Enhanced Info Section */}
          <div className="p-4 bg-white/10 backdrop-blur-sm relative overflow-hidden">
            {/* Team Connection Pulse Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatDelay: 2,
                ease: "easeInOut" 
              }}
            />
            
            <motion.h3 
              className="font-bold text-white text-lg mb-1 group-hover:text-cyan-300 transition-colors relative z-10"
              whileHover={{ scale: 1.02 }}
            >
              {member.name}
            </motion.h3>
            <p className="text-white/80 text-sm mb-2 relative z-10">{member.role}</p>
            <div className="flex items-center justify-between relative z-10">
              <motion.span 
                className="px-2 py-1 bg-white/20 rounded-full text-xs text-white/90"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
              >
                {member.department}
              </motion.span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

 

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 -right-20 w-60 h-60 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 left-1/3 w-40 h-40 bg-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Floating Network Connections */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{pointerEvents: 'none'}}>
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          {/* Animated Connection Lines */}
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${10 + (i * 12)}%`}
              y1={`${20 + Math.sin(i) * 30}%`}
              x2={`${90 - (i * 8)}%`}
              y2={`${80 - Math.cos(i) * 20}%`}
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0.8, 1], 
                opacity: [0, 0.8, 0.3, 0.8] 
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}
        </svg>

        {/* Floating Team Collaboration Icons */}
        <motion.div
          className="absolute top-1/4 left-1/4"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
            <Users className="w-8 h-8 text-cyan-400/60" />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/4"
          animate={{ 
            y: [0, 15, -5, 0],
            rotate: [0, -3, 3, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
            <motion.div
              className="w-6 h-6 border-2 border-purple-400/60 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/3"
          animate={{ 
            y: [0, -10, 5, 0],
            x: [0, 10, -5, 0]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10">
            <motion.div
              className="flex gap-1"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <div className="w-2 h-2 bg-emerald-400/60 rounded-full" />
              <div className="w-2 h-2 bg-teal-400/60 rounded-full" />
              <div className="w-2 h-2 bg-cyan-400/60 rounded-full" />
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-1/2 left-1/6"
          animate={{ 
            rotate: [0, 360],
            y: [0, -30, 0]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 transform rotate-45 backdrop-blur-sm border border-white/10" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-1/6"
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
        >
          <div className="w-10 h-10 border-2 border-indigo-400/40 rounded-full backdrop-blur-sm" />
        </motion.div>

        {/* Particle System */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}

        {/* Team Collaboration Paths */}
        <motion.div
          className="absolute top-1/4 right-1/3"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 3 }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <motion.path
              d="M 20 50 Q 50 20 80 50 Q 50 80 20 50"
              fill="none"
              stroke="rgba(34, 211, 238, 0.3)"
              strokeWidth="2"
              strokeDasharray="4,4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 relative"
        >
          {/* Floating Elements Around Title */}
          <motion.div
            className="absolute -top-8 -left-8 w-4 h-4 bg-cyan-400/40 rounded-full"
            animate={{ 
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div
            className="absolute -top-4 -right-12 w-3 h-3 bg-purple-400/40 rounded-full"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Meet Our Team
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Passionate innovators, creative problem-solvers, and dedicated professionals 
            working together to build the future.
          </motion.p>
          
          {/* Teamwork Connection Visualization */}
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Department Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setFilterRole(dept)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filterRole === dept
                  ? "bg-cyan-500 text-white shadow-lg scale-105"
                  : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-cyan-100 dark:hover:bg-gray-700"
              }`}
            >
              {dept}
            </button>
          ))}
        </motion.div>

        {/* Team Grid with Enhanced Animations */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {/* Grid Connection Lines */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full opacity-10">
              {/* Horizontal connection lines */}
              {[...Array(3)].map((_, row) => (
                <motion.line
                  key={`h-${row}`}
                  x1="0%"
                  y1={`${(row + 1) * 25}%`}
                  x2="100%"
                  y2={`${(row + 1) * 25}%`}
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="2,4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: row * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}
              {/* Vertical connection lines */}
              {[...Array(5)].map((_, col) => (
                <motion.line
                  key={`v-${col}`}
                  x1={`${(col + 1) * 16}%`}
                  y1="0%"
                  x2={`${(col + 1) * 16}%`}
                  y2="100%"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="2,4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: col * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </svg>
          </div>
          
          {filteredMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
          
          {/* Floating Team Stats */}
          <motion.div
            className="absolute -top-16 -right-8 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <div className="text-center">
              <motion.div
                className="text-2xl font-bold text-cyan-400 mb-1"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {filteredMembers.length}
              </motion.div>
              <div className="text-xs text-gray-600 dark:text-gray-300">
                Team Members
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      
    </div>
  );
};

export default TeamPage;