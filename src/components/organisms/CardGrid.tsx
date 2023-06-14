import React from 'react';
import Card from '../molecules/Card';

const CardGrid: React.FC = () => {
  const data = [
    {
      title: 'Fast & Furious 9 (2021)',
      description: 'description1',
      image:
        'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
    {
      title: 'title2',
      description: 'description2',
      image:
        'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
    {
      title: 'title3',
      description: 'description3',
      image:
        'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
    {
      title: 'title3',
      description: 'description3',
      image:
        'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
    {
      title: 'title3',
      description: 'description3',
      image:
        'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
    {
      title: 'title3',
      description: 'description3',
      image:
        'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
    {
      title: 'title3',
      description: 'description3',
      image:
        'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
    {
      title: 'title3',
      description: 'description3',
      image:
        'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
    {
      title: 'title3',
      description: 'description3',
      image:
        'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
    {
      title: 'title3',
      description: 'description3',
      image:
        'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
    {
      title: 'title3',
      description: 'description3',
      image:
        'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
    {
      title: 'title3',
      description: 'description3',
      image:
        'https://www.themoviedb.org/t/p/w1280/fiVW06jE7z9YnO4trhaMEdclSiC.jpg',
      rating: 4.5,
    },
  ];

  return (
    <div className="tw-grid tw-grid-cols-2 tw-gap-4 sm:tw-grid-cols-3 lg:tw-grid-cols-4">
      {data.map((item, index) => (
        <div className="tw-flex-shrink-1 tw-flex" key={index}>
          <Card type="grid" {...item} />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
