import React, { Component } from "react";
import { MovieListCard } from "../../components/MovieListCard";
import { buildImageUrl } from "../../utils/theMovieDbAPI";
import { discover } from "../../utils/theMovieDbAPI";

class MainPage extends Component {
  state = {
    movies: [],
    loading: true
  };
  componentDidMount() {
    discover.getMovies().then(resp => {
      this.setState({ movies: resp.data.results, loading: false });
    });
  }
  render() {
    if (this.state.loading) {
      return "Loading...";
    }
    return (
      <div className="mw8 flex justify-center flex-wrap center">
        {this.state.movies.map(movie => (
          <MovieListCard
            key={movie.id}
            title={movie.title}
            thumbnailPath={buildImageUrl(movie.poster_path, 200)}
            releaseDate={movie.release_date}
            score={movie.vote_average / 2}
          />
        ))}
      </div>
    );
  }
}

export { MainPage };
