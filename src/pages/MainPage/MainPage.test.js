import React from "react";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "@testing-library/react";
import { mount } from "enzyme";
import { MainPage } from "./index";
import fakeResponse from "./fakeResponse.json";

const mock = new MockAdapter(axios);

// When there is more then one request make this onGet more specific

const waitForMovieList = getByTestIdFn =>
  waitForElement(() => getByTestIdFn("movie-list"));

// Bit of a hack to wait for the microqueue to empty out
function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

describe("renders", () => {
  beforeEach(() => {
    mock.reset();
    cleanup();
    mock.onGet().reply(200, fakeResponse);
  });

  it("renders loading correctly", async () => {
    const { getByText } = render(<MainPage />);
    expect(getByText("Loading...")).toBeTruthy();
  });

  it("renders error correctly", async () => {
    mock.onGet().reply(404, {});
    const { getByTestId } = render(<MainPage />);
    await waitForElement(() => getByTestId("sorry"));
    expect(getByTestId("sorry")).toBeTruthy();
  });

  it("renders data correctly", async () => {
    const tree = mount(<MainPage />);
    await flushPromises();
    tree.update();
    expect(tree).toMatchSnapshot();
  });

  it("renders correct number of cards", async () => {
    const { getByTestId } = render(<MainPage />);
    await waitForMovieList(getByTestId);
    expect(getByTestId("movie-list").children.length).toBe(20);
  });
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

  it("marks favorite when star is clicked", async () => {
    const { getAllByText, getByTestId } = render(<MainPage />);
    await waitForMovieList(getByTestId);
    fireEvent.click(getAllByText("details")[0]);

    fireEvent.click(getByTestId("star-button"));

    // Not ideal. But no way of knowing that the star is gold without checking the class
    expect(Object.values(getByTestId("star").classList)).toContain("gold");
  });

  it("unfavorites when star is clicked twice", async () => {
    const { getAllByText, getByTestId } = render(<MainPage />);
    await waitForMovieList(getByTestId);
    fireEvent.click(getAllByText("details")[0]);
    fireEvent.click(getByTestId("star-button"));

    expect(Object.values(getByTestId("star").classList)).toContain("gold");

    fireEvent.click(getByTestId("star-button"));
    expect(Object.values(getByTestId("star").classList)).toContain("gray");
  });
});
