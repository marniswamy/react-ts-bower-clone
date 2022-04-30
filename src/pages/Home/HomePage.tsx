import React, { FC } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { SideBar } from "../../components/SideBar/SideBar";

export const HomePage: FC = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <SideBar />
        </Grid>
        <Grid item xs={10}>
          <h2>Search Section</h2>
        </Grid>
      </Grid>
    </Container>
  );
};
