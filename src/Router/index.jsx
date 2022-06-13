import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/Layout";
import Home from "@/Views/Home";
import About from "@/Views/About";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
