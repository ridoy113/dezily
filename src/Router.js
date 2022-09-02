import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./components/Pages/Services/Service";
import Error from "./pages/Error.js";
import Home from "./pages/Home.js";
import Pages from "./pages/Pages.js";
import Footer from "./Share/Footer/Footer.js";
import About from "./components/Pages/about/About";
import Navigation from "./Share/Navigation/Navigation.js";


function Router() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route index element={<Home />} />
        <Route path="pages" element={<Pages />}>
          <Route path="about-us" element={<About />} />
          <Route path="services" element={<Service />} />
          <Route path="Team-Details" element={<About />} />
          <Route path="FAQ" element={<About />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
