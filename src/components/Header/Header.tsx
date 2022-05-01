import "./Header.scss";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export const Header: FC = () => {
  return (
    <header>
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={2}>
            <div className="image-wrapper">
              <img
                className="logo"
                src="https://bower.io/img/bower-logo.svg"
                alt="logo"
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <h1 className="title">Bower Home</h1>
            <sub>
              Powered by
              <Link to="https://libraries.io/">&nbsp;Libraries.io</Link>
            </sub>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Container>
    </header>
  );
};
