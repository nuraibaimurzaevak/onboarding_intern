import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { ADMIN_PERMISSIONS } from '../../../utils/constants';
import './AdminSidebar.css';

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { hasPermission } = useAuth();

  const navItems = [
    { path: '/admin/dashboard', icon: '📊', label: 'Дашборд', permission: null },
    { path: '/admin/content', icon: '📝', label: 'Контент', permission: ADMIN_PERMISSIONS.MANAGE_CONTENT },
    { path: '/admin/users', icon: '👥', label: 'Пользователи', permission: ADMIN_PERMISSIONS.MANAGE_USERS },
    { path: '/admin/reports', icon: '📋', label: 'Отчёты', permission: ADMIN_PERMISSIONS.REVIEW_REPORTS },
    { path: '/admin/settings', icon: '⚙️', label: 'Настройки', permission: null }
  ];

  const filteredNavItems = navItems.filter(item => 
    !item.permission || hasPermission(item.permission)
  );

  return (
    <aside className={`admin-sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        {!collapsed && (
          <div className="sidebar-logo" onClick={() => window.location.href = '/admin/dashboard'}>
            <span className="logo-icon">A</span>
            <div className="logo-texts">
              <span className="logo-main">Админ</span>
              <span className="logo-sub">Панель</span>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="sidebar-logo-collapsed" onClick={() => window.location.href = '/admin/dashboard'}>
            <span className="logo-icon">A</span>
          </div>
        )}
      </div>

      <div className="sidebar-user-info">
        {!collapsed && (
          <div className="user-card">
            <div className="user-avatar-small">A</div>
            <div className="user-details">
              <span className="user-name-small">Администратор</span>
              <span className="user-status">
                <span className="status-dot online"></span>
                Онлайн
              </span>
            </div>
          </div>
        )}
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <div className="section-title">Управление</div>
          {filteredNavItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `nav-item ${isActive ? 'active' : ''}`
              }
              title={collapsed ? item.label : ''}
            >
              <span className="nav-icon">{item.icon}</span>
              {!collapsed && <span className="nav-label">{item.label}</span>}
              {collapsed && location.pathname === item.path && (
                <div className="active-indicator"></div>
              )}
            </NavLink>
          ))}
        </div>

        {!collapsed && (
          <div className="nav-section">
            <div className="section-title">Быстрый доступ</div>
            <button className="quick-action">
              <span className="action-icon">➕</span>
              <span className="action-text">Новый стажёр</span>
            </button>
            <button className="quick-action">
              <span className="action-icon">📊</span>
              <span className="action-text">Отчёт за день</span>
            </button>
          </div>
        )}
      </nav>

      <div className="sidebar-footer">
        {!collapsed && (
          <div className="system-info">
            <div className="system-stats">
              <div className="stat">
                <span className="stat-value">12</span>
                <span className="stat-label">Активных</span>
              </div>
              <div className="stat">
                <span className="stat-value">3</span>
                <span className="stat-label">Ожидают</span>
              </div>
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

export default AdminSidebar;