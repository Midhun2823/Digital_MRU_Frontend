import React, { useState } from "react";
import { Link } from "react-router-dom";
import Right_Arrow from "../../assets/Right_Arrow.png";
import "./CafeteriaNavbar.css";

const CafeteriaNavbar = () => {
  const [stall, setstall] = useState("");
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div onClick={() => setstall("")}>
            <Link
              to="/cafeteria/"
              className={
                stall === ""
                  ? "nav-link text-danger fw-bold fs-4 mx-2 line stall-border"
                  : "nav-link text-danger fw-bold fs-4 mx-2 line"
              }
            >
              Select Stall
            </Link>
          </div>
          <img src={Right_Arrow} alt="-->" width="32" className="mx-3" />
          <button
            className="navbar-toggler mt-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className="nav-item mt-2"
                onClick={() => setstall("continentalcoffee")}
              >
                <Link
                  to="/cafeteria/continentalcoffee"
                  className={
                    stall === "continentalcoffee"
                      ? "nav-link line manualborder"
                      : "nav-link line"
                  }
                >
                  Continental Coffee
                </Link>
              </li>
              <li className="nav-item  mt-2" onClick={() => setstall("sips")}>
                <Link
                  to="/cafeteria/sips"
                  className={
                    stall === "sips"
                      ? "nav-link line manualborder"
                      : "nav-link line"
                  }
                >
                  Sips
                </Link>
              </li>
              <li className="nav-item  mt-2" onClick={() => setstall("burgerking")}>
                <Link
                  to="/cafeteria/burgerking"
                  className={
                    stall === "burgerking"
                      ? "nav-link line manualborder"
                      : "nav-link line"
                  }
                >
                  Burger King
                </Link>
              </li>
              <li className="nav-item  mt-2" onClick={() => setstall("hakkawok")}>
                <Link
                  to="/cafeteria/hakkawok"
                  className={
                    stall === "hakkawok"
                      ? "nav-link line manualborder"
                      : "nav-link line"
                  }
                >
                  Hakka wok
                </Link>
              </li>
              <li className="nav-item  mt-2" onClick={() => setstall("fivestar")}>
                <Link
                  to="/cafeteria/fivestar"
                  className={
                    stall === "fivestar"
                      ? "nav-link line manualborder"
                      : "nav-link line"
                  }
                >
                  Five Star
                </Link>
              </li>
              <li className="nav-item  mt-2" onClick={() => setstall("teawonders")}>
                <Link
                  to="/cafeteria/teawonders"
                  className={
                    stall === "teawonders"
                      ? "nav-link line manualborder"
                      : "nav-link line"
                  }
                >
                  Tea Wonders
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
// continentalcoffee
    // WinterSpecial
    // Noodles
    // Momos
    // Omelette
    // Fries
    // Others
// sips
    // Shakes
    // Mocktails
// burgerking
// hakkawok
// fivestar
// teawonders
export default CafeteriaNavbar;
