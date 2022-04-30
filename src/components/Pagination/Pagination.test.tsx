import React from "react";
import { render, screen } from "@testing-library/react";
import { Pagination } from "./Pagination";

test("renders learn react link", () => {
  render(<Pagination />);
  const linkElement = screen.getByText(/Footer/);
  expect(linkElement).toBeInTheDocument();
});
