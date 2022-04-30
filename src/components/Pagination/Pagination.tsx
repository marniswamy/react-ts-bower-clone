import "./Pagination.scss";
import React, { FC } from "react";

export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (!pageNumbers.length) {
    return null;
  }

  return (
    <div className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};
