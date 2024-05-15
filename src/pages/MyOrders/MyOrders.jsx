import React, { useContext, useEffect, useState } from "react";
import { ItemContext } from "../../Context/ItemContext";
import axios from "axios";
import Parcel_Icon from "../../assets/Parcel_Icon.png";

const MyOrders = () => {
  const { url, token } = useContext(ItemContext);
  const [data, setData] = useState([]);

  const fetchOrder = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrder();
    }
  }, [token]);

  return (
    <div>
      <p className="fw-bold fs-4 text-center text-decoration-underline bg-info my-2 py-2 rounded border border-dark border-2">My Orders</p>
      <div>
        {data.map((order, index) => {
          return (
            <div key={index} className="row  border border-warning border-2 rounded-4 my-4 mx-1">
              <div className="col-md-2">
                <img
                  src={Parcel_Icon}
                  width="120"
                  className="bg-danger rounded my-2 p-2 border border-dark border-2"
                />
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
              <div className="col-md-1 mt-2">
                <i>Rupees:</i> {order.amount}/-
              </div>
              <div className="col-md-1 mt-2">
                <i>Items:</i> {order.items.length}
              </div>
              <div className="col-md-3 mt-2">
                
                  <span>&#x25cf;</span> <b>{order.status}</b>
              </div>
              <div className="col-md-2 mt-2">
                <button onClick={fetchOrder} className="btn btn-outline-success my-2">Track Order</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
