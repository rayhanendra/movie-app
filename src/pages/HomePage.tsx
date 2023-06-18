import PageTitle from '@/components/atoms/PageTitle';
import NowPlaying from '@/components/organisms/NowPlaying';
import Trending from '@/components/organisms/Trending';

function HomePage() {
  return (
    <div>
      <PageTitle title="Home" />
      <NowPlaying />
      <Trending />
    </div>
  );
}

export default HomePage;
