import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import './TraineeHeader.css';

const TraineeHeader = () => {
  const { user, logout } = useAuth();
  const [notifications] = useState([
    { id: 1, text: 'Новый день онбординга доступен', read: false },
    { id: 2, text: 'Отчет проверен и принят', read: true },
    { id: 3, text: 'Напоминание: дедлайн отчета - 18:00', read: false }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="trainee-header">
      <div className="header-left">
        <div className="logo" onClick={() => window.location.href = '/dashboard'}>
          <span className="logo-text">В ПЛЮСЕ</span>
          <span className="logo-subtitle">Onboarding</span>
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
                <h4>Уведомления</h4>
                <span className="mark-all-read">Отметить все как прочитанные</span>
              </div>
              <div className="notifications-list">
                {notifications.map(notification => (
                  <div 
                    key={notification.id} 
                    className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                  >
                    <div className="notification-dot"></div>
                    <div className="notification-text">{notification.text}</div>
                    <div className="notification-time">10:30</div>
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
            <div className="user-avatar">
              {user?.name?.charAt(0) || 'С'}
            </div>
            <div className="user-info">
              <span className="user-name">{user?.name || 'Стажер'}</span>
              <span className="user-role">🎓 Стажёр</span>
            </div>
            <span className="dropdown-arrow">▼</span>
          </div>
          
          {showProfileMenu && (
            <div className="profile-dropdown">
              <a href="/profile" className="dropdown-item">
                👤 Профиль
              </a>
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

export default TraineeHeader;