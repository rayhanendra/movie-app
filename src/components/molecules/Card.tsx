import React from 'react';
import { StarIcon } from 'lucide-react';

type Props = {
  type?: 'list' | 'grid';
  title: string;
  image: string;
  rating: number;
};
const Card: React.FC<Props> = ({ type = 'list', title, image, rating }) => {
  return (
    <div
      className={`${
        type === 'list'
          ? 'tw-w-32 md:tw-w-40'
          : type === 'grid'
          ? 'tw-w-full'
          : ''
      } tw-relative tw-h-32 tw-flex-shrink-0 tw-rounded-xl md:tw-h-64`}
    >
      <img
        className="tw-absolute -tw-z-10 tw-h-full tw-w-full tw-rounded-xl tw-object-cover"
        src={image}
        alt={title}
        loading="lazy"
      />
      <div className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-z-10 tw-rounded-b-xl tw-bg-slate-300 tw-bg-opacity-5 tw-p-2 tw-backdrop-blur-md tw-backdrop-filter">
        <div className="tw-truncate tw-text-sm tw-font-bold md:tw-text-lg">
          {title}
        </div>
        <div className="tw-flex tw-items-center tw-gap-1">
          <StarIcon className="tw-h-3 tw-w-3 tw-fill-current tw-text-yellow-500" />
          <div className="tw-text-white-500 tw-text-xs">
            {Math.round(rating * 10) / 10}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
