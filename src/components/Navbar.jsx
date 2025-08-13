import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

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
    <nav className="bg-black text-white fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="Zentrix Logo" className="w-10 h-10 object-contain" />
          <span className="font-bold text-lg tracking-wider">
            ZENTRIX <span className="font-light">LAB</span>
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                setActive(link.name);
                handleScroll(link.target);
              }}
              className={`px-4 py-1 rounded-full uppercase tracking-wide text-sm font-medium transition-all duration-300 ${
                active === link.name
                  ? "bg-cyan-400 text-white shadow-lg shadow-cyan-500/50"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80 }}
            className="fixed top-0 right-0 w-64 h-full bg-black shadow-lg p-6 flex flex-col z-50"
          >
            {/* Close Button */}
            <button className="self-end mb-8" onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>

            {/* Mobile Links */}
            <ul className="flex flex-col gap-6 text-lg">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      setActive(link.name);
                      handleScroll(link.target);
                      setIsOpen(false);
                    }}
                    className={`uppercase tracking-wide transition-all duration-300 ${
                      active === link.name
                        ? "text-cyan-400 font-bold"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
