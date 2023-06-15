import api from './api';

class MovieService {
  getTrending() {
    return api.get('/trending/movie/week?language=en-US');
  }

  getSearch(query: string, page: number) {
    return api.get(`/search/movie?query=${query}&language=en-US&page=${page}`);
  }

  getDetail(id: string | undefined) {
    return api.get(`/movie/${id}?language=en-US`);
  }
}

export default new MovieService();
