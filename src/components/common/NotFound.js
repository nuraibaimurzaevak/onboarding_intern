import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleGoBack = () => {
    if (user) {
      // В зависимости от роли перенаправляем на соответствующую главную
      switch (user.role) {
        case 'trainee':
          navigate('/dashboard');
          break;
        case 'admin':
          navigate('/admin/dashboard');
          break;
        case 'superadmin':
          navigate('/superadmin/dashboard');
          break;
        default:
          navigate('/login');
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Страница не найдена</h2>
        <p>Извините, запрашиваемая страница не существует или была перемещена.</p>
        <button onClick={handleGoBack} className="not-found-btn">
          {user ? 'Вернуться на главную' : 'Перейти на страницу входа'}
        </button>
      </div>
    </div>
  );
};

export default NotFound;