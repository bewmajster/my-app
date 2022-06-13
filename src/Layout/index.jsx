import { Outlet } from "react-router-dom";
import { AppBar, Toolbar, Container } from "@mui/material";

import AppTitle from "./AppTitle";
import AppMenu from "./AppMenu";

const Layout = () => (
  <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AppTitle />
          <AppMenu />
        </Toolbar>
      </Container>
    </AppBar>

    <Container maxWidth="xl">
      <Outlet />
    </Container>
  </>
);

export default Layout;
