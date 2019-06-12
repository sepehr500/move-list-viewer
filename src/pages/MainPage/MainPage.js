import { Component } from "react";
import { discover } from "../../utils/theMovieDbAPI";

class MainPage extends Component {
  componentDidMount() {
    discover.getMovies();
  }
  render() {
    return "HELLO";
  }
}

export { MainPage };
