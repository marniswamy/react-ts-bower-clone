import "./SearchPage.scss";
import React, { FC, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { SideBar } from "../../components/SideBar/SideBar";
import { SearchPackages } from "../../components/SearchPackages/SearchPackages";
import { Box } from "@mui/material";

export const SearchPage: FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggelMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <React.Fragment>
      <Box
        className="menu-button"
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
        }}
        onClick={() => toggelMenuHandler()}
      >
        Menu
      </Box>
      <Container maxWidth="lg" className="search-container">
        <Grid container rowSpacing={1}>
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            lg={2}
            sx={{
              display: {
                xs: showMenu ? "block" : "none",
                sm: "none",
                md: "block",
              },
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
    </React.Fragment>
  );
};
