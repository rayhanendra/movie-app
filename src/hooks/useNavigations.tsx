import { CircleEllipsisIcon, HomeIcon, SearchIcon } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const useNavigations = () => {
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

  return { navigations, handleClick, location };
};

export default useNavigations;
