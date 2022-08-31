import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./pages/Error.js";
import Home from "./pages/Home.js";
import Pages from "./pages/Pages.js";
import Footer from "./Share/Footer/Footer.js";
import Navigation from "./Share/Navigation/Navigation.js";
// import NavigationBar from "./Share/Navigation/NavigationBar.js";

function Router() {
  return (
    <BrowserRouter>
      {/* <NavigationBar/> */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route
            path="pages/heart-surgery
"
            element={<Pages />}
          />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
