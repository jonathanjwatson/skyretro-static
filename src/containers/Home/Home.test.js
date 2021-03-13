import React from "react";
import { Router } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "./Home";
import { createMemoryHistory } from "history";

afterEach(cleanup);

describe("Renders each Home correctly", () => {
  const history = createMemoryHistory();

  it("renders", () => {
    render(
      <Router history={history}>
        <Home />
      </Router>
    );
  });
  it("matches snapshot", () => {
    const { asFragment } = render(
      <Router history={history}>
        <Home />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
