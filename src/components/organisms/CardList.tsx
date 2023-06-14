import React from 'react';
import Card from '../molecules/Card';

const CardList: React.FC = () => {
  const data = [
    {
      title: 'Fast & Furious 9 (2021)',
      description: 'description1',
      image: 'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
    {
      title: 'title2',
      description: 'description2',
      image: 'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
    {
      title: 'title3',
      description: 'description3',
      image: 'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
    {
      title: 'title3',
      description: 'description3',
      image: 'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
    {
      title: 'title3',
      description: 'description3',
      image: 'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
    {
      title: 'title3',
      description: 'description3',
      image: 'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
    {
      title: 'title3',
      description: 'description3',
      image: 'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
    {
      title: 'title3',
      description: 'description3',
      image: 'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
    {
      title: 'title3',
      description: 'description3',
      image: 'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
    {
      title: 'title3',
      description: 'description3',
      image: 'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
    {
      title: 'title3',
      description: 'description3',
      image: 'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
    {
      title: 'title3',
      description: 'description3',
      image: 'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
  ];

  return (
    <div className="tw-flex tw-items-center tw-space-x-4 tw-overflow-x-auto ">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default CardList;
