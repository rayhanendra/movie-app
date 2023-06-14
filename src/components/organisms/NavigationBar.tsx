import React, { Component } from 'react';
import { HomeIcon, SearchIcon, CircleEllipsisIcon } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigations = [
    {
      icon: <HomeIcon size={18} />,
      name: 'Home',
      link: '/',
    },
    {
      icon: <SearchIcon size={18} />,
      name: 'Search',
      link: '/search',
    },
    {
      icon: <CircleEllipsisIcon size={18} />,
      name: 'Other',
      link: '/other',
    },
  ];

  const handleClick = (link: string) => {
    navigate(link);
  };

  return (
    <div className="tw-visible tw-fixed tw-bottom-0 tw-left-0 tw-right-0 tw-z-50 tw-p-4 md:tw-invisible">
      <div className="tw-backgdrop-filter tw-flex tw-items-center tw-justify-evenly tw-gap-4 tw-rounded-3xl tw-bg-slate-600 tw-bg-opacity-5 tw-p-6 tw-backdrop-blur-lg">
        {navigations.map((navigation) => {
          const isSelected = location.pathname === navigation.link;
          const filledIcon = React.cloneElement(navigation.icon, {
            fill: isSelected ? '#fcd660' : 'none',
          });

          return (
            <div
              key={navigation.name}
              className={`tw-flex tw-flex-col tw-items-center tw-gap-1 ${isSelected ? 'tw-text-yellow-500' : ''}`}
              onClick={() => handleClick(navigation.link)}
            >
              <div>{filledIcon}</div>
              <div className="tw-text-white-500 tw-text-center tw-text-xs tw-font-medium">{navigation.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationBar;
