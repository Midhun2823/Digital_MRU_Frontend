import React from 'react'
import Event_Img_1 from "../../assets/Event_Img_1.jpg";
import Event_Img_2 from "../../assets/Event_Img_2.jpg";
import Event_Img_3 from "../../assets/Event_Img_3.jpg";
import Event_Img_4 from "../../assets/Event_Img_4.jpg";

import "./LastestEvents.css"

const LatestEvents = () => {
  return (
    <div className="border border-4 border-dark rounded rounded-2  mt-4">
      <div className="text-center  bg-danger  border border-dark border-4 border-start-0 border-end-0 border-top-0 p-2">
        <div className="fs-1 fw-bold m-2 text-decoration-underline btn btn-outline-warning rounded-pill px-5  border border-dark">
          MRU LatestEvents
        </div>
      </div>
      {/* <hr className=" border border-dark border-2 opacity-100" /> */}
      <div className="row p-2 ">
        <div className="col-md-3 box p-4">
          <img
            className="rounded rounded-4"
            src={Event_Img_1}
            alt="Event_Img_1"
            width="100%"
            height="100%"
          />
        </div>
        <div className="col-md-3 box p-4">
          <img
            className="rounded rounded-4"
            src={Event_Img_2}
            alt="Event_Img_2"
            width="100%"
            height="100%"
          />
        </div>
        <div className="col-md-3 box p-4">
          <img
            className="rounded rounded-4"
            src={Event_Img_3}
            alt="Event_Img_3"
            width="100%"
            height="100%"
          />
        </div>
        <div className="col-md-3 box p-4">
          <img
            className="rounded rounded-4"
            src={Event_Img_4}
            alt="Event_Img_4"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default LatestEvents
