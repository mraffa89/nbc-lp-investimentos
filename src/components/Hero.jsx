import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero bg-dark">
      {/* Background Image is now absolute inside .hero, before container */}
      <div className="hero-image fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="image-frame">
          <picture>
            <source
              srcSet="/Foto_Secao_01-mobile.webp"
              type="image/webp"
              media="(max-width: 991px)"
            />
            <source srcSet="/Foto_Secao_01.webp" type="image/webp" />
            <img
              src="/Foto_Secao_01.png"
              alt="Advogados Especialistas em Direito Bancário NBC Advocacia"
              className="img-placeholder"
              width="896"
              height="1280"
              fetchpriority="high"
            />
          </picture>
        </div>
      </div>

      <div className="container hero-container">



        <div className="hero-content">
          <div className="hero-text fade-in" style={{ animationDelay: '0.2s' }}>
            <h1>Vítima de Fraude em Investimentos, Bloqueio de Saques ou Golpe do PIX?</h1>
            <p className="sub-headline">Você pode ter direitos que ainda não conhece, além da chance de recuperar seu prejuízo parcial ou totalmente.</p>


            <a href="https://wa.me/5519978277453?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20preciso%20de%20ajuda%20legal%20sobre%20o%20tema%20de%20investimentos." target="_blank" rel="noopener noreferrer" className="btn btn-hero mt-4">
              Agendar conversa inicial
            </a>

            <div className="trust-badges mt-4" style={{ color: '#FFFFFF', fontWeight: '400' }}>
              <span className="badge">✓ Atendemos todo o Brasil</span>
              <span className="badge">✓ Sigilo Total</span>
            </div>
          </div>
        </div>
      </div>
      

    </section>
  );
};

export default Hero;
