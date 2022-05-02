import React from "react";
import { render, screen } from "@testing-library/react";
import { SearchPackages } from "./SearchPackages";

test("renders search page with role search-packages", () => {
  render(<SearchPackages />);
  const linkElement = screen.getByTestId("search-packages");
  expect(linkElement).toBeInTheDocument();
});
