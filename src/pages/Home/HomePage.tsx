import { FC } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { SideBar } from "../../components/SideBar/SideBar";

export const HomePage: FC = () => {
  return (
    <Container maxWidth="lg" className="search-container">
      <Box
        sx={{
          display: { xs: "none", md: "block", width: "15vw" },
        }}
      >
        <SideBar />
      </Box>
      <Box
        mt={2}
        sx={{
          display: { xs: "block", md: "block", width: "75vw" },
        }}
      >
        Welcome to Bower Search Home Page
      </Box>
    </Container>
  );
};
