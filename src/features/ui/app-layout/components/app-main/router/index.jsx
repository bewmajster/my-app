import { Routes, Route } from "react-router-dom";

import Home from "@pages/home";
import About from "@pages/about";

const Router = (props) => (
  <Routes location={props.location}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
  </Routes>
);

export default Router;
