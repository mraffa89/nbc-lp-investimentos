import React from 'react';
import { AlertTriangle } from 'lucide-react';
import './RedFlags.css';

const redFlags = [
  {
    title: 'Promessas de retorno fixo e garantido',
    text: 'Nenhum investimento legítimo pode garantir rentabilidade. Se prometeram "X% ao mês sem risco", desconfie.'
  },
  {
    title: 'Pressão para investir rápido',
    text: 'Golpistas criam urgência artificial. "Última vaga", "oferta exclusiva por 24h" são sinais clássicos.'
  },
  {
    title: 'Incentivo para trazer amigos e familiares',
    text: 'Esquemas de pirâmide dependem de novos participantes. Se pediram para você recrutar, é um alerta grave.'
  },
  {
    title: 'Empresa sem CNPJ visível ou sem registro na CVM',
    text: 'Toda empresa que oferece investimentos no Brasil precisa de autorização dos órgãos reguladores.'
  },
  {
    title: 'Dificuldade para sacar',
    text: 'Desculpas como "taxa de liberação", "imposto pendente" ou "verificação de segurança" são táticas comuns de golpistas.'
  },
  {
    title: 'Depósitos em contas de pessoas físicas',
    text: 'Investimentos legítimos são feitos em contas da própria instituição, nunca em contas pessoais de terceiros.'
  }
];

const RedFlags = () => {
  return (
    <section className="section bg-light">
      <div className="container redflags-container">
        
        <div className="redflags-header slide-up">
          <span className="subtitle-caps">Fique atento</span>
          <h2 className="title-dark mt-xs">Como identificar que você pode estar sendo vítima de um golpe financeiro</h2>
        </div>

        <div className="redflags-list mt-xl">
          {redFlags.map((flag, index) => (
            <div 
              key={index} 
              className="redflag-item slide-up" 
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="redflag-icon">
                <AlertTriangle size={24} color="#B8862B" />
              </div>
              <div className="redflag-content">
                <h4 className="redflag-title">{flag.title}</h4>
                <p className="redflag-text">{flag.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="redflags-footer text-center mt-xl slide-up" style={{ animationDelay: '0.8s' }}>
          <p className="closing-phrase">
            Se você identificou um ou mais desses sinais, não espere. Quanto antes agir, maiores as chances de proteção do seu patrimônio.
          </p>
          <a href="https://wa.me/5519978277453?text=Ol%C3%A1%2C%20fui%20v%C3%ADtima%20de%20um%20golpe%20financeiro%20e%20gostaria%20de%20saber%20se%20tenho%20direito%20a%20recuperar%20meu%20dinheiro." target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-md">
            Falar com um advogado especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default RedFlags;
