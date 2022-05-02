import React from "react";
import { render, screen } from "@testing-library/react";
import { PackagesList } from "./PackagesList";

test("renders learn react link", () => {
  render(<PackagesList />);
  const linkElement = screen.getByText(/No results found/i);
  expect(linkElement).toBeInTheDocument();
});
