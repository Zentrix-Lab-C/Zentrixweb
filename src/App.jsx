import Navbar from "./components/Navbar";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import StartupCollaborationPage from "./pages/StartupCollaborationPage";
import Team from "./pages/TeamPage";
import Ventures from "./pages/Ventures";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState("dark"); // default dark mode

  // Theme toggle handler
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Persist theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  // Show scroll-to-top button after scrolling
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // Apply theme as a class
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div className="bg-white text-black dark:bg-black dark:text-white relative transition-colors duration-500">
        
        {/* Pass theme + toggle down */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="ventures"><Ventures /></section>
        <section id="team"><Team /></section>
        <section id=""><StartupCollaborationPage /></section>
        <section id="contact"><ContactPage /></section>

        {/* Animated Scroll to Top Button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-3 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 animate-bounce opacity-90 hover:opacity-100"
          >
            <FaArrowUp size={20} />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
