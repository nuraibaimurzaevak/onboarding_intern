import React from 'react';
import TraineeHeader from './TraineeHeader';
import TraineeSidebar from './TraineeSidebar';
import TraineeFooter from './TraineeFooter';
import './TraineeLayout.css';

const TraineeLayout = ({ children }) => {
  return (
    <div className="trainee-layout">
      <TraineeHeader />
      <div className="trainee-main">
        <TraineeSidebar />
        <main className="trainee-content">
          {children}
        </main>
      </div>
      <TraineeFooter />
    </div>
  );
};

export default TraineeLayout;