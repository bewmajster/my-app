import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

const AppMenu = () => (
  <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
    <Button
      component={Link}
      key="home"
      to="/"
      sx={{ my: 2, color: "white", display: "block" }}
    >
      Home
    </Button>

    <Button
      component={Link}
      key="about"
      to="/about"
      sx={{ my: 2, color: "white", display: "block" }}
    >
      About
    </Button>
  </Box>
);

export default AppMenu;
