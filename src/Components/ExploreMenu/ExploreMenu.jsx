import React from "react";
import { menu_List } from "../../Data/Data";
import { Tilt } from "react-tilt";

const ExploreMenu = ({Type}) => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <div className="text-center">
      <h1 className="fw-bold border border-info border-4 rounded-5 rounded-top-0 m-3 p-1 fs-2">
        {Type} Menu
      </h1>
      <div className="container">
        <div className="row">
          {menu_List.map((ele, index) => {
            if (ele.menu_Type === Type){
            return (
              <div className="col-md-4 p-3">
                <Tilt
                  options={defaultOptions}
                  style={{ height: 250, width: 250 }}
                >
                  <div
                    key={index}
                    className="card border border-warning border-2 "
                    style={{ width: "18rem;" }}
                  >
                    <img
                      src={ele.menu_image}
                      className="card-img-top border border-warning border-top-0 border-start-0 border-end-0 border-2"
                      alt="..."
                      width="100"
                    />

                    <div class="btn-group dropup m-1">
                      <button className="btn bg-danger bg-opacity-50 fw-bold">
                        {ele.menu_name}
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span class="visually-hidden">Toggle Dropdown</span>
                      </button>
                      <ul class="dropdown-menu dropdown-menu-dark">
                        {ele.menu_category.map((name) => (
                          <li>
                            <a className="dropdown-item" >
                              {name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    
                  </div>
                </Tilt>
              </div>
            );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreMenu;
