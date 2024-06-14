import React, { useContext } from "react";
import { ItemContext } from "../../Context/ItemContext";
import Cross_Icon_Cart from "../../assets/Cross_Icon_Cart.png";
import Remove_Item_Icon from "../../assets/Remove_Item_Icon.png";
import Add_Item_Icon from "../../assets/Add_Item_Icon.png";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    all_items,
    removeFromCart,
    addToCart,
    getTotalCartAmount,
    getNumberOfItemsInCart,
    inputValue,
    tempinputValue,
    handleChange,
    handleChangeDiscount,
    discountPrice,
    getTotalPriceAfterDiscountPrice,
    url,
  } = useContext(ItemContext);

  const navigate = useNavigate();

  console.log(getNumberOfItemsInCart() + "  awdajk");

  // const [counterState,setCounterState] = useState(1);
  // console.log("Counter "+counter)
  console.log("inputValue " + inputValue);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <table className="table  table-hover">
            <thead>
              <tr>
                <th scope="col">Items</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Time</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            {getNumberOfItemsInCart <= 0 ? (
              <tbody>
                <tr>
                  <td>hi</td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {all_items.map((item, index) => {
                  if (cartItems[item._id] > 0) {
                    {
                      /* if (cartItems[item._id] % 6 == 0) {
                  setCounterState(2);
                }
                console.log("Counter " + counterState); */
                    }
                    return (
                      <tr className="">
                        <td>
                          <img src={url+"/images/"+item.image} width="102" height="102"/>
                        </td>
                        <td className="pt-4">{item.name}</td>
                        <td className="pt-4">{item.new_price}/-</td>
                        <td className="pt-4">
                          <div className="hstack">
                            <img
                              className="bg-warning rounded border border-danger"
                              width="32"
                              height="32"
                              onClick={() => removeFromCart(item._id)}
                              src={Remove_Item_Icon}
                            />
                            <p className="m-1 border border-danger rounded fw-bold p-1">
                              {cartItems[item._id]}
                            </p>
                            <img
                              className="bg-warning rounded border border-danger"
                              width="32"
                              height="32"
                              onClick={() => addToCart(item._id)}
                              src={Add_Item_Icon}
                            />
                          </div>
                        </td>
                        <td className="pt-4">
                          {item.new_price * cartItems[item._id]}/-
                        </td>
                        <td className="pt-4">{item.item_time}mins</td>
                        <td onClick={() => removeFromCart(item._id)}>
                          <img
                            src={Cross_Icon_Cart}
                            width="66"
                            className="p-2"
                          />
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            )}
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 border border-dark bg-secondary bg-opacity-25 rounded p-2">
          <h1 className="text-center text-decoration-underline">Cart Totals</h1>
          <div className="">
            <table class="table">
              <thead>
                <tr>
                  <th className="text-danger fs-4">Category</th>
                  <th className="text-danger fs-4">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Subtotal</th>
                  <td>
                    <p>{getTotalCartAmount()}/-</p>
                  </td>
                </tr>
                <tr>
                  <th>Discount Received From Coupon</th>
                  <td>
                    <p>{discountPrice()}/-</p>
                  </td>
                </tr>

                <tr>
                  <th>Total</th>
                  <td>
                    <p>{getTotalPriceAfterDiscountPrice()}/-</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={() => {navigate("/order")
              window.scroll(0,0)}}
              className=" text-danger fw-bold btn  btn-outline-warning border border-warning border-4 fs-5"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="mt-4 mx-2">
            <p className="fw-bold text-decoration-underline">
              If any coupon is available please enter here
            </p>
            <div className="hstack">
              <input
                value={tempinputValue}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter Coupon Code"
              />
              <button
                onClick={handleChangeDiscount}
                className="btn btn-outline-info fw-bold"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
