import React from "react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { render, waitForElement } from "@testing-library/react";
import renderer from "react-test-renderer";
import { MainPage } from "./index";
import fakeResponse from "./fakeResponse.json";

const mock = new MockAdapter(axios);

// When there is more then one request make this onGet more specific
mock.onGet().reply(200, fakeResponse);

// Bit of a hack to wait for the microqueue to empty out
function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

it("renders loading correctly", async () => {
  const { getByText } = render(<MainPage />);
  expect(getByText("Loading...")).toBeTruthy();
});

it("renders data correctly", async () => {
  const tree = renderer.create(<MainPage />);
  await flushPromises();
  expect(tree.toJSON()).toMatchSnapshot();
});

it("renders correct number of cards", async () => {
  const { getByTestId } = render(<MainPage />);
  expect(getByTestId("movie-list").children.length).toBe(20);
});
