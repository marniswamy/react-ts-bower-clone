import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { HomePage } from "./pages/Home/HomePage";
import { SearchPage } from "./pages/Search/SearchPage";

export const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Children />
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
