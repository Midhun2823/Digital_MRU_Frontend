import React from "react";
import PopularEvent_1 from "../../assets/PopularEvent_1.jpg";
import PopularEvent_2 from "../../assets/PopularEvent_2.jpg";
import PopularEvent_3 from "../../assets/PopularEvent_3.jpg";
import Animal_Event from "../../assets/Animal_Event.mp4";
import PopularEvent_4 from "../../assets/PopularEvent_4.jpg";
import PopularEvent_5 from "../../assets/PopularEvent_5.jpg";
import PopularEvent_6 from "../../assets/PopularEvent_6.jpg";
import PopularEvent_7 from "../../assets/PopularEvent_7.jpg";
import PopularEvent_8 from "../../assets/PopularEvent_8.jpg";

import ReactPlayer from "react-player";
import "./PopularEvents.css"

const PopularEvents = () => {
  return (
    <div className="border border-4 border-dark rounded rounded-2  mt-4">
      <div className="text-center  bg-danger  border border-dark border-4 border-start-0 border-end-0 border-top-0 p-2">
        <div className="fs-1 fw-bold m-2 text-decoration-underline btn btn-outline-warning rounded-pill px-5  border border-dark">
          MRU PopularEvents
        </div>
      </div>
      {/* <hr className=" border border-dark border-2 opacity-100" /> */}
      <div className="row p-2 ">
        <div className="col-md-3 box p-4">
          <img
            className="rounded rounded-4"
            src={PopularEvent_1}
            alt="Event_Img_1"
            width="100%"
            height="100%"
          />
        </div>
        <div className="col-md-3 box p-4">
          <img
            className="rounded rounded-4"
            src={PopularEvent_2}
            alt="Event_Img_2"
            width="100%"
            height="100%"
          />
        </div>
        <div className="col-md-3 box p-4">
          <img
            className="rounded rounded-4"
            src={PopularEvent_3}
            alt="Event_Img_3"
            width="100%"
            height="100%"
          />
        </div>
        <div className="col-md-3 box p-4">
          <video
            className="rounded rounded-4"
            width="100%"
            height="100%"
            controls
          >
            <source src={Animal_Event} type="video/mp4" />
          </video>
        </div>
        <div className="col-md-3 box p-4">
          <img
            className="rounded rounded-4"
            src={PopularEvent_4}
            alt="Event_Img_3"
            width="100%"
            height="100%"
          />
        </div>
        <div className="col-md-3 box p-4">
          <img
            className="rounded rounded-4"
            src={PopularEvent_5}
            alt="Event_Img_3"
            width="100%"
            height="100%"
          />
        </div>
        <div className="col-md-3 box p-4">
          <img
            className="rounded rounded-4"
            src={PopularEvent_6}
            alt="Event_Img_3"
            width="100%"
            height="100%"
          />
        </div>
        <div className="col-md-3 box p-4">
          <img
            className="rounded rounded-4"
            src={PopularEvent_7}
            alt="Event_Img_3"
            width="100%"
            height="100%"
          />
        </div>
        <div className="col-md-3 box p-4">
          <img
            className="rounded rounded-4"
            src={PopularEvent_8}
            alt="Event_Img_3"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default PopularEvents;
