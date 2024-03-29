import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Adb as AdbIcon } from "@mui/icons-material";

const Title = () => (
  <>
    <AdbIcon sx={{ mr: 1 }} />

    <Typography
      variant="h6"
      noWrap
      component={Link}
      to="/"
      sx={{
        mr: 2,
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      MY-APP
    </Typography>
  </>
);

export default Title;
