import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { SearchPage } from "./pages/Search/SearchPage";

export const App: FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
};
