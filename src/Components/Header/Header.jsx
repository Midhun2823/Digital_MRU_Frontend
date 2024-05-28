import React from "react";
import MRU_Cafeteria from "../../assets/MRU_Cafeteria.png";
import MRUH from "../../assets/MRUH.mp4";
import MRU_Cafeteria1 from "../../assets/MRU_Cafeteria1.png";
import MRU_Stationary from "../../assets/MRU_Stationary.png";

const Header = () => {
  return (
    <div>
      <div>
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner border border-dark mt-1 p-2">
            <div class="carousel-item active " data-bs-interval="12000">
              <img
                src={MRU_Cafeteria}
                className="d-block w-100 px-4 pt-1 rounded-pill"
                alt="1035 X 475px"
              />
              <div className="carousel-caption d-none d-md-block bg-secondary bg-opacity-75 rounded-4 border border-2 ">
                <div className="fs-4 fw-bold text-center text-dark text-decoration-underline">
                  Cafeteria
                </div>
                <p
                  className="fw-bold text-dark mx-2"
                  style={{ textAlign: "justify" }}
                >
                  The benefits of having cafeteria in our University include
                  providing a gathering place, offering unique food and drink
                  options, and providing a convenient location for students to
                  relax and work.
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="8000">
              <img
                src={MRU_Cafeteria1}
                className="d-block w-100 px-4 pt-1 rounded-pill"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block  bg-primary bg-opacity-75 rounded-4 border border-2 ">
                <div className="fs-4 fw-bold text-center text-dark text-decoration-underline">
                  Cafeteria
                </div>
                <p
                  className="fw-bold text-dark mx-2"
                  style={{ textAlign: "justify" }}
                >
                  The benefits of having cafeteria in our University include
                  providing a gathering place, offering unique food and drink
                  options, and providing a convenient location for students to
                  relax and work.
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="6000">
              <img
                src={MRU_Stationary}
                className="d-block w-100  px-4 pt-1 rounded-pill"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block  bg-info bg-opacity-75 rounded-4 border border-2 ">
                <div className="fs-4 fw-bold text-center text-dark text-decoration-underline">
                  Stationery
                </div>
                <p
                  className="fw-bold text-dark m-2"
                  style={{ textAlign: "justify" }}
                >
                  The benefits of having Stationery in our University include
                  providing the students with essential tools to jot down notes,
                  tackle problems, and express their thoughts on paper.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div>
        <div className="border border-4 border-dark rounded rounded-2  mt-4">
          <div className="text-center  bg-danger  border border-dark border-4 border-start-0 border-end-0 border-top-0 p-2">
            <div className="fs-1 fw-bold m-2 text-decoration-underline btn btn-outline-warning rounded-pill px-5  border border-dark">
              MRU
            </div>
          </div>
          {/* <hr className=" border border-dark border-2 opacity-100" /> */}
          <div className="row p-2 "><video
          className="rounded rounded-5"
          width="100%"
          height="100%"
          controls
        >
          <source src={MRUH} type="video/mp4" />
        </video></div>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
