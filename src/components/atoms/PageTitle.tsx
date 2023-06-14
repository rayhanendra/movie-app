import { HomeIcon, SearchIcon } from 'lucide-react';

type Props = {
  title: 'Home' | 'Search Movies';
};

const PageTitle: React.FC<Props> = ({ title }: Props) => {
  const pages = [
    {
      title: 'Home',
      icon: <HomeIcon />,
      href: '/',
    },
    {
      title: 'Search Movies',
      icon: <SearchIcon />,
      href: '/search',
    },
  ];

  return (
    <div className="tw-flex tw-items-center tw-gap-4 tw-rounded-lg tw-bg-gray-500 tw-bg-opacity-10 tw-p-4 tw-py-4 tw-backdrop-blur-lg tw-backdrop-filter ">
      <div className="tw-text-white-900tw-text-lg tw-font-bold md:tw-text-lg">
        {title}
      </div>
      {pages.find((page) => page.title === title)?.icon}
    </div>
  );
};

export default PageTitle;
