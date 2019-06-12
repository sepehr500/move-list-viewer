import axios from "axios";
import secrets from "../secrets.json";

const generateBaseURL = (searchMethod, searchCategory) =>
  `https://api.themoviedb.org/3/${searchMethod}/${searchCategory}?api_key=${secrets.movieApiKey}`;

const discoverBaseURL = generateBaseURL("discover", "movie");

const discover = {
  getMovies: function(releaseYear = 2016, page = 1) {
    return axios.get(
      discoverBaseURL +
        `&sort_by=popularity.desc&page=${page}&primary_release_year=${releaseYear}`
    );
  }
};

export { discover };
