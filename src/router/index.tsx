import HomePage from '@/pages/HomePage';
import OtherPage from '@/pages/OtherPage';
import SearchPage from '@/pages/SearchPage';
import MainLayout from '@/templates/MainLayout';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/other',
        element: <OtherPage />,
      },
    ],
  },
]);
