import NavigationBar from '@/components/organisms/NavigationBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <>
      <div className="md:tw-container md:tw-mx-auto">
        <Outlet />
      </div>
      <NavigationBar />
    </>
  );
};

export default MainLayout;
