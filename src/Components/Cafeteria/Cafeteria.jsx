import React, { useEffect } from "react";
import CafeteriaNavbar from "../Navbar/CafeteriaNavbar";
import { Outlet, Routes, useNavigate } from "react-router-dom";
// import DisplayCategory from "../../pages/DisplayCategory"

const Cafeteria = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/cafeteria");
  }, []);
  return (
    <div>
      <CafeteriaNavbar />
      <Outlet />
    </div>
  );
};

export default Cafeteria;
