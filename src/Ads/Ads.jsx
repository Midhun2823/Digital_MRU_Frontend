import React from "react";

const Ads = () => {
  return (
    <div>
      <div className="border border-4 border-dark rounded rounded-2  mt-4">
        <div className="text-center  bg-danger  border border-dark border-4 border-start-0 border-end-0 border-top-0 ">
          <div className="fs-4 fw-bold m-2 text-decoration-underline btn btn-outline-warning rounded-pill px-5  border border-dark">
            Ads
          </div>
        </div>
        {/* <hr className=" border border-dark border-2 opacity-100" /> */}
        <div className="row p-2 ">
          <div className="col-md-6">
            <div className=" text-center bg-secondary bg-opacity-25 rounded-5 m-2 p-2">
              <h1 className="fw-bold text-decoration-underline">Student Needs</h1>
              <p className="lead fw-bold">(Mobile Application)</p>

              <div className="lead fw-bold">Coming Soon......</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className=" text-center bg-secondary bg-opacity-25 rounded-5 m-2 p-2">
              <h1 className="fw-bold text-decoration-underline">Home Made Store</h1>
              <p className="lead fw-bold">(Mobile Application)</p>

              <div className="lead fw-bold">Coming Soon......</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
