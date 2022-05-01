import "./SearchPackages.scss";
import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { PackagesList } from "../PackagesList/PackagesList";

export const SearchPackages: FC = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getBowerPackages = async () => {
      setLoading(true);
      try {
        const result = await axios(
          `https://libraries.io/api/bower-search?q=${query}`
        );
        setPackages(result.data);
        setLoading(false);
      } catch (error) {
        console.log("Something went wrong ", error);
        setLoading(false);
      }
    };

    getBowerPackages();
  }, [query]);

  return (
    <div className="search-section">
      <input
        type="search"
        placeholder="Search..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <PackagesList packagesList={packages} loading={loading} />
    </div>
  );
};
