import "./Header.scss";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export const Header: FC = () => {
  return (
    <header>
      <Container maxWidth="lg" disableGutters={true}>
        <div className="container">
          <ul className="nav">
            <li className="docs">
              <Link to="/">Docs</Link>
            </li>
            <li>
              <Link to="/search">Search Packages</Link>
            </li>
            <li>
              <Link to="/">Blogs</Link>
            </li>
            <li>
              <Link to="/">Stats</Link>
            </li>
          </ul>
          <div className="title-section">
            <a href="/">
              <img
                className="logo"
                src="https://bower.io/img/bower-logo.svg"
                alt="Bower logo"
              />
            </a>
            <h1 className="page-title">Bower Search</h1>
            <sub>
              Powered by
              <Link to="https://libraries.io/">&nbsp;Libraries.io</Link>
            </sub>
          </div>
        </div>
      </Container>
    </header>
  );
};
