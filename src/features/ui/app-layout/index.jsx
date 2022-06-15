import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CssBaseline } from "@mui/material";
import { AppBar, Toolbar, Container } from "@mui/material";

import Title from "./title";
import Navigation from "./navigation";

const Layout = () => (
  <HelmetProvider>
    <CssBaseline />

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
  </HelmetProvider>
);

export default Layout;
