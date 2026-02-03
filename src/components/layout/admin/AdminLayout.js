import React from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import AdminFooter from './AdminFooter';
import './AdminLayout.css';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <AdminHeader />
      <div className="admin-main">
        <AdminSidebar />
        <main className="admin-content">
          {children}
        </main>
      </div>
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;