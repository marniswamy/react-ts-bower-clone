import "./PackagesList.scss";
import React, { FC, useState } from "react";
import Grid from "@mui/material/Grid";
import { PackageItem } from "../PackageItem/PackageItem";
import { getOwnerNameHelper } from "../../helpers/helpers";
import { Pagination } from "../Pagination/Pagination";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

export const PackagesList = ({
  packagesList = [],
  loading,
  sortByStartsHandler,
}: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [packagesPerPage] = useState(5);

  // Get current packages
  const indexOfLastPackage = currentPage * packagesPerPage;
  const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
  const currrentPackages = packagesList.slice(
    indexOfFirstPackage,
    indexOfLastPackage
  );

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  if (loading) {
    return <h2>Fetching Packages...</h2>;
  }

  if (!packagesList.length) {
    return <h2>No results found</h2>;
  }

  return (
    <div className="packages-list">
      <Grid container className="table-header">
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <h4>Name</h4>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: { xs: "none", sm: "block", md: "block", lg: "block" },
          }}
        >
          <h4>Owner</h4>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: { xs: "none", sm: "block", md: "block", lg: "block" },
          }}
        >
          <h4 className="stars" onClick={() => sortByStartsHandler()}>
            Stars <CompareArrowsIcon fontSize="small" />
          </h4>
        </Grid>
      </Grid>
      <Grid container>
        {currrentPackages.map((item: any, index: any) => (
          <React.Fragment key={index}>
            <Grid item xs={12} sm={8} md={8} lg={8}>
              <PackageItem item={item} />
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: { xs: "none", sm: "block", md: "block", lg: "block" },
              }}
            >
              <p>{getOwnerNameHelper(item.repository_url)}</p>
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: { xs: "none", sm: "block", md: "block", lg: "block" },
              }}
            >
              <p>{item.stars}</p>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>

      <Pagination
        postsPerPage={packagesPerPage}
        totalPosts={packagesList.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};
