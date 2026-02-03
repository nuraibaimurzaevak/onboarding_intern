import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './SuperAdminSidebar.css';

const SuperAdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/superadmin/dashboard', icon: '👑', label: 'Супер-панель' },
    { path: '/superadmin/admins', icon: '👥', label: 'Администраторы' },
    { path: '/superadmin/permissions', icon: '🔐', label: 'Разрешения' },
    { path: '/superadmin/system', icon: '⚙️', label: 'Система' },
    { path: '/superadmin/logs', icon: '📋', label: 'Логи' },
    { path: '/admin/dashboard', icon: '📊', label: 'Админ-панель' }
  ];

  const systemItems = [
    { icon: '🛡️', label: 'Безопасность', count: 3 },
    { icon: '💾', label: 'Бэкапы', count: 0 },
    { icon: '📈', label: 'Аналитика', count: 12 }
  ];

  return (
    <aside className={`superadmin-sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        {!collapsed ? (
          <div className="sidebar-logo" onClick={() => window.location.href = '/superadmin/dashboard'}>
            <div className="logo-icon-wrapper">
              <span className="logo-icon">⚡</span>
            </div>
            <div className="logo-texts">
              <span className="logo-main">SUPER</span>
              <span className="logo-sub">ADMIN</span>
            </div>
          </div>
        ) : (
          <div className="sidebar-logo-collapsed" onClick={() => window.location.href = '/superadmin/dashboard'}>
            <div className="logo-icon-wrapper">
              <span className="logo-icon">⚡</span>
            </div>
          </div>
        )}
      </div>

      <div className="sidebar-user-info">
        {!collapsed && (
          <div className="user-card">
            <div className="user-avatar-wrapper">
              <div className="user-avatar">S</div>
              <div className="online-status"></div>
            </div>
            <div className="user-details">
              <span className="user-name">Супер-админ</span>
              <span className="user-title">Владелец системы</span>
              <div className="user-access">
                <span className="access-badge">Полный доступ</span>
              </div>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="user-avatar-collapsed">
            <div className="user-avatar">S</div>
            <div className="online-status"></div>
          </div>
        )}
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <div className="section-title">Навигация</div>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `nav-item ${isActive ? 'active' : ''}`
              }
              title={collapsed ? item.label : ''}
            >
              <span className="nav-icon">{item.icon}</span>
              {!collapsed && (
                <>
                  <span className="nav-label">{item.label}</span>
                  {item.path.includes('admin') && !item.path.includes('super') && (
                    <span className="nav-badge">Admin</span>
                  )}
                </>
              )}
              {collapsed && location.pathname === item.path && (
                <div className="active-indicator"></div>
              )}
            </NavLink>
          ))}
        </div>

        {!collapsed && (
          <div className="nav-section">
            <div className="section-title">
              <span>Система</span>
              <span className="section-badge">3</span>
            </div>
            {systemItems.map((item, index) => (
              <div key={index} className="system-item">
                <span className="system-icon">{item.icon}</span>
                <span className="system-label">{item.label}</span>
                {item.count > 0 && (
                  <span className="system-badge">{item.count}</span>
                )}
              </div>
            ))}
          </div>
        )}

        {!collapsed && (
          <div className="nav-section">
            <div className="section-title">Экстренные действия</div>
            <button className="emergency-btn emergency-red">
              <span className="emergency-icon">🛑</span>
              <span className="emergency-text">Экстренная остановка</span>
            </button>
            <button className="emergency-btn emergency-yellow">
              <span className="emergency-icon">⚠️</span>
              <span className="emergency-text">Технические работы</span>
            </button>
          </div>
        )}
      </nav>

      <div className="sidebar-footer">
        {!collapsed && (
          <div className="system-metrics">
            <div className="metric">
              <div className="metric-label">Использование ОЗУ</div>
              <div className="metric-bar">
                <div className="metric-fill" style={{ width: '65%' }}></div>
              </div>
              <div className="metric-value">65%</div>
            </div>
            <div className="metric">
              <div className="metric-label">Нагрузка ЦП</div>
              <div className="metric-bar">
                <div className="metric-fill" style={{ width: '42%' }}></div>
              </div>
              <div className="metric-value">42%</div>
            </div>
          </div>
        )}
        
        <button 
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
          title={collapsed ? 'Развернуть' : 'Свернуть'}
        >
          {collapsed ? '▶' : '◀'}
        </button>
      </div>
    </aside>
  );
};

export default SuperAdminSidebar;