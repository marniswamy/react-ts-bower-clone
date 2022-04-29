import React from "react";
import { render, screen } from "@testing-library/react";
import { SearchPage } from "./SearchPage";

test("renders learn react link", () => {
  render(<SearchPage />);
  const linkElement = screen.getByText(/SearchPage/);
  expect(linkElement).toBeInTheDocument();
});
