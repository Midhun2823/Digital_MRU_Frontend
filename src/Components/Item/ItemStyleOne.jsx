import React, { useContext } from "react";
import "./ItemStyleOne.css";
import Time_Icon from "../../assets/Time_Icon.png";
import Item_Rating from "../../assets/Item_Rating.png";
import Add_Item from "../../assets/Add_Item.png";
import Add_Item_Icon from "../../assets/Add_Item_Icon.png";
import Remove_Item_Icon from "../../assets/Remove_Item_Icon.png";
import { ItemContext } from "../../Context/ItemContext";

const ItemStyleOne = (props) => {
  // const [itemCount, setItemCount] = useState(0)

  const { cartItems, addToCart, removeFromCart,url } = useContext(ItemContext);

  return (
    <div className="">
      <div className="card" style={{ width: "18rem", height: "24rem" }}>
        <div className="maincontainer">
          <div className="thecard">
            <div className="thefront">
              <img
                src={url +"/images/"+props.image}
                className="card-img-top"
                alt="..."
                height="200"
              />
            </div>
            <div className="theback">
              <p className="card-text fw-bold p-5">{props.des}</p>
            </div>
          </div>
        </div>

        <h5 className="card-title text-center fw-bold fs-4 mt-2">
          {props.name}
        </h5>
        <ul className="list-group list-group-flush mx-2">
          <li className="list-group-item">
            <div className="py-2 ">
              {props.category}
              {!cartItems[props.id] ? (
                <img
                  onClick={() => addToCart(props.id)}
                  src={Add_Item}
                  width="46"
                  className="position-absolute top-50 end-0 translate-middle-y me-4 border border-danger border-4 rounded-pill "
                />
              ) : (
                <div className="d-flex position-absolute top-50 end-0 translate-middle-y bg-secondary bg-opacity-25 rounded-pill p-1 me-2">
                  <img
                    width="32"
                    height="32"
                    onClick={() => removeFromCart(props.id)}
                    src={Remove_Item_Icon}
                  />
                  <span className="border border-secondary px-1 mx-1 fw-bolder text-danger fs-6">
                    {cartItems[props.id]}
                  </span>
                  <img
                    width="32"
                    height="32"
                    onClick={() => addToCart(props.id)}
                    src={Add_Item_Icon}
                  />
                </div>
              )}
            </div>
          </li>
          <li className="list-group-item">
            <div className="d-flex row me-2">
              <div className="col-md-4 fw-bold text-success">
                {props.new_price}/-
              </div>
              <div className="col-md-4 card-link text-danger fw-bold text-decoration-line-through ">
                {props.old_price}/-
              </div>
              <div className="col-md-4 text-info fw-bold d-flex">
                <img className="me-1" src={Time_Icon} width="24" />
                {props.item_time}mins
              </div>
            </div>
          </li>

          <li className="list-group-item  ">
            <div className="position-relative">
              {props.available ? "InStock" : "Out Of Stock"}
              <img
                src={Item_Rating}
                width="102"
                className="position-absolute top-50 end-0 translate-middle-y"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ItemStyleOne;
