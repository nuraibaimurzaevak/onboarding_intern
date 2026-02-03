import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { initializeMockData } from './api/mockData';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { ROLES } from './utils/permissions';

// Импорт страниц
import Login from './AuthPages/LoginPage';
import Dashboard from './pages/Dashboard';
import Onboarding from './pages/Onboarding';
import Regulations from './pages/Regulations';
import Schedule from './pages/Shedule';
import Profile from './pages/Profile';
import Instructions from './pages/Instructions';

// Импорт стилей
import './styles/variables.css';
import './styles/main.css';
import './App.css';

// Инициализируем мок-данные при запуске
initializeMockData();

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Публичные маршруты */}
      <Route path="/login" element={
        user ? <Navigate to="/dashboard" replace /> : <Login />
      } />
      
      {/* Защищенные маршруты */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      
      <Route path="/onboarding" element={
        <ProtectedRoute requiredRole={ROLES.TRAINEE}>
          <Onboarding />
        </ProtectedRoute>
      } />
      
      <Route path="/regulations" element={
        <ProtectedRoute>
          <Regulations />
        </ProtectedRoute>
      } />
      
      <Route path="/schedule" element={
        <ProtectedRoute>
          <Schedule />
        </ProtectedRoute>
      } />
      
      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />
      
      <Route path="/instructions" element={
        <ProtectedRoute>
          <Instructions />
        </ProtectedRoute>
      } />
      
      {/* Админские маршруты */}
      <Route path="/admin/users" element={
        <ProtectedRoute requiredRole={ROLES.ADMIN}>
          <div>Управление пользователями (будет реализовано)</div>
        </ProtectedRoute>
      } />
      
      {/* Перенаправление с корня */}
      <Route path="/" element={
        <Navigate to={user ? "/dashboard" : "/login"} replace />
      } />
      
      {/* 404 страница */}
      <Route path="*" element={<div>Страница не найдена</div>} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <AppRoutes />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;