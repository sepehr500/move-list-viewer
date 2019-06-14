import React, { Component } from "react";
import { MovieListCard } from "../../components/MovieListCard";
import { buildImageUrl } from "../../utils/theMovieDbAPI";
import { discover } from "../../utils/theMovieDbAPI";
import { MovieModal } from "../../components/MovieModal";

class MainPage extends Component {
  state = {
    movies: [],
    loading: true,
    activeMovieId: null
  };

  componentDidMount() {
    discover.getMovies().then(resp => {
      this.setState({ movies: resp.data.results, loading: false });
    });
  }

  handleDetailsClick = id => {
    this.setState({ activeMovieId: id });
  };

  handleDetailsCloseClick = () => {
    this.setState({ activeMovieId: null });
  };

  handleDetailsFavoriteClick = id => {
    const modifiedMovies = this.state.movies.map(movie => {
      if (movie.id === id) {
        return Object.assign(movie, { isFavorite: !movie.isFavorite });
      }
      return movie;
    });
    this.setState({ movies: modifiedMovies });
  };

  createMovieModal = () => {
    if (!this.state.activeMovieId) {
      return null;
    }
    const movie = this.state.movies.find(
      movie => movie.id === this.state.activeMovieId
    );
    return (
      <MovieModal
        title={movie.title}
        thumbnailPath={buildImageUrl(movie.poster_path, 300)}
        releaseDate={movie.release_date}
        score={movie.vote_average / 2}
        isFavorite={!!movie.isFavorite}
        overview={movie.overview}
        onFavorite={() => this.handleDetailsFavoriteClick(movie.id)}
        onClose={this.handleDetailsCloseClick}
        onClick={() => this.handleDetailsClick(movie.id)}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div
        data-testid="movie-list"
        className="mw8 flex justify-center flex-wrap center"
      >
        {this.createMovieModal()}
        {this.state.movies.map((movie, index) => (
          <MovieListCard
            key={movie.id}
            title={`${index + 1}. ${movie.title}`}
            thumbnailPath={buildImageUrl(movie.poster_path, 200)}
            releaseDate={movie.release_date}
            score={movie.vote_average / 2}
            onClick={() => this.handleDetailsClick(movie.id)}
          />
        ))}
      </div>
    );
  }
}

export { MainPage };
