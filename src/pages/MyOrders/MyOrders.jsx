import React, { useContext, useEffect, useState } from "react";
import { ItemContext } from "../../Context/ItemContext";
import axios from "axios";
import Parcel_Icon from "../../assets/Parcel_Icon.png";
import Cross_Icon_For_Login from "../../assets/Cross_Icon_For_Login.png";
import Success_Tick from "../../assets/Success_Tick.png";
import Error_Canceled from "../../assets/Error_Canceled.png";

import "./ConfirmCancel.css";

const MyOrders = () => {
  const { url, token } = useContext(ItemContext);
  const [data, setData] = useState([]);
  const [confirmCancel, setShowConfirmCancel] = useState("");
  console.log(confirmCancel + " mfdsazxcvbnxc");
  const fetchOrder = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    console.log(response.data.data);
  };
  const cancelOrderHandler = async (orderId) => {
    const response = await axios.post(url + "/api/order/cancelorder", {
      orderId,
      ordercanceled: true,
    });
    if (response.data.success) {
      await fetchOrder(); // so that all the orders are refreshed // why we do refresh because to get the updated values
    }
    console.log("Your called me");
  };
  useEffect(() => {
    if (token) {
      fetchOrder();
    }
  }, [token]);

  return (
    <div>
      {confirmCancel ? (
        <div className="position-relative">
          <div className="position-absolute top-50 start-50 translate-middle "></div>
          <div className="m-5">
            <div className=" border border-danger border-4 p-4 pb-5">
              <div className="position-relative">
                <h1 className="text-decoration-underline">Confirm to Cancel the order</h1>
                <img
                  className="position-absolute top-0 end-0 hovermanual p-2"
                  width="48"
                  src={Cross_Icon_For_Login}
                  onClick={() => setShowConfirmCancel("")}
                />
              </div>
              <div className="mt-4 container">
                <div className="row border bg-secondary bg-opacity-25 p-2">
                  <div className="col-md-1 mt-5">
                    <img
                      src={Parcel_Icon}
                      width="60"
                      className="bg-danger rounded my-2 p-2 border border-dark border-2"
                    />
                  </div>
                  <div className="col-md-3 mt-2">
                    {confirmCancel.items.map((item, index) => {
                      if (index === confirmCancel.items.length - 1) {
                        return item.name + " x " + item.quantity;
                      } else {
                        return item.name + " x " + item.quantity + ", ";
                      }
                    })}
                  </div>
                  <div className="col-md-3 mt-2">
                    <div>
                      <i>Name:</i>{" "}
                      {confirmCancel.address.firstname +
                        " " +
                        confirmCancel.address.lastname}
                    </div>
                    <div>
                      <i>Phone:</i> {confirmCancel.address.phonenumber}
                    </div>
                    <div>
                      <i>Items:</i> {confirmCancel.items.length}
                    </div>
                  </div>
                  <div className="col-md-3 mt-2">
                    <div>
                      <i>Delivery Amount:</i> {confirmCancel.delivery}/-
                    </div>
                    <div>
                      <i>Total Amount:</i> {confirmCancel.amount}/-
                    </div>
                  </div>
                  <div className="col-md-2 mt-2 text-center bg-danger bg-opacity-25 p-2 border border-dark border-2">
                    <div className="fw-bold text-decoration-underline">Need to pay</div>
                    <div>(30% of Total Amount)</div>
                    <div className="bg-dark text-danger py-2 fs-3 rounded fw-bold">{Math.round(`${30 * confirmCancel.amount/100}`)}/-</div>
                  </div>
                </div>
              </div>
              <div className="mt-5 mx-5">
                <button
                  className="btn btn-outline-danger form-control"
                  onClick={() => {
                    cancelOrderHandler(confirmCancel);
                    setShowConfirmCancel("");
                  }}
                >
                  Yes Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div>
            <p className="fw-bold fs-4 text-center text-decoration-underline bg-info my-2 py-2 rounded border border-dark border-2">
              My Orders
            </p>
            <div>
              {data.map((order, index) => {
                return (
                  <div
                    className={
                      order.status === "Delivered"
                        ? "bg-success rounded py-1"
                        : ""
                    }
                  >
                    <div
                      key={index}
                      className={
                        order.ordercanceled
                          ? "row  border border-warning border-2 rounded-4 my-4 mx-1 bg-danger"
                          : "row  border border-warning border-2 rounded-4 my-4 mx-1"
                      }
                    >
                      <div className="col-md-2">
                        <img
                          src={Parcel_Icon}
                          width="100%"
                          height="120px"
                          className="bg-danger rounded my-2 p-2 px-4 border border-dark border-2"
                        />
                        <p className="text-center py-1 bg-dark text-light fw-bold">
                          {order.orderId}
                        </p>
                      </div>
                      <div className="col-md-3 mt-2">
                        {order.items.map((item, index) => {
                          if (index === order.items.length - 1) {
                            return item.name + " x " + item.quantity;
                          } else {
                            return item.name + " x " + item.quantity + ", ";
                          }
                        })}
                      </div>
                      <div className="col-md-2 mt-2">
                        <div>
                          <i>Delivery Amount:</i> {order.delivery}/-
                        </div>
                        <div>
                          <i>Rupees:</i> {order.amount}/-
                        </div>
                      </div>
                      <div className="col-md-1 mt-2">
                        <i>Items:</i> {order.items.length}
                      </div>
                      <div className="col-md-2 mt-2">
                        <span>&#x25cf;</span> <b>{order.status}</b>
                      </div>
                      {order.status === "Delivered" ? (
                        <div className="col-md-2 my-1 rounded-pill bg-dark">
                          <p className="fs-5 pt-4 fw-bold text-warning text-center p-2">
                            Items Delivered Successfully
                            <img width="32" src={Success_Tick} />
                          </p>
                        </div>
                      ) : (
                        <div className="col-md-2 mt-2 text-center">
                          {order.ordercanceled ? (
                            <p className=" border border-5 border-dark  fw-bold fs-4 p-2 py-4 m-1 bg-secondary bg-opacity-75">
                              Order Canceled
                              <img
                                className="bg-dark rounded-pill"
                                width="32"
                                src={Error_Canceled}
                              />
                            </p>
                          ) : (
                            <div>
                              <button
                                onClick={fetchOrder}
                                className="btn btn-outline-success my-2 px-4"
                              >
                                Track Order
                              </button>
                              {order.status === "Out for Delivery" ? (
                                <button
                                  // onClick={() => cancelOrderHandler(order._id)}
                                  disabled
                                  className="btn btn-outline-danger my-2"
                                >
                                  Cancel Order
                                </button>
                              ) : (
                                <button
                                  // onClick={() => cancelOrderHandler(order._id)}
                                  onClick={() => {
                                    setShowConfirmCancel(order);
                                    window.scroll(0, 0);
                                  }}
                                  className="btn btn-outline-danger my-2"
                                >
                                  Cancel Order
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyOrders;
