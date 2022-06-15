import { Outlet } from "react-router-dom";
import { AppBar, Toolbar, Container } from "@mui/material";

import Title from "./title";
import Navigation from "./navigation";

const Layout = () => (
  <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Title />
          <Navigation />
        </Toolbar>
      </Container>
    </AppBar>

    <Container maxWidth="xl">
      <Outlet />
    </Container>
  </>
);

export default Layout;
