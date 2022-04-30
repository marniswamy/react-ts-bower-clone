import "./PackageItem.scss";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export const PackageItem = ({ item }: any) => {
  return (
    <div className="package-item">
      <h4>
        <a href={item.repository_url}>{item.name}</a>
      </h4>
      <small>
        <HomeIcon fontSize="small" />
        <a href={item.homepage}>{item.homepage}</a>
      </small>
      <p>{item.description}</p>
    </div>
  );
};
