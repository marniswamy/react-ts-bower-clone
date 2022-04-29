import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/Home/HomePage";
import { SearchPage } from "./pages/Search/SearchPage";

export const App: FC = () => {
  return (
    <Router>
      <Header />
      <Children />
      <Footer />
    </Router>
  );
};

const Children = () => {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="search" element={<SearchPage />} />
    </Routes>
  );
};
