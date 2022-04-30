import "./SideBar.scss";
import React, { FC } from "react";
import { Link } from "react-router-dom";

export const SideBar: FC = () => {
  return (
    <div className="side-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Creating Packages</Link>
        </li>
        <li>
          <Link to="/">API</Link>
        </li>
        <li>
          <Link to="/">Configuration</Link>
        </li>
        <li>
          <Link to="/">Tools</Link>
        </li>
      </ul>
    </div>
  );
};
