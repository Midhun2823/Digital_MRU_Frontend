import React, { useContext, useState } from "react";
import "./Navbar.css";
import MRU_LOGO from "../../assets/MRU_LOGO.png";
import Cart from "../../assets/Cart.png";
import Profile_Image from "../../assets/Profile_Image.png";
import Search_Icon from "../../assets/Search_Icon.png";
import LOGO from "../../assets/LOGO.png";
import Orders_Bag from "../../assets/Orders_Bag.png";
import Logout_Icon from "../../assets/Logout_Icon.png";
import { Link, useNavigate } from "react-router-dom";
import { ItemContext } from "../../Context/ItemContext";
import { toast } from "react-toastify";

const Navbar = ({ setShowLogin }) => {
  const [menu, setmenu] = useState("home");
  const { getTotalCartItems, token, setToken } = useContext(ItemContext);

  const navigate = useNavigate()

  const logout = () => {
    // we have to remove the token
    toast.success("Logged out Successfully")
    localStorage.removeItem("token") // token is the key name which we assign while adding
    setToken("");
    // When the user gets logout we sen them to home page we use navigate hook
    navigate("/")
  }

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <Link to="https://www.mallareddyuniversity.ac.in/">
            <img className="me-2" src={MRU_LOGO} alt="MRU_LOGO" width={66} />
          </Link>
          <Link
            onClick={() => setmenu("logo")}
            to="/"
            className="navbar-brand  fw-bold"
            href=""
          >
            <img
              className="border border-info rounded-4"
              src={LOGO}
              alt="MRU_LOGO"
              width={100}
            />
          </Link>
          <button
            className="navbar-toggler"
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
            <form className="d-flex mx-1" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn  border rounded-pill border-danger"
                type="submit"
              >
                <img src={Search_Icon} width="20" className="pb-1" />
              </button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li
                onClick={() => setmenu("cafeteria")}
                className="nav-item fw-bolder mt-1"
              >
                <Link
                  to="/cafeteria"
                  className={
                    menu === "cafeteria"
                      ? "nav-link active manualactive me-1"
                      : "nav-link me-1"
                  }
                >
                  Cafeteria
                </Link>
              </li>
              <li
                onClick={() => setmenu("stationary")}
                className="nav-item fw-bolder mt-1"
              >
                <Link
                  to="/stationary"
                  className={
                    menu === "stationary"
                      ? "nav-link active manualactive me-1"
                      : "nav-link me-1"
                  }
                >
                  Stationery
                </Link>
              </li>

              <li className="nav-item mt-1">
                <a className="nav-link disabled me-1" aria-disabled="true">
                  Upskill
                </a>
              </li>
              <li
                onClick={() => setmenu("contactus")}
                className="nav-item fw-bolder mt-1"
              >
                <Link
                  to="/contactus"
                  className={
                    menu === "contactus"
                      ? "nav-link active manualactive me-1"
                      : "nav-link me-1"
                  }
                >
                  Contact Us
                </Link>
              </li>

              <li
                onClick={() => setmenu("cart")}
                className={
                  menu === "cart"
                    ? "bg-secondary bg-opacity-50 rounded-pill mt-2"
                    : "mt-2"
                }
              >
                <div className="d-flex me-4 my-1 ps-3" role="search">
                  <div className="position-relative">
                    <Link to="/cart">
                      <img className="" width="30" src={Cart} alt="Cart" />
                    </Link>

                    <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger">
                      {getTotalCartItems()}
                    </span>
                  </div>
                </div>
              </li>

              {!token ? (
                <li>
                  <button
                    onClick={() => setShowLogin(true)}
                    className="btn btn-danger px-4 m-1 rounded-pill"
                  >
                    Login
                  </button>
                </li>
              ) : (
                <li
                  onClick={() => setmenu("profile")}
                  className={
                    menu === "profile"
                      ? "bg-secondary bg-opacity-50 rounded-pill nav-item dropdown px-2 hstack text-center mt-2"
                      : "nav-item dropdown px-2 hstack text-center mt-2"
                  }
                >
                  <Link className="nav-link " to="/profile">
                    <img
                      className=""
                      width="30"
                      src={Profile_Image}
                      alt="Profile_Image"
                    />
                  </Link>
                  <div
                    className="dropdown-toggle m-2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></div>
                  <ul className="dropdown-menu bg-secondary bg-opacity-25 border-dark border-2 px-2">
                    <li
                      onClick={() => navigate("/myorders")}
                      className="hstack btn btn-outline-danger"
                    >
                      <img
                        className="ms-4 bg-danger bg-opacity-75 rounded-pill p-1"
                        width="40"
                        src={Orders_Bag}
                      />
                      <div className="dropdown-item bg-danger bg-opacity-75 ms-2 rounded fw-bold">
                        Orders
                      </div>
                    </li>
                    <li>
                      <hr className="dropdown-divider mx-2" />
                    </li>
                    <li
                      onClick={logout}
                      className="hstack btn btn-outline-danger"
                    >
                      <img
                        className="ms-4 bg-danger bg-opacity-75 rounded p-1"
                        width="36"
                        src={Logout_Icon}
                      />
                      <div className="dropdown-item bg-danger bg-opacity-75 ms-2 rounded fw-bold">
                        Logout
                      </div>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
