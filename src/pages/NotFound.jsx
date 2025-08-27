import React from 'react';
import { Link } from 'react-router-dom';
import '../css/notfound.css';

const NotFound = () => {
  return (
    <div className="notfound">
      {/* Main 404 Section */}
      <section className="notfound-section">
        <div className="notfound-content">
          <div className="notfound-graphic">
            <div className="logo-container">
              <img src="/3D_logo.png" alt="MultiPixel Logo" className="logo-m" />
            </div>
          </div>
          <div className="notfound-text">
            <h1 className="notfound-title">
              <span className="text-white">Página</span>
              <br />
              <span className="text-gold">Não Encontrada</span>
            </h1>
            <p className="notfound-subtitle">Ops! Parece que você se perdeu no universo digital</p>
            <div className="notfound-actions">
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
