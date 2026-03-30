import React from 'react';
import { Briefcase, Landmark, Bitcoin, UserX } from 'lucide-react';
import './Expertise.css';

const expertiseItems = [
  {
    icon: <Landmark className="text-gold" size={32} />,
    title: 'Fraudes com corretoras de investimento',
    description: 'Plataformas que prometem retornos garantidos, bloqueiam saques ou simplesmente desaparecem com o dinheiro dos investidores.'
  },
  {
    icon: <Bitcoin className="text-gold" size={32} />,
    title: 'Golpe do PIX',
    description: 'Exchanges falsas, phishing de carteiras digitais, esquemas de "robôs traders" e plataformas que manipulam saldos fictícios.'
  },
  {
    icon: <Briefcase className="text-gold" size={32} />,
    title: 'Pirâmides financeiras e esquemas Ponzi',
    description: 'Empresas que dependem da entrada de novos participantes para pagar os anteriores, sem nenhum investimento real por trás.'
  },
  {
    icon: <UserX className="text-gold" size={32} />,
    title: 'Assessoria de investimentos irregular',
    description: 'Assessores ou consultores que fazem operações sem autorização, indicam investimentos inadequados ao perfil do cliente ou agem em conflito de interesse.'
  }
];

const Expertise = () => {
  return (
    <section className="section expertise-section">
      <div className="container">
        <div className="section-header text-center slide-up">
          <span className="subtitle-caps">Especialização</span>
          <h2 className="title-dark mt-xs">Áreas em que somos especialistas</h2>
        </div>

        <div className="expertise-grid mt-xl">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="expertise-card slide-up"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="expertise-icon">
                {item.icon}
              </div>
              <h3 className="expertise-title">{item.title}</h3>
              <p className="expertise-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
