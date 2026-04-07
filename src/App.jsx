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
    // Rastreamento WhatsApp via gclid (processado via n8n)
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get('gclid');

    if (gclid) {
      fetch('https://n8n.matheusraffa.com.br/webhook/nbc-salvar-gclid', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gclid: gclid })
      })
      .then(r => r.json())
      .then(data => {
        const refCode = data.ref_code;
        const texto = 'Olá, fui vítima de um golpe financeiro e gostaria de saber se tenho direito a recuperar meu dinheiro. Ref: ' + refCode;
        const urlWhatsApp = 'https://wa.me/5519978277453?text=' + encodeURIComponent(texto);
        
        document.querySelectorAll('a[href*="wa.me"]').forEach(function(el) {
          el.href = urlWhatsApp;
        });
      })
      .catch(function() {
        console.error("Falha ao salvar GCLID no n8n.");
      });
    }

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
