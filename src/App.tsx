import { useState, useEffect } from 'react';
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buttonClass =
    "fixed bottom-4 right-4 bg-brand-primary hover:bg-brand-dark text-white rounded-full p-3 shadow-md transition-opacity duration-300 " +
    (showButton ? "opacity-100" : "opacity-0");

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={buttonClass}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}
