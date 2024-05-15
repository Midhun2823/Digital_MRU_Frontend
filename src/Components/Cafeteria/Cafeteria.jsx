import React from "react";
import CafeteriaNavbar from "../Navbar/CafeteriaNavbar";
import { Outlet, Routes } from "react-router-dom";
// import DisplayCategory from "../../pages/DisplayCategory"

const Cafeteria = () => {
  return (
    <div>
      <CafeteriaNavbar />
      <Outlet/>
    </div>
  );
};

export default Cafeteria;
