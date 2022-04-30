import "./SearchPackages.scss";
import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";

export const SearchPackages: FC = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getBowerPackages = async () => {
      try {
        const result = await axios(
          `https://libraries.io/api/bower-search?q=${query}`
        );
        setData(result.data);
      } catch (error) {
        console.log("Something went wrong ", error);
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
      <div>
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
      </div>
      <Grid container>
        {data &&
          data.map((item: any, index) => (
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
