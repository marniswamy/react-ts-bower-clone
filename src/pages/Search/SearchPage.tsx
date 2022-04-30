import React, { FC } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { SideBar } from "../../components/SideBar/SideBar";
import { SearchPackages } from "../../components/SearchPackages/SearchPackages";

export const SearchPage: FC = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <SideBar />
        </Grid>
        <Grid item xs={10}>
          <SearchPackages />
        </Grid>
      </Grid>
    </Container>
  );
};
