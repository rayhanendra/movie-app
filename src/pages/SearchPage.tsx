import { useDebounce } from '@/hooks/useDebounce';
import React, { useEffect } from 'react';
import InputSearch from '@/components/molecules/InputSearch';
import movieService from '@/services/movie.service';
import { useQuery } from '@tanstack/react-query';
import Pagination from '@/components/molecules/Pagination';
import CardGrid from '@/components/organisms/CardGrid';
import PageTitle from '@/components/atoms/PageTitle';
import useScrollToTop from '@/hooks/useScrollToTop';

function SearchPage() {
  const { search, setSearch, handleOnSubmit } = useSearchHandler();
  const debouncedSearch = useDebounce(search, 250);

  const { activePage, setActivePage } = usePage(debouncedSearch);
  const { data, isLoading } = useSearch(debouncedSearch, activePage);
  const { data: pagination } = usePagination(debouncedSearch, activePage);
  useScrollToTop(activePage);

  return (
    <>
      <div className="tw-p-4">
        <PageTitle title="Search Movies" />
      </div>
      <div className="tw-sticky tw-top-0 tw-z-50  tw-bg-[#151821] tw-p-4">
        <form onSubmit={handleOnSubmit}>
          <InputSearch search={search} setSearch={setSearch} />
        </form>
      </div>
      <div className="md:tw-px-4">
        <div className="tw-bg-yellow-400 tw-px-4 tw-text-xs tw-text-[#151821]">
          Search Results
        </div>
      </div>
      <div className="tw-p-4">
        <CardGrid data={data} isLoading={isLoading} />
      </div>

      <div className="tw-mb-32">
        <Pagination
          activePage={activePage}
          setActivePage={setActivePage}
          pages={pagination?.total_pages || 1}
        />
      </div>
    </>
  );
}

const useSearchHandler = () => {
  const [search, setSearch] = React.useState<string>('');

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(e.currentTarget.search.value);
  };

  return {
    search,
    setSearch,
    handleOnSubmit,
  };
};

const usePage = (debouncedSearch: string) => {
  const [activePage, setActivePage] = React.useState(1);

  useEffect(() => {
    if (debouncedSearch) {
      setActivePage(1);
    }
  }, [debouncedSearch]);

  return {
    activePage,
    setActivePage,
  };
};

// Note: This is a custom hook to implement select partial subsriptions
const useSearchQuery = (
  { debouncedSearch, page }: { debouncedSearch: string; page: number },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  select: (data: any) => any,
) =>
  useQuery({
    queryKey: ['search', debouncedSearch, page],
    queryFn: async () => {
      return await movieService.getSearch(debouncedSearch, page);
    },
    select,
  });

// Note: Hook for search and return search results
export const useSearch = (debouncedSearch: string, page: number) =>
  useSearchQuery({ debouncedSearch, page }, (data) => {
    const items = data.data.results.map((item: IMovieItem) => ({
      id: item.id,
      title: item.title,
      image: `https://www.themoviedb.org/t/p/w1280${item.backdrop_path}`,
      rating: item.vote_average,
    }));

    return items;
  });

// Note: Hook for search and return pagination
const usePagination = (debouncedSearch: string, page: number) =>
  useSearchQuery({ debouncedSearch, page }, (data) => {
    const { page, total_pages, total_results } = data.data || {};
    return {
      page: page || 1,
      total_pages: total_pages || 1,
      total_results: total_results || 0,
    };
  });

export default SearchPage;
