import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import './Profile.css';

const Profile = () => {
  return (
    <MainLayout>
      <div className="profile-page">
        <h1>Профиль</h1>
        <p>Управление вашими персональными данными.</p>
        <div className="coming-soon">
          <h2>Раздел в разработке</h2>
          <p>Здесь вы сможете редактировать свои данные и настройки профиля.</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;