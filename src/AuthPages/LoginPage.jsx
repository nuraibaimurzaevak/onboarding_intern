import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Ошибка авторизации');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <div className="logo">
            <h1>В ПЛЮСЕ</h1>
            <p>Onboarding Platform</p>
          </div>
        </div>
        
        <div className="login-card">
          <h2>Вход в систему</h2>
          <p className="login-subtitle">Введите логин и пароль, выданный администрацией</p>
          
          {error && <div className="alert alert-error">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введите ваш email"
                required
                disabled={loading}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введите пароль"
                required
                disabled={loading}
              />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary btn-block"
              disabled={loading}
            >
              {loading ? 'Вход...' : 'Войти'}
            </button>
          </form>
          
          <div className="login-footer">
            <p>Тестовые доступы:</p>
            <ul className="test-accounts">
              <li><strong>Супер-админ:</strong> superadmin@vplus.kg / admin123</li>
              <li><strong>Админ:</strong> admin@vplus.kg / admin123</li>
              <li><strong>Стажёр:</strong> trainee@vplus.kg / trainee123</li>
            </ul>
          </div>
        </div>
        
        <div className="login-footer-info">
          <p>© 2025 В Плюсе. Все права защищены.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;