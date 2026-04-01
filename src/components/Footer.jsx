import React from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import './Footer.css';

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer bg-dark">
      <div className="container">

        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand-simple">
            <object
              data="/NBC_Logo.svg"
              type="image/svg+xml"
              className="footer-logo-sm"
              style={{ height: '48px', width: 'auto', pointerEvents: 'none' }}
              title="NBC Advocacia"
            >
              NBC Advocacia
            </object>
            <p className="footer-slogan">
              Especialistas em Direito Bancário<br />
              e Fraudes Financeiras.
            </p>
          </div>

          <button onClick={scrollToTop} className="btn-back-to-top">
            <ArrowUp size={16} />
            Voltar ao topo
          </button>
        </div>

        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom-simple">
          <div className="footer-copy">
            <p>&copy; {new Date().getFullYear()} NBC Advocacia</p>
            <p>Todos os direitos reservados. - Desenvolvido por: MHB RAFFA DESIGN & MARKETING DIGITAL LTDA</p>
          </div>
          <div className="footer-socials">
            <a href="https://www.instagram.com/nbc.advogados/" className="social-icon" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://wa.me/5519991686252" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
