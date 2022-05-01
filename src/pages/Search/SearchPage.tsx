import React, { FC } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { SideBar } from "../../components/SideBar/SideBar";
import { SearchPackages } from "../../components/SearchPackages/SearchPackages";

export const SearchPage: FC = () => {
  return (
    <Container maxWidth="lg" className="home-container">
      <Box
        sx={{
          display: { xs: "none", md: "block", width: "15vw" },
        }}
      >
        <SideBar />
      </Box>
      <Box
        sx={{
          display: { xs: "block", md: "block", width: "75vw" },
        }}
      >
        <SearchPackages />
      </Box>
    </Container>
  );
};
