import "./PackageItem.scss";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import { getOwnerNameHelper } from "../../helpers/getOwnerNameHelper";

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
      <Box
        mt={1}
        sx={{
          display: { xs: "block", sm: "none", md: "none", lg: "none" },
        }}
      >
        <span>Owner: {getOwnerNameHelper(item.repository_url)}</span>{" "}
        <span>Stars: {item.stars}</span>
      </Box>
    </div>
  );
};
