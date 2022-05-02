import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { HomePage } from "./HomePage";

test("renders the text HomePage", () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Welcome to Bower Search Home Page/i);
  expect(linkElement).toBeInTheDocument();
});
