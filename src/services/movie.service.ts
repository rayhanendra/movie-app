import api from './api';

class MovieService {
  getTrending() {
    return api.get('/trending/movie/week?language=en-US');
  }
}

export default new MovieService();
