import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { AppHeader, AppMain } from "./components";
import { ReadSystemTheme } from "./utils";

const AppLayout = () => (
  <ThemeProvider theme={ReadSystemTheme()}>
    <CssBaseline />

    <BrowserRouter>
      <AppHeader />

      <HelmetProvider>
        <AppMain />
      </HelmetProvider>
    </BrowserRouter>
  </ThemeProvider>
);

export default AppLayout;
