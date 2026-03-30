import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Identification from './components/Identification';
import AboutUs from './components/AboutUs';
import Process from './components/Process';
import Expertise from './components/Expertise';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SocialProofPopup from './components/SocialProofPopup';
import './App.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // small timeout to ensure transition plays smoothly
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, parseInt(entry.target.style.animationDelay) * 1000 || 0);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <Identification />
      <AboutUs />
      <Process />
      <Expertise />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
      <SocialProofPopup />
    </>
  );
}

export default App;
