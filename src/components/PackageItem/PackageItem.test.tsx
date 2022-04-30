import React from "react";
import { render, screen } from "@testing-library/react";
import { PackageItem } from "./PackageItem";

test("renders learn react link", () => {
  render(<PackageItem />);
  const linkElement = screen.getByText(/SideBar/);
  expect(linkElement).toBeInTheDocument();
});
