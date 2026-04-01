import React, { useState, useEffect, useRef } from 'react';
import './SocialProofPopup.css';

const MOCK_NAMES = ['João', 'Maria', 'Carlos', 'Ana', 'Marcos', 'Fernanda', 'Rafael', 'Juliana', 'Pedro', 'Lucas', 'Camila', 'Felipe'];
const FALLBACK_CITIES = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Campinas', 'Porto Alegre', 'Brasília'];

const SocialProofPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [notification, setNotification] = useState({ name: '', city: '' });
  const [userCity, setUserCity] = useState(null);
  
  // Ref to hold the current timeouts to clean them up if component unmounts
  const showTimeoutRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  useEffect(() => {
    // 1. Buscamos a cidade do usuário apenas uma vez
    const fetchUserCity = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        if (response.ok) {
          const data = await response.json();
          if (data.city) {
            setUserCity(data.city);
          }
        }
      } catch (error) {
        console.warn('Could not fetch user IP data, falling back to default cities.', error);
      }
    };

    fetchUserCity();
  }, []);

  useEffect(() => {
    // 2. Lógica para sortear e exibir repetidamente com intervalos
    const scheduleNextPopup = () => {
      // Sorteia próximo aparecimento entre 20 e 40 segundos para parecer mais orgânico.
      const nextAppearanceMs = Math.floor(Math.random() * (40000 - 20000 + 1)) + 20000;
      
      showTimeoutRef.current = setTimeout(() => {
        showPopup();
      }, nextAppearanceMs);
    };

    const showPopup = () => {
      // Pick random name and masked last initial
      const randomName = MOCK_NAMES[Math.floor(Math.random() * MOCK_NAMES.length)];
      const LAST_INITIALS = ['A', 'C', 'F', 'G', 'L', 'M', 'P', 'R', 'S', 'T', 'V'];
      const randomInitial = LAST_INITIALS[Math.floor(Math.random() * LAST_INITIALS.length)];
      const formattedName = `${randomName} ${randomInitial}***`;
      
      // Pick city - 60% chance to be user's city (if available), 40% random fallback
      let selectedCity = '';
      if (userCity && Math.random() < 0.6) {
        selectedCity = userCity;
      } else {
        selectedCity = FALLBACK_CITIES[Math.floor(Math.random() * FALLBACK_CITIES.length)];
      }

      setNotification({ name: formattedName, city: selectedCity });
      setIsVisible(true);

      // Hide after 5 seconds
      hideTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
        // Schedule the next one after hiding
        scheduleNextPopup();
      }, 5000);
    };

    // Start the first schedule
    scheduleNextPopup();

    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, [userCity]);

  return (
    <div className={`social-proof-popup ${isVisible ? 'visible' : ''}`}>
      <div className="social-proof-content">
        <div className="social-proof-icon">
          {/* iOS-like checkmark symbol */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div className="social-proof-text">
          <div className="social-proof-header">
            <p className="social-proof-title">{notification.name}</p>
            <span className="social-proof-time">agora</span>
          </div>
          <p className="social-proof-desc">De {notification.city}, solicitou avaliação do caso.</p>
        </div>
      </div>
    </div>
  );
};

export default SocialProofPopup;
