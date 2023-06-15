import NavigationBar from '@/components/organisms/NavigationBar';
import SideBar from '@/components/organisms/SideBar';
import ScrollToTop from '@/helpers/ScrollToTop';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <div className="tw-h-screen md:tw-container md:tw-mx-auto md:tw-grid md:tw-grid-cols-12 md:tw-space-x-2">
        <div className="tw-hidden md:tw-col-span-2 md:tw-block">
          <SideBar />
        </div>
        <div className="md:tw-col-span-10 ">
          <Outlet />
        </div>
      </div>
      <NavigationBar />
    </>
  );
};

export default MainLayout;
