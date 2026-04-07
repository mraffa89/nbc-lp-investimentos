import React from 'react';
import './Process.css';

const steps = [
  {
    number: '1',
    title: 'Contato inicial',
    description: 'Você entra em contato pelo WhatsApp clicando em algum botão nessa página. Nossa equipe faz um primeiro acolhimento gratuito e entende sua situação de forma geral.'
  },
  {
    number: '2',
    title: 'Análise do caso',
    description: 'Um advogado especialista avalia detalhes do que aconteceu. Identificamos o tipo de fraude ou lesão e as possibilidades jurídicas.'
  },
  {
    number: '3',
    title: 'Estratégia jurídica',
    description: 'Definimos a melhor estratégia para o seu caso específico, com transparência total sobre expectativas e prazos. Pensando sempre no seu melhor atendimento e nas suas necessidades.'
  },
  {
    number: '4',
    title: 'Ação e acompanhamento',
    description: 'Entramos em ação. Você acompanha cada etapa do processo com acesso direto ao seu advogado responsável. Sem IA ou respostas robotizadas. Atendimento 100% humano, com um advogado real e dedicado ao seu caso.'
  }
];

const Process = () => {
  return (
    <section className="section bg-light" id="como-funciona">
      <div className="container">
        <div className="section-header text-center slide-up mb-xl">
          <h2 className="title-dark">Como funciona nosso atendimento?</h2>
        </div>

        <div className="timeline-container mt-xl slide-up" style={{ animationDelay: '0.2s' }}>
          {steps.map((step, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-number">{step.number}</div>
                {index < steps.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="timeline-content">
                <span className="step-label subtitle-caps">Passo {step.number}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-xl slide-up" style={{ animationDelay: '0.6s' }}>
          <a href="https://wa.me/5519978277453?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20preciso%20de%20ajuda%20legal%20sobre%20o%20tema%20de%20investimentos." target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Realizar uma consulta agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
