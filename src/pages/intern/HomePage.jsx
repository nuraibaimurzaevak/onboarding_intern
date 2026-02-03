import React, { useState, useEffect } from 'react';
import './Homepage.css';

const HomePage = ({ user, onLogout }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('dashboard');
  const [completedTasks, setCompletedTasks] = useState(3);
  const [totalTasks, setTotalTasks] = useState(15);
  const [daysInCompany, setDaysInCompany] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('ru-RU', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const progressPercentage = Math.round((completedTasks / totalTasks) * 100);

  const learningProgram = [
    { id: 1, title: 'Введение в компанию', status: 'completed', deadline: '15.10.2023', duration: '2 часа' },
    { id: 2, title: 'Корпоративная культура', status: 'completed', deadline: '16.10.2023', duration: '1.5 часа' },
    { id: 3, title: 'Охрана труда и техника безопасности', status: 'completed', deadline: '17.10.2023', duration: '3 часа' },
    { id: 4, title: 'Знакомство с командой', status: 'in-progress', deadline: '18.10.2023', duration: '1 час' },
    { id: 5, title: 'Рабочие инструменты', status: 'pending', deadline: '19.10.2023', duration: '4 часа' },
    { id: 6, title: 'Первый проект', status: 'pending', deadline: '20.10.2023', duration: '8 часов' },
  ];

  const upcomingTasks = [
    { id: 1, title: 'Встреча с наставником', time: '10:00', date: 'Сегодня', type: 'meeting' },
    { id: 2, title: 'Изучение документации', time: '14:00', date: 'Сегодня', type: 'study' },
    { id: 3, title: 'Воркшоп по React', time: '11:00', date: 'Завтра', type: 'workshop' },
  ];

  const resources = [
    { id: 1, title: 'Корпоративный портал', icon: '🌐', link: '#', description: 'Внутренний портал компании' },
    { id: 2, title: 'База знаний', icon: '📚', link: '#', description: 'Документация и руководства' },
    { id: 3, title: 'Git репозиторий', icon: '💻', link: '#', description: 'Исходный код проектов' },
    { id: 4, title: 'Чат команды', icon: '💬', link: '#', description: 'Slack / Teams команды' },
  ];

  const handleCompleteTask = (taskId) => {
    if (completedTasks < totalTasks) {
      setCompletedTasks(prev => prev + 1);
    }
  };

  return (
    <div className="home-page">
      <header className="header">
        <div className="header-left">
          <div className="logo">ONBOARDING</div>
          <div className="user-welcome">
            <h1>Добро пожаловать, {user?.name || 'Стажер'}! 👋</h1>
            <p className="current-date">{formatDate(currentTime)}</p>
          </div>
        </div>
        
        <div className="header-right">
          <div className="user-info">
            <div className="user-avatar">
              {user?.name?.charAt(0) || 'С'}
            </div>
            <div className="user-details">
              <span className="user-name">{user?.name || 'Стажер'}</span>
              <span className="user-role">🎓 Стажер</span>
            </div>
          </div>
          <button className="logout-btn" onClick={onLogout}>
            Выйти
          </button>
        </div>
      </header>

      <main className="main-content">
        <div className="left-column">
          <div className="card progress-card">
            <h2>Прогресс обучения</h2>
            <div className="progress-circle">
              <div className="circle" style={{ background: `conic-gradient(#3a86ff 0deg ${progressPercentage * 3.6}deg, #e9ecef ${progressPercentage * 3.6}deg 360deg)` }}>
                <span className="progress-value">{progressPercentage}%</span>
              </div>
              <div className="progress-stats">
                <div className="stat">
                  <span className="stat-value">{completedTasks}</span>
                  <span className="stat-label">Выполнено</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{totalTasks}</span>
                  <span className="stat-label">Всего задач</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{daysInCompany}</span>
                  <span className="stat-label">Дней в компании</span>
                </div>
              </div>
            </div>
            <p className="progress-text">
              Вы выполнили {completedTasks} из {totalTasks} задач
            </p>
          </div>

          <div className="card tasks-card">
            <div className="card-header">
              <h2>Ближайшие задачи</h2>
              <span className="badge">{upcomingTasks.length}</span>
            </div>
            <div className="tasks-list">
              {upcomingTasks.map(task => (
                <div key={task.id} className="task-item">
                  <div className="task-time">
                    <span className="time">{task.time}</span>
                    <span className="date">{task.date}</span>
                  </div>
                  <div className="task-content">
                    <h4>{task.title}</h4>
                    <div className="task-meta">
                      <span className="task-type">
                        {task.type === 'meeting' ? '👥 Встреча' : 
                         task.type === 'study' ? '📚 Обучение' : '🎯 Воркшоп'}
                      </span>
                    </div>
                  </div>
                  <button className="task-action">→</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="center-column">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              📊 Программа обучения
            </button>
            <button 
              className={`tab ${activeTab === 'tasks' ? 'active' : ''}`}
              onClick={() => setActiveTab('tasks')}
            >
              ✅ Мои задачи
            </button>
            <button 
              className={`tab ${activeTab === 'resources' ? 'active' : ''}`}
              onClick={() => setActiveTab('resources')}
            >
              📚 Ресурсы
            </button>
          </div>

          <div className="card learning-card">
            <div className="card-header">
              <h2>Программа адаптации</h2>
              <span className="subtitle">Поэтапное прохождение обучения</span>
            </div>
            
            <div className="timeline">
              {learningProgram.map((item, index) => (
                <div key={item.id} className="timeline-item">
                  <div className="timeline-marker">
                    <div className={`marker ${item.status}`}>
                      {item.status === 'completed' ? '✓' : 
                       item.status === 'in-progress' ? '⏳' : index + 1}
                    </div>
                    {index < learningProgram.length - 1 && (
                      <div className="timeline-line"></div>
                    )}
                  </div>
                  
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3>{item.title}</h3>
                      <span className={`status-badge ${item.status}`}>
                        {item.status === 'completed' ? 'Завершено' : 
                         item.status === 'in-progress' ? 'В процессе' : 'Ожидает'}
                      </span>
                    </div>
                    
                    <div className="timeline-meta">
                      <span className="meta-item">📅 Дедлайн: {item.deadline}</span>
                      <span className="meta-item">⏱️ Длительность: {item.duration}</span>
                    </div>
                    
                    {item.status === 'in-progress' && (
                      <div className="timeline-actions">
                        <button 
                          className="btn-primary"
                          onClick={() => handleCompleteTask(item.id)}
                        >
                          Начать выполнение
                        </button>
                        <button className="btn-outline">
                          Подробнее
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="right-column">
          <div className="card mentor-card">
            <h2>Ваш наставник</h2>
            <div className="mentor-info">
              <div className="mentor-avatar">
                👨‍💼
              </div>
              <div className="mentor-details">
                <h3>Александр Петров</h3>
                <p className="mentor-role">Senior Developer</p>
                <p className="mentor-experience">Опыт: 8 лет в компании</p>
              </div>
            </div>
            <div className="mentor-contact">
              <button className="btn-mentor">
                📞 Позвонить
              </button>
              <button className="btn-mentor">
                💬 Написать
              </button>
            </div>
            <p className="mentor-note">
              Следующая встреча: <strong>Завтра в 10:00</strong>
            </p>
          </div>

          <div className="card resources-card">
            <h2>Полезные ресурсы</h2>
            <div className="resources-grid">
              {resources.map(resource => (
                <a key={resource.id} href={resource.link} className="resource-item">
                  <div className="resource-icon">{resource.icon}</div>
                  <div className="resource-content">
                    <h4>{resource.title}</h4>
                    <p>{resource.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="card quick-actions-card">
            <h2>Быстрые действия</h2>
            <div className="actions-grid">
              <button className="action-btn">
                📝 Заполнить отчет
              </button>
              <button className="action-btn">
                ❓ Задать вопрос
              </button>
              <button className="action-btn">
                📅 Записаться на встречу
              </button>
              <button className="action-btn">
                📊 Посмотреть прогресс
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 Onboarding System. Все права защищены.</p>
          <div className="footer-links">
            <a href="#">Помощь</a>
            <a href="#">Обратная связь</a>
            <a href="#">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;