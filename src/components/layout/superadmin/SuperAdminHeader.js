import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import './SuperAdminHeader.css';

const SuperAdminHeader = () => {
  const { user, logout } = useAuth();
  const [notifications] = useState([
    { id: 1, text: 'Новый администратор добавлен', read: false, type: 'admin' },
    { id: 2, text: 'Критическое системное событие', read: false, type: 'critical' },
    { id: 3, text: 'Резервное копирование завершено', read: true, type: 'system' },
    { id: 4, text: 'Попытка несанкционированного доступа', read: false, type: 'security' }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'critical': return '⚠️';
      case 'security': return '🔒';
      case 'admin': return '👑';
      default: return '📊';
    }
  };

  return (
    <header className="superadmin-header">
      <div className="header-left">
        <div className="logo" onClick={() => window.location.href = '/superadmin/dashboard'}>
          <span className="logo-icon">⚡</span>
          <div className="logo-texts">
            <span className="logo-main">В ПЛЮСЕ</span>
            <span className="logo-subtitle">Супер-админ панель</span>
          </div>
        </div>
      </div>

      <div className="header-center">
        <div className="system-health">
          <div className="health-item">
            <span className="health-icon">🟢</span>
            <span className="health-text">Система: Активна</span>
          </div>
          <div className="health-item">
            <span className="health-icon">👥</span>
            <span className="health-text">Пользователей: 24</span>
          </div>
          <div className="health-item">
            <span className="health-icon">⚡</span>
            <span className="health-text">Нагрузка: 18%</span>
          </div>
        </div>
      </div>

      <div className="header-right">
        {/* Language Selector */}
        <div className="language-selector">
          <select className="language-dropdown">
            <option value="ru">RU</option>
            <option value="en">EN</option>
            <option value="kg">KG</option>
          </select>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <button className="quick-action-btn" title="Быстрое действие">
            <span className="action-icon">⚙️</span>
          </button>
          <button className="quick-action-btn" title="Экспорт данных">
            <span className="action-icon">📊</span>
          </button>
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
                <h4>Системные уведомления</h4>
                <div className="header-actions">
                  <span className="mark-all-read">Отметить все</span>
                  <span className="settings">Настройки</span>
                </div>
              </div>
              <div className="notifications-list">
                {notifications.map(notification => (
                  <div 
                    key={notification.id} 
                    className={`notification-item ${notification.read ? 'read' : 'unread'} ${notification.type}`}
                  >
                    <div className="notification-type-icon">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="notification-content">
                      <div className="notification-text">{notification.text}</div>
                      <div className="notification-meta">
                        <span className="notification-time">10 мин назад</span>
                        <span className="notification-priority">Высокий</span>
                      </div>
                    </div>
                    <button className="notification-action">⋯</button>
                  </div>
                ))}
              </div>
              <div className="notifications-footer">
                <a href="/superadmin/logs" className="view-all">Все уведомления →</a>
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
            <div className="user-avatar superadmin">
              <span className="crown">👑</span>
            </div>
            <div className="user-info">
              <span className="user-name">{user?.name || 'Супер-админ'}</span>
              <span className="user-role">🔥 Супер-администратор</span>
            </div>
            <span className="dropdown-arrow">▼</span>
          </div>
          
          {showProfileMenu && (
            <div className="profile-dropdown">
              <a href="/superadmin/dashboard" className="dropdown-item">
                👑 Супер-панель
              </a>
              <a href="/superadmin/system" className="dropdown-item">
                ⚙️ Системные настройки
              </a>
              <a href="/superadmin/logs" className="dropdown-item">
                📋 Логи системы
              </a>
              <div className="dropdown-divider"></div>
              <a href="/admin/dashboard" className="dropdown-item">
                📊 Админ-панель
              </a>
              <div className="dropdown-divider"></div>
              <button onClick={logout} className="dropdown-item logout-btn">
                🚪 Выйти из системы
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default SuperAdminHeader;