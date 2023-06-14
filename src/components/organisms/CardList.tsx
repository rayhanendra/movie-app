import React from 'react';
import Card from '../molecules/Card';

type Props = {
  data: ITrending[];
};

const CardList: React.FC<Props> = ({ data }) => {
  if (!data) return null;

  return (
    <div className="tw-flex tw-items-center tw-space-x-4 tw-overflow-x-auto ">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default CardList;
