import React from 'react';
import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/5519978277453?text=Ol%C3%A1%2C%20fui%20v%C3%ADtima%20de%20um%20golpe%20financeiro%20e%20gostaria%20de%20saber%20se%20tenho%20direito%20a%20recuperar%20meu%20dinheiro." 
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
