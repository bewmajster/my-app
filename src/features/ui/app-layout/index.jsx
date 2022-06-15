import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, AppBar, Toolbar, Container } from "@mui/material";

import { Title, Navigation } from "./components";
import Router from "./router";

const AppLayout = () => (
  <HelmetProvider>
    <CssBaseline />

    <BrowserRouter>
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <Title />
            <Navigation />
          </Toolbar>
        </Container>
      </AppBar>

      <Container>
        <Router />
      </Container>
    </BrowserRouter>
  </HelmetProvider>
);

export default AppLayout;
