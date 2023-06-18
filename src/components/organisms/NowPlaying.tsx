import movieService from '@/services/movie.service';
import { useQuery } from '@tanstack/react-query';
import { Loader } from 'lucide-react';
import CardTrailer from '../molecules/CardTrailer';

function NowPlaying() {
  const { isLoading, data } = useNowPlayingQuery();

  const List = () => {
    return (
      <div
        data-testid={`${name}s-wrapper`}
        className="no-scrollbar tw-flex tw-items-center tw-space-x-4 tw-overflow-x-auto tw-pb-4"
      >
        {data.map((item: IMovieItem, index: string) => (
          <CardTrailer
            key={index}
            id={item.id}
            title={item.title}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </div>
    );
  };

  if (isLoading)
    return (
      <div data-testid="trending-loading">
        <Loader />
      </div>
    );

  return (
    <div className="tw-px-4">
      <div className="tw-text-white-900 tw-py-4 tw-text-base tw-font-bold md:tw-text-lg">
        Now Playing
      </div>
      <List />
    </div>
  );
}

export default NowPlaying;

export const useNowPlayingQuery = () =>
  useQuery({
    queryKey: ['now-playing'],
    queryFn: movieService.getNowPlaying,
    select(data) {
      const items = data.data.results.map((item: IApiMovieItem) => ({
        id: item.id,
        title: item.title,
        image: `https://www.themoviedb.org/t/p/w1280${item.backdrop_path}`,
        rating: item.vote_average,
      }));

      return items;
    },
    keepPreviousData: true,
  });
