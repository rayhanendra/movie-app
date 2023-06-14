import React from 'react';
import CardList from './CardList';

const Trending = () => {
  return (
    <div className="tw-px-4">
      <div className="tw-text-white-900 tw-py-4 tw-text-base tw-font-bold md:tw-text-lg">Trending</div>
      <div>
        <CardList />
      </div>
    </div>
  );
};

export default Trending;
