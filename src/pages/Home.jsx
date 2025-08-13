import { motion } from "framer-motion";
import heroImage from "../assets/logoimage.jpg";

const Home = () => {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative w-full min-h-screen pt-2">
      <div className="flex flex-col md:flex-row w-full h-full">

        {/* LEFT: Text block */}
        <div className="relative bg-black text-white flex flex-col justify-center px-6 sm:px-8 lg:px-20 py-10 md:py-12 md:w-1/2 lg:w-[55%]">
          {/* Cyan glow */}
          <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-10 md:left-auto md:translate-x-0 md:right-[-60px] md:top-1/3 w-56 h-56 md:w-72 md:h-72 rounded-full blur-3xl bg-cyan-500/20" />

          {/* Main heading */}
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide font-[Orbitron]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            SHAPING THE{" "}
            <span className="text-[#00F0FF]">FUTURE</span> OF INNOVATION
          </motion.h1>

          {/* Tagline lines */}
          <motion.div
            className="mt-8 space-y-3 font-[Orbitron] tracking-wider ms-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl">SMART IDEAS.</p>
            <p className="text-xl md:text-2xl text-[#00F0FF] font-bold">REAL IMPACT.</p>
            <p className="text-xl md:text-2xl">ONE LAB.</p>
          </motion.div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => go("ventures")}
              className="w-full sm:w-auto bg-[#007BFF] text-white px-6 py-3 rounded-full font-medium text-lg shadow-lg shadow-blue-500/40"
            >
              Explore Ventures
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => go("contact")}
              className="w-full sm:w-auto px-6 py-3 rounded-full font-medium text-lg text-white bg-black border border-[#007BFF] ring-2 ring-[#007BFF]/60 hover:bg-[#007BFF] transition"
            >
              Get In Touch
            </motion.button>
          </div>
        </div>

        {/* RIGHT: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative md:w-1/2 lg:w-[45%] h-72 sm:h-80 md:h-auto"
        >
          <img src={heroImage} alt="Zentrix Building" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
