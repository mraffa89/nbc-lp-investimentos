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
      // Sorteia próximo aparecimento entre 8 a 15 segundos
      const nextAppearanceMs = Math.floor(Math.random() * (15000 - 8000 + 1)) + 8000;
      
      showTimeoutRef.current = setTimeout(() => {
        showPopup();
      }, nextAppearanceMs);
    };

    const showPopup = () => {
      // Pick random name
      const randomName = MOCK_NAMES[Math.floor(Math.random() * MOCK_NAMES.length)];
      
      // Pick city - 60% chance to be user's city (if available), 40% random fallback
      let selectedCity = '';
      if (userCity && Math.random() < 0.6) {
        selectedCity = userCity;
      } else {
        selectedCity = FALLBACK_CITIES[Math.floor(Math.random() * FALLBACK_CITIES.length)];
      }

      setNotification({ name: randomName, city: selectedCity });
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
          {/* Checkmark icon */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div className="social-proof-text">
          <p className="social-proof-title">
            <strong>{notification.name}</strong> de <strong>{notification.city}</strong>
          </p>
          <p className="social-proof-desc">acabou de solicitar contato.</p>
          <span className="social-proof-time">agora mesmo</span>
        </div>
      </div>
    </div>
  );
};

export default SocialProofPopup;
