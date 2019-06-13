import React from "react";
import renderer from "react-test-renderer";
import { MovieListCard } from "./MovieListCard";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <MovieListCard
        key={1}
        title="Gone with the wind"
        thumbnailPath="/asdf9n.jpg"
        releaseDate="2016-08-04"
        score={4}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
