import React from "react";
import { menu_List } from "../../Data/Data";

const ExploreMenu = () => {
  return (
    <div className="text-center">
      <h1 className="fw-bold border border-info border-4 rounded-5 rounded-top-0 m-3 p-1 fs-2">
        Menu
      </h1>
      <div className="container">
        <div className="row">
          {menu_List.map((ele, index) => {
            return (
              <div className="col-md-4 p-3">
                <div
                  key={index}
                  class="card border border-warning border-2 "
                  style={{ width: "18rem;" }}
                >
                  <img
                    src={ele.menu_image}
                    class="card-img-top border border-warning border-top-0 border-start-0 border-end-0 border-2"
                    alt="..."
                    width="100"
                  />
                  
                  <div class="card-body dropdown-center rounded-pill">
                    <button className="btn bg-danger bg-opacity-50 fw-bold">
                      {ele.menu_name}
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger dropdown-toggle dropdown-toggle-split m-1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-reference="parent"
                    >
                      <span class="visually-hidden">Toggle Dropdown</span>
                    </button>

                    <ul class="dropdown-menu dropdown-menu-dark">
                      {ele.menu_category.map((name) => (
                        <li>
                          <a class="dropdown-item" href="#">
                            {name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreMenu;
