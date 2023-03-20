import axios from 'axios';
import {makeAutoObservable, runInAction} from 'mobx';

class MovieStore {
  movieList: any = [];
  constructor() {
    makeAutoObservable(this);
  }

  async getMovieList() {
    const response = await axios.get(
      'https://imdb-top-100-movies.p.rapidapi.com/',
      {
        headers: {
          'X-RapidAPI-Key':
            'API_KEY',
          'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
        },
      },
    );
    // Wrap all changes with runInAction
    runInAction(() => {
      this.movieList = response.data;
    });
  }
}

export const movieStore = new MovieStore();
