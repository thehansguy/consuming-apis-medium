import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import Home from "./Home";
import User from "./User";

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
