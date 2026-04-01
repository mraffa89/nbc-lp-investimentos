import React from 'react';
import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/5519978277453?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20preciso%20de%20ajuda%20legal%20sobre%20o%20tema%20de%20investimentos." 
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-whatsapp"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default FloatingWhatsApp;
