import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./components/Pages/About.js";

import Error from "./pages/Error.js";
import Home from "./pages/Home.js";
import Pages from "./pages/Pages.js";
import Footer from "./Share/Footer/Footer.js";

import Navigation from "./Share/Navigation/Navigation.js";


function Router() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="pages" element={<Pages />}>
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
