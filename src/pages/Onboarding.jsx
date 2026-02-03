import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import './Onboarding.css';

const Onboarding = () => {
  return (
    <MainLayout>
      <div className="onboarding-page">
        <h1>Онбординг / Отчет</h1>
        <p>Раздел для прохождения онбординга и отправки ежедневных отчетов.</p>
        <div className="coming-soon">
          <h2>Скоро здесь появится функционал</h2>
          <p>В этом разделе вы сможете:</p>
          <ul>
            <li>Проходить обучающие материалы по дням</li>
            <li>Отправлять ежедневные отчеты</li>
            <li>Отслеживать свой прогресс</li>
            <li>Получать обратную связь от проверяющих</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default Onboarding;