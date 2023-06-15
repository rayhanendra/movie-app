import CardList from './CardList';
import { useQuery } from '@tanstack/react-query';
import movieService from '@/services/movie.service';

const Trending = () => {
  const { isLoading, data } = useTrendingQuery();

  if (isLoading) return <div data-testid="trending-loading">Loading...</div>;

  return (
    <div className="tw-px-4">
      <div className="tw-text-white-900 tw-py-4 tw-text-base tw-font-bold md:tw-text-lg">
        Trending
      </div>
      <div>
        <CardList name="trending" data={data} />
      </div>
    </div>
  );
};

export const useTrendingQuery = () =>
  useQuery({
    queryKey: ['trending'],
    queryFn: movieService.getTrending,
    select(data) {
      const items = data.data.results.map((item: IMovieItem) => ({
        id: item.id,
        title: item.title,
        image: `https://www.themoviedb.org/t/p/w1280${item.backdrop_path}`,
        rating: item.vote_average,
      }));

      return items;
    },
    keepPreviousData: true,
  });

export default Trending;
