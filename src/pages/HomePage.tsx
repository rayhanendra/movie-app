import PageTitle from '@/components/atoms/PageTitle';
import Trending from '@/components/organisms/Trending';
import React from 'react';

function HomePage() {
  return (
    <div>
      <PageTitle title="Home" />
      <Trending />
      <Trending />
      <Trending />
      <Trending />
      <Trending />
    </div>
  );
}

export default HomePage;
