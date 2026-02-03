import React from 'react';
import './TraineeFooter.css';

const TraineeFooter = () => {
  return (
    <footer className="trainee-footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <span className="logo-text">В ПЛЮСЕ</span>
            <span className="logo-subtitle">Onboarding Platform</span>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} В плюсе. Все права защищены.
          </div>
        </div>

        <div className="footer-center">
          <div className="work-hours">
            <h4>Часы работы офиса</h4>
            <p>Пн-Пт: 9:00 - 18:00</p>
            <p>Сб: 10:00 - 16:00</p>
            <p>Вс: Выходной</p>
          </div>
        </div>

        <div className="footer-right">
          <div className="contact-info">
            <h4>Контакты</h4>
            <p>Email: info@vplus.ru</p>
            <p>Телефон: +7 (999) 123-45-67</p>
            <p>Адрес: г. Москва, ул. Примерная, д. 1</p>
          </div>
          <div className="map-link">
            <a 
              href="https://2gis.ru/moscow/firm/70000001032345678" 
              target="_blank" 
              rel="noopener noreferrer"
              className="map-btn"
            >
              🗺️ Открыть карту 2ГИС
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TraineeFooter;