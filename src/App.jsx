import Navbar from "./components/Navbar";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import StartupCollaborationPage from "./pages/StartupCollaborationPage";
import Team from "./pages/Team";
import Ventures from "./pages/Ventures";

// App.js
function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About/></section>
      <section id="ventures"><Ventures/></section>
      <section id="team"><Team/></section>
      {/* <section id="contact"><StartupCollaborationPage/></section> */}
      <section id="contact"><ContactPage/></section>
    </div>
  );
}


export default App;
