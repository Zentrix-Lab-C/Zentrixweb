import { motion } from "framer-motion";
import heroImage from "../assets/logoimage.jpg";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white min-h-[calc(100vh-64px)] px-6 lg:px-20 py-12 md:py-0 mt-16">
      
      {/* Left Side - Text */}
      <div className="max-w-xl text-center md:text-left">
        <motion.h1
          className="heading-font text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          SHAPING THE{" "}
          <span className="bg-gradient-to-r from-[#00F0FF] to-[#007BFF] bg-clip-text text-transparent">
            FUTURE OF
          </span>
          <br />
          INNOVATION
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-300 font-light"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          SMART IDEAS.{" "}
          <span className="bg-gradient-to-r from-[#00F0FF] to-[#007BFF] bg-clip-text text-transparent">
            REAL IMPACT.
          </span>{" "}
          ONE LAB.
        </motion.p>

        <div className="mt-8 flex gap-4 justify-center md:justify-start">
          {/* Explore Ventures Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#007BFF] text-white px-6 py-3 rounded-full font-medium text-lg shadow-lg shadow-blue-500/50"
          >
            Explore Ventures
          </motion.button>

          {/* Get In Touch Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-[#007BFF] text-white px-6 py-3 rounded-full font-medium text-lg hover:bg-[#007BFF] hover:text-white transition"
          >
            Get In Touch
          </motion.button>
        </div>
      </div>

      {/* Right Side - Image */}
      <motion.img
        src={heroImage}
        alt="Zentrix Building"
        className="mt-12 md:mt-0 w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-xl shadow-blue-500/30 object-cover"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
};

export default Home;
