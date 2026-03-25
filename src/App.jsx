import About from "./components/About.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;