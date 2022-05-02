import React from "react";
import { render, screen } from "@testing-library/react";
import { SideBar } from "./SideBar";
import { BrowserRouter } from "react-router-dom";

test("renders renders list of li with text Home", () => {
  render(
    <BrowserRouter>
      <SideBar />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Home/);
  expect(linkElement).toBeInTheDocument();
});
