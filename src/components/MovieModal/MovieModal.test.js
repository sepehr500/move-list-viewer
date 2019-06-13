import React from "react";
import { mount } from "enzyme";
import { MovieModal } from "./MovieModal";

it("renders correctly", () => {
  const tree = mount(
    <MovieModal
      title="Gone with the wind"
      thumbnailPath="/asdf9n.jpg"
      releaseDate="2016-08-04"
      score={4}
      isFavorite
      overview="Some stuff happens"
      onFavorite={jest.fn()}
      onClose={jest.fn()}
      onClick={jest.fn()}
    />
  );
  expect(tree).toMatchSnapshot();
});
