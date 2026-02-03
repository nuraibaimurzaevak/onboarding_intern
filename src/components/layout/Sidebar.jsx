import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { hasPermission } from '../../utils/permissions';
import './Sidebar.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useAuth();

  const menuItems = [
    {
      path: '/dashboard',
      icon: '🏠',
      label: 'Главная',
      title: 'Главная',
      visible: true
    },
    {
      path: '/onboarding',
      icon: '📚',
      label: 'Онбординг',
      title: 'Онбординг',
      visible: hasPermission(user, 'canViewOnboarding')
    },
    {
      path: '/regulations',
      icon: '📋',
      label: 'Регламенты',
      title: 'Регламенты',
      visible: hasPermission(user, 'canViewRegulations')
    },
    {
      path: '/schedule',
      icon: '📅',
      label: 'График работы',
      title: 'График работы',
      visible: true
    },
    {
      path: '/profile',
      icon: '👤',
      label: 'Профиль',
      title: 'Профиль',
      visible: true
    },
    {
      path: '/instructions',
      icon: 'ℹ️',
      label: 'Инструкция',
      title: 'Инструкция',
      visible: true
    },
    {
      path: '/admin/users',
      icon: '⚙️',
      label: 'Админ-панель',
      title: 'Админ-панель',
      visible: hasPermission(user, 'canViewAdminPanel')
    }
  ].filter(item => item.visible);

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        {!collapsed && <div className="sidebar-logo">НАВИГАЦИЯ</div>}
        <button 
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
          title={collapsed ? "Развернуть" : "Свернуть"}
        >
          {collapsed ? '→' : '←'}
        </button>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `nav-item ${isActive ? 'active' : ''}`
            }
            title={item.title}
          >
            <span className="nav-icon">{item.icon}</span>
            {!collapsed && <span className="nav-label">{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;