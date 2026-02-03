import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import './AdminHeader.css';

const AdminHeader = () => {
  const { user, logout } = useAuth();
  const [notifications] = useState([
    { id: 1, text: 'Новый стажёр зарегистрирован', read: false },
    { id: 2, text: 'Отчёт требует проверки', read: false },
    { id: 3, text: 'Системное обновление запланировано', read: true }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="admin-header">
      <div className="header-left">
        <div className="logo" onClick={() => window.location.href = '/admin/dashboard'}>
          <span className="logo-text">В ПЛЮСЕ</span>
          <span className="logo-subtitle">Административная панель</span>
        </div>
      </div>

      <div className="header-right">
        {/* Language Selector */}
        <div className="language-selector">
          <select className="language-dropdown">
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
        </div>

        {/* Quick Stats */}
        <div className="quick-stats">
          <div className="stat-item">
            <span className="stat-value">5</span>
            <span className="stat-label">Стажёров</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">3</span>
            <span className="stat-label">Отчётов</span>
          </div>
        </div>

        {/* Notifications */}
        <div className="notifications-wrapper">
          <button 
            className="notifications-btn"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <span className="notification-icon">🔔</span>
            {unreadCount > 0 && (
              <span className="notification-badge">{unreadCount}</span>
            )}
          </button>
          
          {showNotifications && (
            <div className="notifications-dropdown">
              <div className="notifications-header">
                <h4>Уведомления администратора</h4>
                <span className="mark-all-read">Отметить все</span>
              </div>
              <div className="notifications-list">
                {notifications.map(notification => (
                  <div 
                    key={notification.id} 
                    className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                  >
                    <div className="notification-dot"></div>
                    <div className="notification-text">{notification.text}</div>
                    <div className="notification-time">Сегодня</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User Profile */}
        <div className="user-profile-wrapper">
          <div 
            className="user-profile"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <div className="user-avatar admin">
              {user?.name?.charAt(0) || 'А'}
            </div>
            <div className="user-info">
              <span className="user-name">{user?.name || 'Администратор'}</span>
              <span className="user-role">🛠️ Администратор</span>
            </div>
            <span className="dropdown-arrow">▼</span>
          </div>
          
          {showProfileMenu && (
            <div className="profile-dropdown">
              <a href="/admin/dashboard" className="dropdown-item">
                📊 Панель управления
              </a>
              <a href="/profile" className="dropdown-item">
                👤 Профиль
              </a>
              <div className="dropdown-divider"></div>
              <button onClick={logout} className="dropdown-item logout-btn">
                🚪 Выйти
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;