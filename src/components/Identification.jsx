import React from 'react';
import { TrendingUp, Lock, UserX, Ghost, Users, ArrowRightLeft } from 'lucide-react';
import './Identification.css';

const situations = [
  {
    icon: <TrendingUp className="text-gold" size={32} />,
    title: 'Prometeram retornos altos e garantidos',
    description: 'Você investiu em uma empresa ou plataforma que prometia lucros acima do mercado, com "garantia de rentabilidade", e agora não consegue sacar seu dinheiro.'
  },
  {
    icon: <Lock className="text-gold" size={32} />,
    title: 'Corretora bloqueou seu saque',
    description: 'Fizeram você depositar mais dinheiro com a desculpa de "taxas de liberação", "impostos pendentes" ou "verificação de conta", e o saque nunca chega.'
  },
  {
    icon: <UserX className="text-gold" size={32} />,
    title: 'Assessor de investimentos causou prejuízos',
    description: 'Um assessor ou consultor fez operações na sua conta sem autorização, ou indicou investimentos inadequados para o seu perfil, gerando perdas significativas.'
  },
  {
    icon: <Ghost className="text-gold" size={32} />,
    title: 'Plataforma de criptomoedas desapareceu',
    description: 'Você investiu em criptoativos por uma plataforma que parecia legítima, mas parou de responder, sumiu ou travou seus saques.'
  },
  {
    icon: <Users className="text-gold" size={32} />,
    title: 'Pirâmide financeira disfarçada',
    description: 'Você entrou em um esquema que dependia da entrada de novos participantes, e agora os responsáveis sumiram com o dinheiro de todos.'
  },
  {
    icon: <ArrowRightLeft className="text-gold" size={32} />,
    title: 'Golpe do PIX',
    description: 'Você foi induzido a fazer transferências para contas de terceiros como parte de um suposto investimento, e agora não consegue recuperar os valores.'
  }
];

const Identification = () => {
  return (
    <section className="pain-points section bg-light" id="tipos-de-golpe">
      <div className="container">
        <div className="section-header text-center slide-up">
          <h2 className="title-dark">Alguma dessas situações aconteceu com você?</h2>
          <p className="sub-headline">
            Somos especializados na defesa de investidores lesados por bloqueios de saques, golpes financeiros e práticas abusivas de corretoras e empresas de investimento.
          </p>        </div>

        <div className="cards-grid mt-xl">
          {situations.map((item, index) => (
            <div
              key={index}
              className="card dores-card slide-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="icon-wrapper">
                {item.icon}
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-banner mt-xl slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="cta-banner-text">
            <h3 className="cta-banner-title">
              Se você passou por qualquer situação como essas, saiba que existem caminhos jurídicos para buscar a recuperação do que foi perdido.
            </h3>
            <p className="cta-banner-subtitle">
              O primeiro passo é falar com quem entende.
            </p>
          </div>
          <div className="cta-banner-action">
            <a href="https://wa.me/5519978277453?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20preciso%20de%20ajuda%20legal%20sobre%20o%20tema%20de%20investimentos." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              Quero avaliar meu caso
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identification;
