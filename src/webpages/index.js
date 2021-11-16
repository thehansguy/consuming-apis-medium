import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import Home from "./home";
import User from "./user";

const Webpages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Webpages;
