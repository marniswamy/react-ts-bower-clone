import React, { FC } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { SideBar } from "../../components/SideBar/SideBar";
import { SearchPackages } from "../../components/SearchPackages/SearchPackages";

export const SearchPage: FC = () => {
  return (
    <Container maxWidth="lg" className="search-container">
      <Grid container rowSpacing={1}>
        <Grid
          item
          xs={0}
          sm={0}
          md={2}
          lg={2}
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <SideBar />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10}
          lg={10}
          sx={{
            display: { xs: "block", sm: "block", md: "block" },
          }}
        >
          <SearchPackages />
        </Grid>
      </Grid>
    </Container>
  );
};
