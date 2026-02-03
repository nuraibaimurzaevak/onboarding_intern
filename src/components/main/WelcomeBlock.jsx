import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomeBlock.css';

const WelcomeBlock = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-block card">
      <div className="welcome-content">
        <h2>Добро пожаловать в команду!</h2>
        <p>
          Мы рады приветствовать вас в компании "В Плюсе". Эта платформа поможет вам 
          быстро адаптироваться, изучить рабочие процессы и стать частью нашей команды.
        </p>
        <p className="welcome-instruction">
          Для начала работы ознакомьтесь с инструкцией по использованию платформы.
        </p>
        <button 
          className="btn btn-primary"
          onClick={() => navigate('/instructions')}
        >
          Перейти к инструкции
        </button>
      </div>
    </div>
  );
};

export default WelcomeBlock;