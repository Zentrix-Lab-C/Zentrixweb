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

  // Show button after scrolling
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-black text-white relative">
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About/></section>
      <section id="ventures"><Ventures/></section>
      <section id="team"><Team/></section>
      <section id=""><StartupCollaborationPage/></section>
      <section id="contact"><ContactPage/></section>

      {/* Animated Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 animate-bounce opacity-90 hover:opacity-100"
          style={{
            animation: "bounce 2s infinite",
          }}
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;
