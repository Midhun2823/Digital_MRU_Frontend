import React, { useState } from "react";
import { Link } from "react-router-dom";
import Right_Arrow from "../../assets/Right_Arrow.png";

const StationaryNavbar = () => {
  const [stall, setstall] = useState("");

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div onClick={() => setstall("")}>
              <Link
                to="/stationary/"
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item  mt-2" onClick={() => setstall("Books")}>
                  <Link
                    to="/stationary/Books"
                    className={
                      stall === "Books"
                        ? "nav-link line manualborder"
                        : "nav-link line"
                    }
                  >
                    Books
                  </Link>
                </li>
                <li
                  className="nav-item  mt-2"
                  onClick={() => setstall("Writing_Materials")}
                >
                  <Link
                    to="/stationary/Writing_Materials"
                    className={
                      stall === "Writing_Materials"
                        ? "nav-link line manualborder"
                        : "nav-link line"
                    }
                  >
                    Writing Materials
                  </Link>
                </li>
                <li className="nav-item  mt-2" onClick={() => setstall("Records")}>
                  <Link
                    to="/stationary/Records"
                    className={
                      stall === "Records"
                        ? "nav-link line manualborder"
                        : "nav-link line"
                    }
                  >
                    Records
                  </Link>
                </li>
                <li className="nav-item  mt-2" onClick={() => setstall("Sheets")}>
                  <Link
                    to="/stationary/Sheets"
                    className={
                      stall === "Sheets"
                        ? "nav-link line manualborder"
                        : "nav-link line"
                    }
                  >
                    Sheets
                  </Link>
                </li>
                <li
                  className="nav-item  mt-2"
                  onClick={() => setstall("Paper_Goods")}
                >
                  <Link
                    to="/stationary/Paper_Goods"
                    className={
                      stall === "Paper_Goods"
                        ? "nav-link line manualborder"
                        : "nav-link line"
                    }
                  >
                    Paper Goods
                  </Link>
                </li>
                <li className="nav-item  mt-2" onClick={() => setstall("Items")}>
                  <Link
                    to="/stationary/Items"
                    className={
                      stall === "Items"
                        ? "nav-link line manualborder"
                        : "nav-link line"
                    }
                  >
                    Items
                  </Link>
                </li>

                <li
                  className="nav-item  mt-2"
                  onClick={() => setstall("Printouts")}
                  disabled
                >
                  <Link
                    to="/stationary/Printouts"
                    className={
                      stall === "Printouts"
                        ? "nav-link line manualborder"
                        : "nav-link line"
                    }
                  >
                    Printouts
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default StationaryNavbar;
