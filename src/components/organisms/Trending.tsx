import CardList from './CardList';
import { useQuery } from '@tanstack/react-query';
import movieService from '@/services/movie.service';

const Trending = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['trending'],
    queryFn: movieService.getTrending,
    select(data) {
      const items = data.data.results.map((item: IGetTrending) => ({
        id: item.id,
        title: item.title,
        image: `https://www.themoviedb.org/t/p/w1280${item.backdrop_path}`,
        rating: item.vote_average,
      }));

      return items;
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="tw-px-4">
      <div className="tw-text-white-900 tw-py-4 tw-text-base tw-font-bold md:tw-text-lg">
        Trending
      </div>
      <div>
        <CardList data={data} />
      </div>
    </div>
  );
};

export default Trending;
