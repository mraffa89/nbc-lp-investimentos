import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section bg-alt">

      {/* Imagem preenchendo o background à esquerda no desktop */}
      <div className="about-image-bg slide-up" style={{ animationDelay: '0.3s' }}>
        <img
          src="/adv.jpg"
          alt="Advogada Especialista em Direito Bancário e Defesa do Consumidor - NBC Advocacia"
          width="576"
          height="768"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="fallback-placeholder" style={{ display: 'none', width: '100%', height: '100%', backgroundColor: 'var(--color-bg-white)', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary-gold)', fontWeight: 600 }}>
          adv.jpg placeholder
        </div>
      </div>

      <div className="container about-container">

        {/* Espaçador invisível na esquerda para manter o texto na direita (coluna 2 da grid) */}
        <div className="about-spacer"></div>

        <div className="about-text-content slide-up">
          <span className="subtitle-caps">Por que escolher o NBC?</span>
          <h2 className="title-dark mt-xs">
            Somos especialistas em direito bancário e <span style={{ whiteSpace: 'nowrap' }}>defesa do consumidor.</span>
          </h2>

          <div className="text-body-lg mt-md">
            <p>
              O escritório NBC atua com foco especial na defesa de pessoas que foram lesadas no ambiente de investimentos.
            </p>
            <p>
              Atuamos em casos envolvendo fraudes financeiras, esquemas de pirâmide, corretoras irregulares, plataformas de investimentos, falhas de assessorias e práticas abusivas de instituições financeiras.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
