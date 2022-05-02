import React from "react";
import { render, screen } from "@testing-library/react";
import { PackageItem } from "./PackageItem";
import { mount } from "enzyme";

test("renders javascript text from item description", () => {
  const mockItem = {
    name: "moment",
    repository_url: "https://github.com/moment/moment.git",
    homepage: "momentjs.com",
    description: "Parse, validate, manipulate, and display dates in javascript",
    stars: "123",
  };
  render(<PackageItem item={mockItem} />);
  const linkElement = screen.getByText(/javascript/i);
  expect(linkElement).toBeInTheDocument();
});
