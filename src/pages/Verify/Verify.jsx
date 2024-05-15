import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ItemContext } from "../../Context/ItemContext";
import axios from "axios";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success"); // using this we get the value in the url which is true or false
  const orderId = searchParams.get("orderId"); // using this we get the value in the url which is value of orderId

  // console.log(success, orderId);
  const { url } = useContext(ItemContext);

  const navigate = useNavigate();
  const verifyPayment = async () => {
    // call api
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });

    if (response.data.success) {
      // now we will navigate the user to different Route (My Orders)
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };

  // we will run this fuction whenever the component is load
  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div>
      <div className="" style={{ margin: "320px 60px" }}>
        <div
          className="spinner-grow text-primary m-2 "
          style={{ width: "102px", height: "102px" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <div
          className="spinner-grow text-secondary m-2 "
          style={{ width: "102px", height: "102px" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <div
          className="spinner-grow text-success m-2 "
          style={{ width: "102px", height: "102px" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <div
          className="spinner-grow text-danger m-2 "
          style={{ width: "102px", height: "102px" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <div
          className="spinner-grow text-warning m-2 "
          style={{ width: "102px", height: "102px" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <div
          className="spinner-grow text-info m-2 "
          style={{ width: "102px", height: "102px" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <div
          className="spinner-grow text-light m-2 "
          style={{ width: "102px", height: "102px" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <div
          className="spinner-grow text-dark m-2"
          style={{ width: "102px", height: "102px" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Verify;
