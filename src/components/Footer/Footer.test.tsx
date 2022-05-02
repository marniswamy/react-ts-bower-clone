import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

test("renders Footer text", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Footer/);
  expect(linkElement).toBeInTheDocument();
});

test("Should have the footer role", () => {
  render(<Footer />);
  const linkElement = screen.getByRole(/footer/i);
  expect(linkElement).toBeInTheDocument();
});
