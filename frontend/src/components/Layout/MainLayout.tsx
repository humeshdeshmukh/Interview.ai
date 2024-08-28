import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './MainLayout.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="main-layout flex flex-col min-h-screen">
      <Header onToggleSidebar={toggleSidebar} />
      <div className="content-wrapper flex flex-1">
        <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
        <main className="main-content flex-1 bg-gray-100 p-4 transition-transform duration-300 ease-in-out">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
