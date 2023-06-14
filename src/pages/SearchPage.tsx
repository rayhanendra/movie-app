import { useDebounce } from '@/hooks/useDebounce';
import React from 'react';
import CardGrid from '@/components/organisms/CardGrid';
import InputSearch from '@/components/molecules/InputSearch';

function SearchPage() {
  const [search, setSearch] = React.useState<string>('');

  const debouncedSearch = useDebounce(search, 250);

  console.log(debouncedSearch);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <>
      <div className="tw-sticky tw-top-0 tw-z-50 tw-mt-8 tw-border-b tw-border-b-gray-700 tw-bg-[#151821] tw-p-4">
        <form onSubmit={handleOnSubmit}>
          <InputSearch search={search} setSearch={setSearch} />
        </form>
      </div>
      <div className="tw-bg-yellow-400 tw-px-4 tw-py-1  tw-text-sm tw-text-[#151821]">
        Search Results
      </div>
      <div className="tw-p-4">
        <CardGrid />
      </div>
    </>
  );
}

export default SearchPage;
