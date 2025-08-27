import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/notfound.css';

const NotFound = () => {
  // Animação de scroll para imagem e texto
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Elementos para animar (apenas imagem e texto)
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

    return () => {
      elementsToAnimate.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="notfound">
      {/* Main 404 Section */}
      <section className="notfound-section">
        <div className="notfound-content">
          <div className="notfound-graphic animate-on-scroll">
            <div className="logo-container">
              <img src="/3D_logo.png" alt="MultiPixel Logo" className="logo-m" />
            </div>
          </div>
          <div className="notfound-text animate-on-scroll">
            <h1 className="notfound-title animate-on-scroll">
              <span className="text-white">Página</span>
              <br />
              <span className="text-gold">Não Encontrada</span>
            </h1>
            <p className="notfound-subtitle animate-on-scroll">Ops! Parece que você se perdeu no universo digital</p>
            <div className="notfound-actions animate-on-scroll">
              <Link to="/" className="back-button">
                Voltar ao Início
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
