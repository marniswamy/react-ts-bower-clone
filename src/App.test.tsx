import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders Search Packages text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Search Packages/i);
  expect(linkElement).toBeInTheDocument();
});

test("Should have the header role", () => {
  render(<App />);
  const linkElement = screen.getByTestId(/page-header/i);
  expect(linkElement).toBeInTheDocument();
});
