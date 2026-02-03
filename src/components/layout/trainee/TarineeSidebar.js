import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './TraineeSidebar.css';

const TraineeSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', icon: '🏠', label: 'Главная' },
    { path: '/onboarding', icon: '📋', label: 'Онбординг / Отчет' },
    { path: '/regulations', icon: '📚', label: 'Регламенты' },
    { path: '/schedule', icon: '📅', label: 'График работы' },
    { path: '/profile', icon: '👤', label: 'Профиль' },
    { path: '/instructions', icon: '📖', label: 'Инструкция' }
  ];

  return (
    <aside className={`trainee-sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        {!collapsed && (
          <div className="sidebar-logo" onClick={() => window.location.href = '/dashboard'}>
            <span className="logo-icon">+</span>
            <span className="logo-text">В ПЛЮСЕ</span>
          </div>
        )}
        {collapsed && (
          <div className="sidebar-logo-collapsed" onClick={() => window.location.href = '/dashboard'}>
            <span className="logo-icon">+</span>
          </div>
        )}
      </div>

      <nav className="sidebar-nav">
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
            {!collapsed && <span className="nav-label">{item.label}</span>}
            {collapsed && location.pathname === item.path && (
              <div className="active-indicator"></div>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
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

export default TraineeSidebar;