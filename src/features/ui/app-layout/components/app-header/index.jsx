import { AppBar, Toolbar, Container } from "@mui/material";

import { Title, Navigation } from "./components";

const AppHeader = () => (
  <AppBar position="static">
    <Container>
      <Toolbar disableGutters>
        <Title />
        <Navigation />
      </Toolbar>
    </Container>
  </AppBar>
);

export default AppHeader;
