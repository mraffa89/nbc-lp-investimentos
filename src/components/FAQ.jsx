import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: 'Vocês atendem em todo o Brasil?',
    answer: 'Sim. Atendemos presencialmente e por videoconferência, com a mesma qualidade e dedicação, independentemente da sua localização.'
  },
  {
    question: 'Preciso ir até o escritório para ser atendido?',
    answer: 'Não. Todo o processo pode ser conduzido de forma remota — desde a análise inicial até o acompanhamento do caso.'
  },
  {
    question: 'Qual a chance de recuperar o dinheiro que perdi?',
    answer: 'Cada caso é único. Não fazemos promessas de resultado, mas avaliamos as possibilidades reais e traçamos a estratégia mais adequada para maximizar suas chances.'
  },
  {
    question: 'É possível processar uma empresa que já fechou ou sumiu?',
    answer: 'Sim. Existem mecanismos legais para responsabilizar sócios, rastrear patrimônio e buscar bloqueio de bens mesmo quando a empresa não está mais ativa.'
  },
  {
    question: 'Quanto tempo demora um processo desse tipo?',
    answer: 'Depende da complexidade do caso. Em algumas situações, é possível obter decisões liminares (urgentes) em poucos dias. O processo completo pode levar meses ou anos, mas trabalhamos para garantir proteção desde o início.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <>
      <section className="section faq-section" id="faq">
        {/* Imagem posicionada à esquerda */}
        <img
          src="/bg-faq.png"
          alt=""
          className="faq-bg-image"
          aria-hidden="true"
        />
        {/* Overlay para contraste */}
        <div className="faq-overlay"></div>

        <div className="container">
          <div className="faq-glass-wrapper slide-up">
            <div className="section-header">
              <h2 className="title-dark">Perguntas Frequentes</h2>
            </div>

            <div className="accordion-wrapper mt-lg">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`accordion-item ${openIndex === index ? 'active' : ''}`}
                >
                  <button
                    className="accordion-header"
                    onClick={() => toggleAccordion(index)}
                    type="button"
                  >
                    <span className="accordion-title">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="accordion-icon" size={24} />
                    ) : (
                      <ChevronDown className="accordion-icon text-gold" size={24} />
                    )}
                  </button>
                  <div
                    className="accordion-content"
                    style={{
                      maxHeight: openIndex === index ? '300px' : '0',
                      opacity: openIndex === index ? 1 : 0
                    }}
                  >
                    <div className="accordion-body">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white cta-section">
        <div className="container text-center slide-up">
          <div className="faq-cta-box">
            <h3 className="cta-final-title">Não deixe que o tempo jogue contra você.</h3>
            <p className="cta-final-desc">
              Quanto mais cedo você buscar orientação jurídica, maiores as chances de rastrear bens, bloquear patrimônio dos responsáveis e recuperar o que é seu por direito. Estamos prontos para ouvir você.
            </p>
            <a href="https://wa.me/5519978277453?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20preciso%20de%20ajuda%20legal%20sobre%20o%20tema%20de%20investimentos." target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-md">
              Buscar orientação jurídica especializada
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;