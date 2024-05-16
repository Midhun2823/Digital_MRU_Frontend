import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Cafeteria from "./Components/Cafeteria/Cafeteria";
import Stationary from "./Components/Stationary/Stationary";
import ContactUs from "./Components/ContactUs/ContactUs";
import DisplayCategory from "./pages/DisplayCategory/DisplayCategory";
import CafeteriaMenu from "./Components/Cafeteria/CafeteriaMenu";
import Footer from "./Components/Footer/Footer";
import LoginPopUp from "./Components/LoginPopUp/LoginPopUp";
import Profile from "./Components/Profile/Profile";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";
// import DisplayCategory from './pages/DisplayCategory'
 import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

import "dotenv/config.js"; 


const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <ToastContainer />
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <div className="container">
        <BrowserRouter>
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cafeteria" element={<Cafeteria />}>
              <Route path="/cafeteria/" element={<CafeteriaMenu />} />
              <Route
                path="/cafeteria/continentalcoffee"
                element={<DisplayCategory stall_name="continentalcoffee" />}
              />
              <Route
                path="/cafeteria/sips"
                element={<DisplayCategory stall_name="sips" />}
              />
              <Route
                path="/cafeteria/burgerking"
                element={<DisplayCategory stall_name="burgerking" />}
              />
              <Route
                path="/cafeteria/hakkawok"
                element={<DisplayCategory stall_name="hakkawok" />}
              />
              <Route
                path="/cafeteria/fivestar"
                element={<DisplayCategory stall_name="fivestar" />}
              />
              <Route
                path="/cafeteria/teawonders"
                element={<DisplayCategory stall_name="teawonders" />}
              />
            </Route>

            <Route path="/stationary" element={<Stationary />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/myorders" element={<MyOrders />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
};

export default App;
