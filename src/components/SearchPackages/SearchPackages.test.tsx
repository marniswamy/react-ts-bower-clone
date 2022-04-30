import React from "react";
import { render, screen } from "@testing-library/react";
import { SearchPackages } from "./SearchPackages";

test("renders learn react link", () => {
  render(<SearchPackages />);
  const linkElement = screen.getByText(/SideBar/);
  expect(linkElement).toBeInTheDocument();
});
