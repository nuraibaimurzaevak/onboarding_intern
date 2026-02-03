import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ROLES } from '../../utils/permissions';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const getRoleLabel = (role) => {
    switch(role) {
      case ROLES.SUPER_ADMIN: return 'Супер-админ';
      case ROLES.ADMIN: return 'Администратор';
      case ROLES.TRAINEE: return 'Стажёр';
      default: return 'Пользователь';
    }
  };

  const getRoleColor = (role) => {
    switch(role) {
      case ROLES.SUPER_ADMIN: return '#FF6B6B';
      case ROLES.ADMIN: return '#00D4FF';
      case ROLES.TRAINEE: return '#977DFF';
      default: return '#94A3B8';
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <span className="logo-text">В ПЛЮСЕ</span>
          <span className="logo-badge">ONBOARDING</span>
        </div>
      </div>

      <div className="header-right">
        <ThemeToggle />
        <LanguageSwitcher />
        
        <div className="notifications">
          <button 
            className="notification-btn"
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            aria-label="Уведомления"
          >
            <span className="notification-icon">🔔</span>
            <span className="notification-badge">3</span>
          </button>
          
          {notificationsOpen && (
            <div className="notifications-dropdown">
              <div className="dropdown-header">
                <h4>Уведомления</h4>
                <button className="mark-all-read">Отметить всё</button>
              </div>
              <div className="notification-list">
                <div className="notification-item unread">
                  <span className="notification-icon-small">📋</span>
                  <div className="notification-content">
                    <div className="notification-title">Новый отчет на проверку</div>
                    <div className="notification-time">10 мин назад</div>
                  </div>
                </div>
                <div className="notification-item">
                  <span className="notification-icon-small">📄</span>
                  <div className="notification-content">
                    <div className="notification-title">Обновлен регламент</div>
                    <div className="notification-time">2 часа назад</div>
                  </div>
                </div>
                <div className="notification-item">
                  <span className="notification-icon-small">👋</span>
                  <div className="notification-content">
                    <div className="notification-title">Добро пожаловать в систему!</div>
                    <div className="notification-time">1 день назад</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="user-profile">
          <button 
            className="profile-btn"
            onClick={() => setProfileOpen(!profileOpen)}
            aria-label="Профиль пользователя"
          >
            <div className="avatar">
              {user?.photo ? (
                <img src={user.photo} alt={`${user.firstName} ${user.lastName}`} />
              ) : (
                <div className="avatar-placeholder">
                  {user?.firstName?.[0]}{user?.lastName?.[0]}
                </div>
              )}
            </div>
            <div className="user-info">
              <div className="user-name">{user?.firstName} {user?.lastName}</div>
              <div 
                className="user-role"
                style={{ color: getRoleColor(user?.role) }}
              >
                {getRoleLabel(user?.role)}
              </div>
            </div>
            <span className="dropdown-arrow">▼</span>
          </button>

          {profileOpen && (
            <div className="profile-dropdown">
              <a href="/profile" className="dropdown-item">
                <span className="dropdown-icon">👤</span>
                <span>Профиль</span>
              </a>
              {user?.role === ROLES.ADMIN || user?.role === ROLES.SUPER_ADMIN ? (
                <a href="/admin/users" className="dropdown-item">
                  <span className="dropdown-icon">⚙️</span>
                  <span>Админ-панель</span>
                </a>
              ) : null}
              <button onClick={logout} className="dropdown-item logout">
                <span className="dropdown-icon">🚪</span>
                <span>Выйти</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;