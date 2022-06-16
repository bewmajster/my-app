import { Container } from "@mui/material";

import { FadeInTransition } from "./components";
import Router from "./router";

const AppMain = () => (
  <Container>
    <FadeInTransition>
      <Router />
    </FadeInTransition>
  </Container>
);

export default AppMain;
