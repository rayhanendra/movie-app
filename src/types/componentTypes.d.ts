interface ITrending {
  id: number;
  title: string;
  image: string;
  rating: number;
}

interface IMovieItem {
  id: string;
  title: string;
  image: string;
  rating: number;
}

interface IMovieDetail {
  title: string;
  overview: string;
  image: string;
  releaseDate: string;
  rating: number;
}

interface IVideo {
  id: string;
  name: string;
  type: string;
  site: string;
  key: string;
}
