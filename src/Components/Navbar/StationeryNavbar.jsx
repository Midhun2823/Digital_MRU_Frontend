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
                <li
                  className="nav-item  mt-2"
                  onClick={() => setstall("books")}
                >
                  <Link
                    to="/stationary/books"
                    className={
                      stall === "books"
                        ? "nav-link line manualborder"
                        : "nav-link line"
                    }
                  >
                    Books
                  </Link>
                </li>
                <li
                  className="nav-item  mt-2"
                  onClick={() => setstall("writingmaterials")}
                >
                  <Link
                    to="/stationary/writingmaterials"
                    className={
                      stall === "writingmaterials"
                        ? "nav-link line manualborder"
                        : "nav-link line"
                    }
                  >
                    Writing Materials
                  </Link>
                </li>
                <li
                  className="nav-item  mt-2"
                  onClick={() => setstall("records")}
                >
                  <Link
                    to="/stationary/records"
                    className={
                      stall === "records"
                        ? "nav-link line manualborder"
                        : "nav-link line"
                    }
                  >
                    Records
                  </Link>
                </li>
                <li
                  className="nav-item  mt-2"
                  onClick={() => setstall("sheets")}
                >
                  <Link
                    to="/stationary/sheets"
                    className={
                      stall === "sheets"
                        ? "nav-link line manualborder"
                        : "nav-link line"
                    }
                  >
                    Sheets
                  </Link>
                </li>
                <li
                  className="nav-item  mt-2"
                  onClick={() => setstall("papergoods")}
                >
                  <Link
                    to="/stationary/papergoods"
                    className={
                      stall === "papergoods"
                        ? "nav-link line manualborder"
                        : "nav-link line"
                    }
                  >
                    Paper Goods
                  </Link>
                </li>
                <li
                  className="nav-item  mt-2"
                  onClick={() => setstall("items")}
                >
                  <Link
                    to="/stationary/items"
                    className={
                      stall === "items"
                        ? "nav-link line manualborder"
                        : "nav-link line"
                    }
                  >
                    Items
                  </Link>
                </li>

                <li
                  className="nav-item  mt-2"
                  onClick={() => setstall("printouts")}
                  disabled
                >
                  <Link
                    to="/stationary/printouts"
                    className={
                      stall === "printouts"
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
