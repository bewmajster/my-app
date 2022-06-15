import { Routes, Route } from "react-router-dom";

import Home from "@pages/home";
import About from "@pages/about";

const Router = () => (
  <Routes>
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  </Routes>
);

export default Router;
