import "./PackagesList.scss";
import React, { FC } from "react";
import Grid from "@mui/material/Grid";

export const PackagesList = ({ packagesList, loading }: any) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="packages-list">
      <Grid container className="table-header">
        <Grid item xs={8}>
          <h4>Name</h4>
        </Grid>
        <Grid item xs={2}>
          <h4>Owner</h4>
        </Grid>
        <Grid item xs={2}>
          <h4>Stars</h4>
        </Grid>
      </Grid>
      <Grid container>
        {packagesList &&
          packagesList.map((item: any, index: any) => (
            <React.Fragment key={index}>
              <Grid item xs={8}>
                <h4>{item.name}</h4>
              </Grid>
              <Grid item xs={2}>
                <h4>{item.dependent_repos_count}</h4>
              </Grid>
              <Grid item xs={2}>
                <h4>{item.stars}</h4>
              </Grid>
            </React.Fragment>
          ))}
      </Grid>
    </div>
  );
};
