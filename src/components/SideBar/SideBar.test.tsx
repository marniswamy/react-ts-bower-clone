import React from "react";
import { render, screen } from "@testing-library/react";
import { SideBar } from "./SideBar";

test("renders learn react link", () => {
  render(<SideBar />);
  const linkElement = screen.getByText(/SideBar/);
  expect(linkElement).toBeInTheDocument();
});
