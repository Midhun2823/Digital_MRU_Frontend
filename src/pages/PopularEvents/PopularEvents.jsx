import React from "react";
import Event_Img_1 from "../../assets/Event_Img_1.jpg";
import Event_Img_2 from "../../assets/Event_Img_2.jpg";
import Event_Img_3 from "../../assets/Event_Img_3.jpg";
import Animal_Event from "../../assets/Animal_Event.mp4";
import ReactPlayer from "react-player";

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
        <div className="col-md-3 p-3">
          <img
            className="rounded rounded-4"
            src={Event_Img_1}
            alt="Event_Img_1"
            width="100%"
            height="100%"
          />
        </div>
        <div className="col-md-3 p-3">
          <img
            className="rounded rounded-4"
            src={Event_Img_2}
            alt="Event_Img_2"
            width="100%"
            height="100%"
          />
        </div>
        <div className="col-md-3 p-3">
          <img
            className="rounded rounded-4"
            src={Event_Img_3}
            alt="Event_Img_3"
            width="100%"
            height="100%"
          />
        </div>
        <div className="col-md-3 p-3">
          <video width="100%" height="100%" controls>
            <source src={Animal_Event} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default PopularEvents;
