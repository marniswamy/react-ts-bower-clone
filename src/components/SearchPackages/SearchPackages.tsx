import "./SearchPackages.scss";
import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { PackagesList } from "../PackagesList/PackagesList";
import { Pagination } from "../Pagination/Pagination";

export const SearchPackages: FC = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [packagesPerPage] = useState(5);

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

  // Get current packages
  const indexOfLastPackage = currentPage * packagesPerPage;
  const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
  const currrentPackages = packages.slice(
    indexOfFirstPackage,
    indexOfLastPackage
  );

  // Change page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <div className="search-section">
      <input
        type="search"
        placeholder="Search..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <PackagesList packagesList={currrentPackages} loading={loading} />
      <Pagination
        postsPerPage={packagesPerPage}
        totalPosts={packages.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};
