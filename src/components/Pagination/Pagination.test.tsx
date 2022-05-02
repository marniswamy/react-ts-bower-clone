import React from "react";
import { render, screen } from "@testing-library/react";
import { Pagination } from "./Pagination";

test("renders the element with test id pagination", () => {
  const mockProps = {
    postsPerPage: 5,
    totalPosts: 29,
    paginate: () => null,
    currentPage: 2,
  };
  render(<Pagination {...mockProps} />);
  const linkElement = screen.getByTestId("pagination");
  expect(linkElement).toBeInTheDocument();
});
