import Card from '@/components/molecules/Card';
import { render, screen } from '@testing-library/react';

describe('Card component', () => {
  it('renders Card component', () => {
    const data = {
      title: 'Avengers',
      image: 'https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
      rating: 9.5,
    };

    render(
      <Card
        name="trending"
        type="list"
        title={data.title}
        image={data.image}
        rating={data.rating}
      />,
    );

    expect(screen.getByText(data.title)).toBeInTheDocument();
    expect(screen.getByAltText(data.title)).toHaveAttribute('src', data.image);
    expect(screen.getByText(data.rating)).toBeInTheDocument();
  });
});
