import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { useAuth } from '../context/AuthContext';
import NewsSlider from '../components/main/NewsSlider';
import WelcomeBlock from '../components/main/WelcomeBlock';
import FeedbackForm from '../components/main/FeedbakForm';
import TeamSlider from '../components/main/TeamSlider';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <MainLayout>
      <div className="dashboard">
        <div className="welcome-section">
          <h1>Добро пожаловать, {user?.firstName}!</h1>
          <p className="subtitle">Вы вошли как {user?.role === 'trainee' ? 'стажёр' : 'администратор'}</p>
        </div>

        <div className="dashboard-grid">
          <div className="grid-column">
            <WelcomeBlock />
            <FeedbackForm />
          </div>
          
          <div className="grid-column">
            <NewsSlider />
            <TeamSlider />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;