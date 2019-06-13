import React from "react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "@testing-library/react";
import renderer from "react-test-renderer";
import { MainPage } from "./index";
import fakeResponse from "./fakeResponse.json";

const mock = new MockAdapter(axios);

// When there is more then one request make this onGet more specific
mock.onGet().reply(200, fakeResponse);

const waitForMovieList = getByTestIdFn =>
  waitForElement(() => getByTestIdFn("movie-list"));

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

describe("view details flow", () => {
  beforeEach(() => {
    cleanup();
  });
  it("shows details when details button is clicked", async () => {
    const { getByText, getAllByText, getByTestId } = render(<MainPage />);
    await waitForMovieList(getByTestId);
    fireEvent.click(getAllByText("details")[0]);
    expect(getByText("close")).toBeTruthy();
    expect(getByText("Add to favorites")).toBeTruthy();
  });

  it("closes modal when close is clicked", async () => {
    const { getByText, getAllByText, queryByTestId, getByTestId } = render(
      <MainPage />
    );
    await waitForMovieList(getByTestId);
    fireEvent.click(getAllByText("details")[0]);
    expect(getByText("close")).toBeTruthy();
    fireEvent.click(getByText("close"));
    expect(queryByTestId("close-button")).toBeFalsy();
  });

  it("marks favorite when Add to favorites is clicked", async () => {
    const { getByText, getAllByText, getByTestId } = render(<MainPage />);
    await waitForMovieList(getByTestId);
    fireEvent.click(getAllByText("details")[0]);

    expect(getByText("Add to favorites")).toBeTruthy();
    fireEvent.click(getByText("Add to favorites"));

    expect(getByText("Unfavorite")).toBeTruthy();
    // Not ideal. But no way of knowing that the star is gold without checking the class
    expect(Object.values(getByTestId("star").classList)).toContain("gold");
  });

  it("unfavorites when Unfavorite is clicked", async () => {
    const { getByText, getAllByText, getByTestId } = render(<MainPage />);
    await waitForMovieList(getByTestId);
    fireEvent.click(getAllByText("details")[0]);

    expect(getByText("Add to favorites")).toBeTruthy();
    fireEvent.click(getByText("Add to favorites"));

    expect(getByText("Unfavorite")).toBeTruthy();
    expect(Object.values(getByTestId("star").classList)).toContain("gold");

    fireEvent.click(getByText("Unfavorite"));
    expect(Object.values(getByTestId("star").classList)).toContain("gray");
  });
});
