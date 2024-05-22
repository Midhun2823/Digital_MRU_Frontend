import React, { createContext, useEffect, useState } from "react";
import { all_items } from "../Data/Data";
import { discount } from "../Data/Data";
import axios from "axios";

export const ItemContext = createContext();

const ItemContextProvider = (props) => {
  // const [all_items, setAllItems] = useState([]);
  const [cartItems, setCartItems] = useState({});
  // const url = "https://digital-mru-backend.onrender.com";
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      // By this the product will be added to database also
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // console.log(item + "  item");
        // console.log(all_items + "  all_items");

        let itemInfo = all_items.find((product) => product._id === item);
        // console.log(itemInfo + "  itemInfo");
        totalAmount = totalAmount + itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getNumberOfItemsInCart = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalAmount = totalAmount + 1;
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  // Discount
  const [inputValue, setInputValue] = useState("");
  const [tempinputValue, settempInputValue] = useState("");

  const handleChange = (event) => {
    settempInputValue(event.target.value);
  };
  const handleChangeDiscount = (event) => {
    setInputValue(tempinputValue);
  };

  const discountPrice = () => {
    console.log(inputValue + " itemcontext");
    let price = 0;
    let discountPrice = discount.find((item) => item.coupoun_id === inputValue);
    console.log("object " + discountPrice);
    if (discountPrice === undefined) {
      price = 0;
    } else {
      price = (
        (discountPrice.discount_for_coupoun / 100) *
        getTotalCartAmount()
      ).toFixed(2);
    }

    return price;
  };
  const getTotalPriceAfterDiscountPrice = () => {
    let price = getTotalCartAmount();
    if (discountPrice() > 0) {
      price = discountPrice() - getTotalCartAmount();
    }
    return Math.abs(price);
  };

  // Place Order

  const [CheckDelivery, setIsDelivery] = useState(false);
  const [CheckBuilding, setIsBuilding] = useState(false);
  const [CheckClassRoom, setIsClassRoom] = useState(false);

  const handleChangeDelivery = (event) => {
    setIsDelivery(event.target.checked);
  };
  const handleChangeBuilding = (event) => {
    setIsBuilding(event.target.checked);
  };
  const handleChangeClassRoom = (event) => {
    setIsClassRoom(event.target.checked);
  };

  //create function to load the food items daa form the database
  const fetchFoodItems = async () => {
    // we will can the api
    const response = await axios.get(url + "/api/food/list"); // we are use get because we created food list by get method
    setAllItems(response.data.data);
    // now the task is to load this function when ever the page is loaded
    // so we add this function in useEffect
  };

  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token } }
    );
    setCartItems(response.data.cartData);
  };

  useEffect(() => {
    // why we are adding is clearly explained in this function definetion
    async function loadData() {
      await fetchFoodItems();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token")); // when the token is avaiable we will set the token in this state so by this if we reload the page also we can access the same token
        await loadCartData(localStorage.getItem("token")); // token is key name
      }
    }
    loadData();
  }, []);

  const contextValue = {
    all_items,
    
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getNumberOfItemsInCart,
    getTotalCartItems,

    // Discount in Cart
    inputValue,
    tempinputValue,
    handleChange,
    handleChangeDiscount,
    discountPrice,
    getTotalPriceAfterDiscountPrice,
    // Place Order
    CheckDelivery,
    CheckBuilding,
    CheckClassRoom,
    handleChangeDelivery,
    handleChangeBuilding,
    handleChangeClassRoom,
    url,
    token,
    setToken,
  };

  return (
    <ItemContext.Provider value={contextValue}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
