import React, { useEffect } from "react";
import { Outlet, Routes, useNavigate } from "react-router-dom";
import StationeryNavbar from "../Navbar/StationeryNavbar";

const Stationary = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/stationary");
  }, []);
  return (
    <div>
      <StationeryNavbar />
      <Outlet />
    </div>
  );
};
// Books - Long Books, Short Books, Medium Books
// Writing_Materials - Pens, Pencils, Color_Materials
// Records - R20, R22, R23 
// Sheets - A4 Size, A Charts
// Paper_Goods - Letter Paper, Envelopes, Greeting Cards
// Items - Files, Clips, Staples, Staplers, Desk Accessories, Scissors, Glue, Fevicol, Fevistick, Tapes, Packs And Pouches, Calculators, Erasers, Sharpners
// Printouts - upcoming


// Books - white long book, white short book, 4 ruled book long, 2 ruled book long, 4 ruled book short, 2 ruled book short
// Writing_Materials - pens(blue, black, red, green), pencils, erasers, Highlighters(colors), Ball point pens(Blue & Black & Red), Sketches, Glitters, Paints, Posture paints, crayons
// Records - Python Record(R23), Java Record(R23), Python Record(R20), Java record(R20)  
// Sheets - A4 Sheets, A Charts, Color Sheets(colors)
// Paper_Goods - Letter Paper, Envelopes, Greeting Cards, Invitations
// Items - File Folders, Paper Clips, Staples, Staplers, Desk Accessories, Scissors, Glue, Fevicol, Fevistick, Tapes, Packs And Pouches, Calculators, Erasers, Sharpners
// Printouts - upcoming

export default Stationary;
