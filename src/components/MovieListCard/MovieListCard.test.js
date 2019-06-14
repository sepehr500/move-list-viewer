import React from "react";
import { mount } from "enzyme";
import { MovieListCard } from "./MovieListCard";

it("renders correctly", () => {
  const tree = mount(
    <MovieListCard
      key={1}
      title="Gone with the wind"
      thumbnailPath="/asdf9n.jpg"
      releaseDate="2016-08-04"
      score={4}
      onClick={jest.fn()}
    />
  );
  expect(tree).toMatchSnapshot();
});
