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
            'dbe6633289msha15abe1b8ac40f4p1be274jsndcf6ce00d975',
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
