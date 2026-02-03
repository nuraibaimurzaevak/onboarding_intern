import React from 'react';
import './AdminFooter.css';

const AdminFooter = () => {
  return (
    <footer className="admin-footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <span className="logo-text">В ПЛЮСЕ</span>
            <span className="logo-subtitle">Административная система</span>
          </div>
          <div className="footer-info">
            <p>Версия: 1.0.0</p>
            <p>Последнее обновление: 01.01.2024</p>
          </div>
        </div>

        <div className="footer-center">
          <div className="footer-links">
            <a href="/admin/dashboard">Дашборд</a>
            <a href="/admin/users">Пользователи</a>
            <a href="/admin/reports">Отчёты</a>
            <a href="/admin/settings">Настройки</a>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} В плюсе. Административная панель.
          </div>
        </div>

        <div className="footer-right">
          <div className="system-status">
            <div className="status-item">
              <span className="status-dot online"></span>
              <span>Система активна</span>
            </div>
            <div className="status-item">
              <span className="status-dot warning"></span>
              <span>5 стажёров онлайн</span>
            </div>
            <div className="status-item">
              <span className="status-dot"></span>
              <span>Загрузка сервера: 42%</span>
            </div>
          </div>
          <div className="support-link">
            <a href="mailto:support@vplus.ru" className="support-btn">
              ✉️ Техническая поддержка
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;