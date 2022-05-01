import "./SearchPackages.scss";
import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { PackagesList } from "../PackagesList/PackagesList";
import { sortDataBySortType } from "../../helpers/helpers";
import { SORTING_VALUES } from "../../constants/SORTING_VALUES";

export const SearchPackages: FC = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [sortType, setSortType] = useState(SORTING_VALUES.ASCENDING);

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

  const sortByStartsHandler = () => {
    if (sortType === SORTING_VALUES.ASCENDING) {
      setSortType(SORTING_VALUES.DESCENDING);
    } else {
      setSortType(SORTING_VALUES.ASCENDING);
    }
  };

  return (
    <div className="search-section">
      <input
        type="search"
        placeholder="Search..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <PackagesList
        packagesList={sortDataBySortType(packages, sortType)}
        loading={loading}
        sortByStartsHandler={sortByStartsHandler}
      />
    </div>
  );
};
