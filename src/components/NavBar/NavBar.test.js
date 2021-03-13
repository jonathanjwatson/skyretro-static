import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import NavBar from "./NavBar";

afterEach(cleanup);

const props = {
  signOut: () => {},
};

describe("Renders the NavBar correctly", () => {
  const history = createMemoryHistory();
  it("renders", () => {
    render(
      <Router history={history}>
        <NavBar {...props} />
      </Router>
    );
  });
  it("matches snapshot", () => {
    const { asFragment } = render(
      <Router history={history}>
        <NavBar {...props} />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
