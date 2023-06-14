import PageTitle from '@/components/atoms/PageTitle';
import Trending from '@/components/organisms/Trending';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="tw-p-4">
        <PageTitle title="Home" />
      </div>
      <Trending />
    </div>
  );
};

export default HomePage;
