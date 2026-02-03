import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">В ПЛЮСЕ</div>
          <p className="copyright">© 2025 В Плюсе. Все права защищены.</p>
        </div>
        
        <div className="footer-section">
          <h4>Часы работы</h4>
          <p>Пн-Пт: 9:00 - 18:00</p>
          <p>Сб-Вс: Выходной</p>
        </div>
        
        <div className="footer-section">
          <h4>Контакты</h4>
          <p>г. Бишкек, ул. Примерная, 123</p>
          <p>+996 (312) 123-456</p>
          <p>info@vplus.kg</p>
        </div>
        
        <div className="footer-section">
          <h4>Карта офиса</h4>
          <a 
            href="https://2gis.kg/bishkek/geo/15763234351077835/74.590963,42.865145" 
            target="_blank" 
            rel="noopener noreferrer"
            className="map-link"
          >
            <div className="map-preview">
              <div className="map-icon">📍</div>
              <span>Открыть в 2GIS</span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;