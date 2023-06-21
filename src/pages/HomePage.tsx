import PageTitle from '@/components/atoms/PageTitle';
import NowPlaying from '@/components/organisms/NowPlaying';
import Popular from '@/components/organisms/Popular';
import Trending from '@/components/organisms/Trending';

function HomePage() {
  return (
    <div>
      <PageTitle title="Home" />
      <NowPlaying />
      <Trending />
      <Popular />
    </div>
  );
}

export default HomePage;
