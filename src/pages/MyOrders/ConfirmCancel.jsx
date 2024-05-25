import React from "react";
import Cross_Icon_For_Login from "../../assets/Cross_Icon_For_Login.png";

import "./ConfirmCancel.css";
import axios from "axios";

const ConfirmCancel = ({ setShowConfirmCancel }) => {

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

  return (
    <></>
  );
};

export default ConfirmCancel;
