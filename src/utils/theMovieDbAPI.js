import axios from "axios";
import secrets from "../secrets.json";

const generateBaseURL = (searchMethod, searchCategory) =>
  `https://api.themoviedb.org/3/${searchMethod}/${searchCategory}?&language=en-US&api_key=${secrets.movieApiKey}`;

const discoverMovieBaseURL = generateBaseURL("discover", "movie");

const discover = {
  getMovies: function(releaseYear = 2016, page = 1) {
    return axios.get(
      discoverMovieBaseURL +
        `&sort_by=popularity.desc&page=${page}&primary_release_year=${releaseYear}`
    );
  }
};

const buildImageUrl = (imgHash, width = 185) =>
  `http://image.tmdb.org/t/p/w${width}${imgHash}`;

export { discover, buildImageUrl };
