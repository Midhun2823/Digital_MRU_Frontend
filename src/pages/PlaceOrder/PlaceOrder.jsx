import React, { useContext, useEffect, useState } from "react";
import { ItemContext } from "../../Context/ItemContext";
import "./PlaceOrder.css";
import axios from "axios";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const {
    getTotalPriceAfterDiscountPrice,
    getNumberOfItemsInCart,
    CheckDelivery,
    CheckBuilding,
    CheckClassRoom,
    handleChangeDelivery,
    handleChangeBuilding,
    handleChangeClassRoom,
    token,
    all_items,
    cartItems,
    url,
    discountPrice,
  } = useContext(ItemContext);

  const [data, setData] = useState({
    delivery: false,
    deliverytobuilding: false,
    deliverytoclass: false,
    firstname: "",
    lastname: "",
    email: "",
    school: "",
    course: "",
    branch: "",
    building: "",
    floor: "",
    room: "",
    designation: "",
    phonenumber: "",
  });

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({
      ...data,
      [name]:
        name === "delivery" ||
        name === "deliverytobuilding" ||
        name === "deliverytoclass"
          ? event.target.checked
          : value,
    }));
  };

  const deliveryAmount = () => {
    let amount = 0;
    if (data.deliverytoclass) {
      amount = getNumberOfItemsInCart() * 12;
    } else if (data.deliverytobuilding) {
      amount = getNumberOfItemsInCart() * 6;
    } else {
      amount = 0;
    }
    return amount;
  };

  const totalAmount = () => {
    return getTotalPriceAfterDiscountPrice() + deliveryAmount();
  };

  // const [selectedSchool, setSelectedSchool] = useState("");
  // const [selectedCource, setSelectedCource] = useState("");
  // const [selectedBranch, setSelectedBranch] = useState("");
  // const [selectedDesignation, setSelectedDesignation] = useState("");

  // const [selectedBuilding, setSelectedBuilding] = useState("");
  // const [selectedFloor, setSelectedFloor] = useState("");
  // const [selectedRoom, setSelectedRoom] = useState("");
  // console.log(selectedBuilding);

  // Details of Customer Profession
  const Schools = [
    { label: "Select the School", value: "select" },
    { label: "School Of Engineering", value: "SOE" },
    { label: "School Of Sciences", value: "SOS" },
    { label: "School Of Allied Healthcare Sciences", value: "SOAHS" },
    { label: "School Of Management", value: "SOM" },
  ];

  const cources = {
    SOE: ["Select the Cource", "B_Tech", "M_Tech", "Ph_D"],
    SOS: [
      "Select the Cource",
      "Science_UG_Programs",
      "Science_PG_Programs",
      "Ph_D",
    ],
    SOAHS: [
      "Select the Cource",
      "Allied_Health_Sciences_UG",
      "Physiotherapy_Cources_UG",
      "M_Sc_Cources_PG",
    ],
    SOM: ["Select the Cource", "BBA_Programs", "MBA_Programs"],
  };
  const branches = {
    B_Tech: [
      "Select the Branch",
      "CSE",
      "CSE_AIML",
      "CSE_DS",
      "CSE_CS",
      "CSE_IOT",
      "IT",
    ],
    M_Tech: [
      "Select the Branch",
      "Computer Science & Engineering",
      "Machine Learning & Deep Learning",
      "Big Data Analytics",
      "Cloud Computing",
      "Embedded Systems",
    ],
    Ph_D: ["Select the Branch", "Upcoming"],
    Science_UG_Programs: [
      "Select the Branch",
      "B.Sc - Computer Science",
      "B.Sc - Data Science",
      "B.Sc - Data Analytics",
      "B.Sc - Maths Statistics Computers",
      "B.Sc - Cyber Security",
      "B.Sc - Digital Forensics",
      "B.Sc - AI & ML",
      "B.Sc - Multimedia & Animation",
      "B.Sc - Visual Communication",
    ],
    Science_PG_Programs: ["Select the Branch", "Guadalajara"],
    Allied_Health_Sciences_UG: ["Select the Branch", "Guadalajara"],
    Physiotherapy_Cources_UG: ["Select the Branch", "Guadalajara"],
    M_Sc_Cources_PG: ["Select the Branch", "Guadalajara"],
    BBA_Programs: ["Select the Branch", "Guadalajara"],
    MBA_Programs: ["Select the Branch", "Guadalajara"],
  };

  const designation = [
    { label: "Select Designation" },
    { label: "Student" },
    { label: "Faculty" },
  ];

  // Details to delivery to class
  const Buildings = [
    { label: "Select the Building", value: "select" },
    { label: "First Block", value: "First_Block" },
    { label: "Second Block", value: "Second_Block" },
    { label: "Third Block", value: "Third_Block" },
  ];
  const floors = {
    First_Block: [
      "Select the Floor",
      "_1_Ground_Floor",
      "_1_First_Floor",
      "_1_Second_Floor",
      "_1_Third_Floor",
      "_1_Fourth_Floor",
    ],
    Second_Block: [
      "Select the Floor",
      "_2_Ground_Floor",
      "_2_First_Floor",
      "_2_Second_Floor",
      "_2_Third_Floor",
    ],
    Third_Block: [
      "Select the Floor",
      "_3_Ground_Floor",
      "_3_First_Floor",
      "_3_Second_Floor",
      "_3_Third_Floor",
      "_3_Fourth_Floor",
    ],
  };
  const rooms = {
    _1_Ground_Floor: ["Select the Room", "_1001_Room"],
    _1_First_Floor: [
      "Select the Room",
      "_1101_Room",
      "_1102_Room",
      "_1103_Room",
      "_1104_Room",
      "_1105_Room",
      "_1106_Room",
    ],
    _1_Second_Floor: ["Select the Room", "_1201_Room"],
    _1_Third_Floor: ["Select the Room", "_1301_Room"],
    _1_Fourth_Floor: ["Select the Room", "_1401_Room"],
    _2_Ground_Floor: [
      "Select the Room",
      "_2001_Room",
      "_2002_Room",
      "_2003_Room",
      "_2004_Room",
      "_2005_Room",
      "_2006_Room",
      "_2007_Room",
      "_2008_Room",
      "_2009_Room",
      "_2010_Room",
      "_2011_Room",
      "_2012_Room",
      "_2013_Room",
      "_2014_Room",
      "_2015_Room",
    ],
    _2_First_Floor: [
      "Select the Room",
      "_2101_Room",
      "_2102_Room",
      "_2103_Room",
      "_2104_Room",
      "_2105_Room",
      "_2106_Room",
      "_2107_Room",
      "_2108_Room",
      "_2109_Room",
      "_2110_Room",
      "_2111_Room",
      "_2112_Room",
      "_2113_Room",
      "_2114_Room",
      "_2115_Room",
    ],
    _2_Second_Floor: [
      "Select the Room",
      "_2201_Room",
      "_2202_Room",
      "_2203_Room",
      "_2204_Room",
      "_2205_Room",
      "_2206_Room",
      "_2207_Room",
      "_2208_Room",
      "_2209_Room",
      "_2210_Room",
      "_2211_Room",
      "_2212_Room",
      "_2213_Room",
      "_2214_Room",
      "_2215_Room",
    ],
    _2_Third_Floor: [
      "Select the Room",
      "_2301_Room",
      "_2302_Room",
      "_2303_Room",
      "_2304_Room",
      "_2305_Room",
      "_2306_Room",
      "_2307_Room",
      "_2308_Room",
      "_2309_Room",
      "_2310_Room",
      "_2311_Room",
      "_2312_Room",
      "_2313_Room",
      "_2314_Room",
      "_2315_Room",
    ],
    _3_Ground_Floor: ["Select the Room", "_3001_Room"],
    _3_First_Floor: ["Select the Room", "_3101_Room"],
    _3_Second_Floor: ["Select the Room", "_3201_Room"],
    _3_Third_Floor: ["Select the Room", "_3301_Room"],
    _3_Fourth_Floor: ["Select the Room", "_3401_Room"],
  };
  //Details of Customer profession event handlers
  // const handleSchoolChange = (event) => {
  //   setSelectedSchool(event.target.value);
  // };

  // const handleCourceChange = (event) => {
  //   setSelectedCource(event.target.value);
  // };

  // const handleBranchChange = (event) => {
  //   setSelectedBranch(event.target.value);
  // };
  // const handleDesignationChange = (event) => {
  //   setSelectedDesignation(event.target.value);
  // };

  // //Details to delivery to class event handlers
  // const handleBuildingChange = (event) => {
  //   setSelectedBuilding(event.target.value);
  // };
  // const handleFloorChange = (event) => {
  //   setSelectedFloor(event.target.value);
  // };
  // const handleRoomChange = (event) => {
  //   setSelectedRoom(event.target.value);
  // };

  const placeOrder = async (event) => {
    event.preventDefault(); // This is used because when ever we submit the form the page will not reload
    let orderItems = []; // In this we data cart related items data
    all_items.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: totalAmount(),
      delivery: deliveryAmount(),
      discount: discountPrice(),
    };

    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      // we will get session url
      const { session_url } = response.data;
      window.location.replace(session_url);
      console.log(orderItems);
    } else {
      alert("Error");
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      // When ever the token is not avaiable this if bolck will be excueted
      // we navigate to cart page
      toast.error("Please Login Your to Account!......");
      navigate("/cart");
    } else if (getTotalPriceAfterDiscountPrice() === 0) {
      toast.error("Please Add the items to cart!......");
      navigate("/cart");
    }
  }, [token]);

  return (
    <div>
      <div className="container-fluid ">
        <div className="row bg-primary bg-opacity-25 mt-4 border border-primary border-2 rounded-5 rounded-top-0">
          <div className="col-md-12 text-center fw-bold fs-2 text-decoration-underline py-2">
            Select Any One
          </div>
          <div className="col-md-4">
            <div className=" border-4  text-center colorOrange rounded-pill  m-4 pt-4">
              <input
                name="delivery"
                style={{ width: 32, height: 32 }}
                type="checkbox"
                checked={data.delivery}
                onChange={onChangeHandler}
                className="rounded-pill"
              />
              <p className="fw-bold fs-5">No Delivery</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border border-danger border-4 text-center bg-info bg-opacity-25 rounded-pill  m-4 pt-4">
              <input
                name="deliverytobuilding"
                style={{ width: 32, height: 32 }}
                type="checkbox"
                checked={data.deliverytobuilding}
                onChange={onChangeHandler}
                className="rounded-pill"
              />
              <p className="fw-bold fs-5">Delivery to Building</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border border-success border-4 text-center bg-success bg-opacity-50 rounded-pill m-4 pt-4">
              <input
                name="deliverytoclass"
                style={{ width: 32, height: 32 }}
                type="checkbox"
                checked={data.deliverytoclass}
                onChange={onChangeHandler}
                className="rounded-pill"
              />
              <p className="fw-bold fs-5">Delivery to Classroom</p>
            </div>
          </div>
        </div>
        <div className="">
          <form onSubmit={placeOrder}>
            <div className="row">
              <div className="col-md-7 ">
                <div className="bg-dark rounded-pill  m-2 p-4">
                  {/* rounded rounded-5 */}
                  <p className="fw-bold fs-4 text-danger text-center text-decoration-underline  mb-4">
                    Delivery Information
                  </p>
                  <div className="bg-success bg-opacity-75 p-2 rounded">
                    <div className="row mb-2">
                      <div className="col-md-6">
                        <input
                          name="firstname"
                          onChange={onChangeHandler}
                          value={data.firstname}
                          className="form-control"
                          placeholder="Enter First Name"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          name="lastname"
                          onChange={onChangeHandler}
                          value={data.lastname}
                          className="form-control"
                          placeholder="Enter Last Name"
                          required
                        />
                      </div>
                    </div>
                    <input
                      type="email"
                      name="email"
                      onChange={onChangeHandler}
                      value={data.email}
                      className="form-control mb-2"
                      placeholder="Enter College Mail"
                      required
                    />
                  </div>
                  {/* Details of customer profession  */}
                  <div className="bg-danger bg-opacity-75 p-2 rounded">
                    <select
                      name="school"
                      className="form-select mb-2"
                      aria-label="Default select example"
                      value={data.school}
                      onChange={onChangeHandler}
                      required
                    >
                      {Schools.map((country) => (
                        <option key={country.value} value={country.value}>
                          {country.label}
                        </option>
                      ))}
                    </select>
                    <div>
                      {data.school != "" ? (
                        <select
                          name="course"
                          className="form-select mb-2"
                          aria-label="Default select example"
                          value={data.course}
                          onChange={onChangeHandler}
                          required
                        >
                          {cources[data.school] &&
                            cources[data.school].map((state) => (
                              <option key={state} value={state}>
                                {state}
                              </option>
                            ))}
                        </select>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div>
                      {data.course != "" ? (
                        <select
                          name="branch"
                          className="form-select mb-2"
                          aria-label="Default select example"
                          value={data.branch}
                          onChange={onChangeHandler}
                          required
                        >
                          {branches[data.course] &&
                            branches[data.course].map((branch) => (
                              <option key={branch} value={branch}>
                                {branch}
                              </option>
                            ))}
                        </select>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  {/* Details to delivery to class  */}
                  {data.deliverytobuilding || data.deliverytoclass ? (
                    <div className="bg-warning bg-opacity-75 p-2 rounded">
                      <div>
                        <select
                          name="building"
                          className="form-select mb-2"
                          aria-label="Default select example"
                          value={data.building}
                          onChange={onChangeHandler}
                        >
                          {Buildings.map((country) => (
                            <option key={country.value} value={country.value}>
                              {country.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        {data.building && data.deliverytoclass ? (
                          <select
                            name="floor"
                            className="form-select mb-2"
                            aria-label="Default select example"
                            value={data.floor}
                            onChange={onChangeHandler}
                          >
                            {floors[data.building] &&
                              floors[data.building].map((state) => (
                                <option key={state} value={state}>
                                  {state}
                                </option>
                              ))}
                          </select>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div>
                        {data.floor != "" && data.deliverytoclass != "" ? (
                          <select
                            name="room"
                            className="form-select mb-2"
                            aria-label="Default select example"
                            value={data.room}
                            onChange={onChangeHandler}
                          >
                            {rooms[data.floor] &&
                              rooms[data.floor].map((branch) => (
                                <option key={branch} value={branch}>
                                  {branch}
                                </option>
                              ))}
                          </select>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                  <div className="bg-success bg-opacity-75 p-2 rounded">
                    <select
                      name="designation"
                      className="form-select mb-2"
                      aria-label="Default select example"
                      value={data.designation}
                      onChange={onChangeHandler}
                      required
                    >
                      {designation.map((country) => (
                        <option key={country.value} value={country.value}>
                          {country.label}
                        </option>
                      ))}
                    </select>
                    <input
                      name="phonenumber"
                      value={data.phonenumber}
                      onChange={onChangeHandler}
                      className="form-control mb-2"
                      placeholder="Enter Phone Number"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-5  ">
                <div className=" border border-dark bg-secondary bg-opacity-25 rounded p-2 mt-5">
                  <h1 className="text-center text-decoration-underline">
                    Cart Totals
                  </h1>
                  <div className="">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="text-danger fs-4">Category</th>
                          <th className="text-danger fs-4">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Subtotal</th>
                          <td>
                            <p>{getTotalPriceAfterDiscountPrice()}/-</p>
                          </td>
                        </tr>
                        <tr>
                          <th>Delivery Fee</th>
                          <td>
                            <p>{deliveryAmount()}/-</p>
                          </td>
                        </tr>
                        <tr>
                          <th>Total</th>
                          <td>
                            <p>{totalAmount()}/-</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button
                      type="submit"
                      className=" text-danger fw-bold btn  btn-outline-warning border border-warning border-4 fs-5"
                    >
                      Proceed to Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
