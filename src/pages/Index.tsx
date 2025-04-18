
import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Spotify from "../components/Spotify";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  useEffect(() => {
    // Smooth scroll to section when clicking navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Certifications />
          <Projects />
          <Spotify />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
