import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Zap,
  Users,
  Globe,
  CheckCircle,
  Lightbulb,
} from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const coreValues = [
    {
      text: "Bold Innovation – We build the future before it arrives.",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      text: "Human-Centered Intelligence – Tech should empower people.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      text: "Accessible Excellence – High-end tools should be usable by all.",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      text: "Decentralized Empowerment – Power belongs with communities.",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      text: "Relentless Learning – Systems evolve, and so do we.",
      icon: <Lightbulb className="w-5 h-5" />,
    },
    {
      text: "Global Impact, Local Roots – Global reach, with African-first focus.",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      text: "Integrity in Execution – Dream boldly, execute precisely.",
      icon: <Target className="w-5 h-5" />,
    },
  ];

  const standFor = [
    "Innovation with Purpose – Tech that solves real-world needs",
    "Accessible Intelligence – Smart systems for everyone",
    "Future-Readiness – Anticipate and build for what's next",
    "Human-Centered Systems – Machines that serve people, not control them",
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white py-5 px-6 md:px-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 dark:from-gray-900 dark:via-gray-950 dark:to-black" />
      <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10">
        {/* Title */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About Us
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Content Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto space-y-16"
        >
          {/* Intro Section */}
          <motion.div
            variants={sectionVariants}
            className="text-center space-y-8"
          >
            <motion.div
              className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-300 dark:border-gray-800/50 rounded-2xl p-8 md:p-12"
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px rgba(6, 182, 212, 0.1)",
              }}
            >
              <motion.p
                className="text-lg md:text-xl leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <motion.span
                  className="font-bold text-2xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  ZENTRIX
                </motion.span>{" "}
                – A futuristic name combining{" "}
                <span className="italic text-cyan-300">"Zen"</span> (balance)
                and <span className="italic text-cyan-300">"Matrix."</span>
              </motion.p>

              <p className="font-semibold text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Zentrix Lab is a futuristic innovation lab focused on building
                human-aligned, intelligent technologies across AI, finance,
                robotics, and digital infrastructure, especially for emerging
                markets like Africa.
              </p>

              <motion.blockquote
                className="italic text-cyan-400 text-lg md:text-xl font-medium border-l-4 border-cyan-400 pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                "The future isn't something we wait for – it's something we
                build."
              </motion.blockquote>
            </motion.div>
          </motion.div>

          {/* Mission and Vision Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Statement */}
            <motion.div variants={sectionVariants} className="group">
              <motion.div
                className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8 h-full"
                whileHover={{
                  y: -5,
                  borderColor: "rgba(59, 130, 246, 0.5)",
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.1)",
                }}
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl mr-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Target className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-blue-400 font-bold text-2xl">
                    Mission Statement
                  </h3>
                </div>

                <p className="text-gray-200 leading-relaxed mb-4">
                  To build bold, intelligent technologies that empower
                  individuals, transform industries, and reimagine what's
                  possible across finance, AI, robotics, and digital services.
                </p>

                <motion.p
                  className="italic text-cyan-300 border-l-4 border-cyan-400/50 pl-4"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  We create tools that listen, learn, evolve and uplift human
                  potential.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Vision Statement */}
            <motion.div variants={sectionVariants} className="group">
              <motion.div
                className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8 h-full"
                whileHover={{
                  y: -5,
                  borderColor: "rgba(139, 92, 246, 0.5)",
                  boxShadow: "0 25px 50px rgba(139, 92, 246, 0.1)",
                }}
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    className="bg-gradient-to-br from-purple-500 to-blue-500 p-3 rounded-xl mr-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Eye className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-purple-400 font-bold text-2xl">
                    Vision Statement
                  </h3>
                </div>

                <p className="text-gray-200 leading-relaxed mb-4">
                  To become the world's leading innovation lab for emerging
                  technologies shaping the future through accessible AI,
                  sovereign finance, digital infrastructure and human-aligned
                  robotics.
                </p>

                <motion.p
                  className="italic text-cyan-300 border-l-4 border-cyan-400/50 pl-4"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  We envision a world where everyone has access to the power of
                  intelligence, autonomy, and ownership.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div variants={sectionVariants} className="group">
            <motion.div
              className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8 md:p-12"
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px rgba(34, 197, 94, 0.1)",
              }}
            >
              <div className="flex items-center mb-8">
                <motion.div
                  className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-xl mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Heart className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-green-400 font-bold text-2xl md:text-3xl">
                  Core Values
                </h3>
              </div>

              <div className="font-semibold grid md:grid-cols-2 gap-4">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-800/50 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="text-green-400 mt-1 flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      {value.icon}
                    </motion.div>
                    <span className="text-gray-700 dark:text-gray-200 leading-relaxed">
                      {value.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* What We Stand For */}
          <motion.div
            variants={sectionVariants}
            className="font-semibold group"
          >
            <motion.div
              className="bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8 md:p-12"
              whileHover={{
                y: -5,
                boxShadow: "0 25px 50px rgba(251, 146, 60, 0.1)",
              }}
            >
              <div className="flex items-center mb-8">
                <motion.div
                  className="bg-gradient-to-br from-orange-500 to-yellow-500 p-3 rounded-xl mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-orange-400 font-bold text-2xl md:text-3xl">
                  What We Stand For
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {standFor.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-800/50 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-orange-400 rounded-full mt-3 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="text-gray-200 leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
