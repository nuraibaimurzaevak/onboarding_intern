import React from 'react';
import SuperAdminHeader from './SuperAdminHeader';
import SuperAdminSidebar from './SuperAdminSidebar';
import SuperAdminFooter from './SuperAdminFooter';
import './SuperAdminLayout.css';

const SuperAdminLayout = ({ children }) => {
  return (
    <div className="superadmin-layout">
      <SuperAdminHeader />
      <div className="superadmin-main">
        <SuperAdminSidebar />
        <main className="superadmin-content">
          {children}
        </main>
      </div>
      <SuperAdminFooter />
    </div>
  );
};

export default SuperAdminLayout;