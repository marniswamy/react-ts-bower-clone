import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

test("renders Bower Search in header", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Bower Search/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders the link with Docs", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Docs/i);
  expect(linkElement).toBeInTheDocument();
});

test("rrenders the link with Search Packages", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Search Packages/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders the link with Blogs", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Blogs/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders the link with Stats", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Stats/i);
  expect(linkElement).toBeInTheDocument();
});
