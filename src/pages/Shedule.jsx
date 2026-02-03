import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import './Shedule.css';

const Schedule = () => {
  return (
    <MainLayout>
      <div className="schedule-page">
        <h1>График работы</h1>
        <p>Просмотр графика работы компании и индивидуальных графиков.</p>
        <div className="coming-soon">
          <h2>Скоро будет доступно</h2>
          <p>В этом разделе вы сможете увидеть свой график работы и производственный календарь.</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Schedule;