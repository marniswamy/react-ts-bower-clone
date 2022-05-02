import "./Header.scss";
import React, { FC } from "react";
import Container from "@mui/material/Container";

export const Header: FC = () => {
  return (
    <header data-testid="page-header">
      <Container maxWidth="lg" disableGutters={true}>
        <div className="container">
          <ul className="nav">
            <li className="docs">
              <a href="/">Docs</a>
            </li>
            <li>
              <a href="/search">Search Packages</a>
            </li>
            <li>
              <a href="/">Blogs</a>
            </li>
            <li>
              <a href="/">Stats</a>
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
              <a href="https://libraries.io/">&nbsp;Libraries.io</a>
            </sub>
          </div>
        </div>
      </Container>
    </header>
  );
};
