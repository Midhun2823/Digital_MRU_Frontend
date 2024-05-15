// let noofstalls = [
//   "continentalcoffee",
//   "sips",
//   "burgerking",
//   "hakka wok",
//   "fivestar",
//   "teawonders",
// ];
import img from "../assets/MRU_LOGO.png";
import img1 from "../assets/Akka.jpg";

export const category_items = [
  {
    category_name: "WinterSpecial",
    category_image: img,
  },
  {
    category_name: "Momos",
    category_image: img,
  },
  {
    category_name: "Noodles",
    category_image: img,
  },
];

export const menu_List = [
  {
    menu_name: "Continental Coffee",
    menu_image: img,
    menu_category: [
      "WinterSpecial",
      "Noodles",
      "Momos",
      "Omelette",
      "Fries",
      "Others",
    ],
  },
  {
    menu_name: "Sips",
    menu_image: img,
    menu_category: ["Shakes", "Mocktails", "Lassi", "Natural Juice", "Tea & Coffee"],
  },
  {
    menu_name: "Burger King",
    menu_image: img,
    menu_category: ["Veg", "Non Veg"],
  },
  {
    menu_name: "Hakka wok",
    menu_image: img,
    menu_category: ["Rice", "Noodles", "Combos Veg", "Combos Non Veg"],
  },
  {
    menu_name: "Five Star",
    menu_image: img,
    menu_category: ["Chicken", "Veg Items", "Snacks"],
  },
  {
    menu_name: "Tea Wonders",
    menu_image: img,
    menu_category: ["Cakes", "Ice Creams", "Chocolates", "Biscuits", "Cool Drinks","Tea & Coffee", "Others"],
  },
];

let discount = [
  { coupoun_id: "", discount_for_coupoun: 0 },
  // { coupoun_id: "M", discount_for_coupoun: 0 },
  // { coupoun_id: "MR", discount_for_coupoun: 0 },
  // { coupoun_id: "MRU", discount_for_coupoun: 0 },
  // { coupoun_id: "MRUC", discount_for_coupoun: 0 },
  // { coupoun_id: "MRUCS", discount_for_coupoun: 0 },
  { coupoun_id: "MRUCSE", discount_for_coupoun: 2 },
];

let all_items = [
  {
    _id: 1,
    name: "Tomato soup",
    type: "Canteen",
    stall_name: "continentalcoffee",
    category: "WinterSpecial",
    image: img,
    new_price: 50,
    old_price: 70,
    des: "Tomato soup is ......",
    item_time: 25,
    available: true,
  },

  {
    _id: 2,
    name: "Hot Badam Milk",
    type: "Canteen",
    stall_name: "continentalcoffee",
    category: "WinterSecial",
    image: img1,
    new_price: 50,
    old_price: 70,
    des: "Hot Badam Milk is ......",
    item_time: 25,
    available: true,
  },
  {
    _id: 3,
    name: "Hot Chocolate",
    type: "Canteen",
    stall_name: "continentalcoffee",
    category: "WinterSpecial",
    image: img,
    new_price: 50,
    old_price: 70,
    des: "Hot Chocolate is ......",
    item_time: 25,
    available: true,
  },
  {
    _id: 4,
    name: "Noodles",
    type: "Canteen",
    stall_name: "continentalcoffee",
    category: "Noodles",
    image: img,
    new_price: 55,
    old_price: 79,
    des: "Noodles is ......",
    item_time: 15,
    available: true,
  },
  {
    _id: 5,
    name: "Panner Momos",
    type: "Canteen",
    stall_name: "continentalcoffee",
    category: "Momos",
    image: img,
    new_price: 75,
    old_price: 95,
    des: "Panner Momos is ......",
    item_time: 10,
    available: true,
  },
  {
    _id: 6,
    name: "Chicken Peri Peri Momos",
    type: "Canteen",
    stall_name: "continentalcoffee",
    category: "Momos",
    image: img,
    new_price: 85,
    old_price: 105,
    des: "Chicken Peri Peri Momos is ......",
    item_time: 10,
    available: true,
  },
  {
    _id: 7,
    name: "Chicken Tikka Momos",
    type: "Canteen",
    stall_name: "continentalcoffee",
    category: "Momos",
    image: img,
    new_price: 85,
    old_price: 105,
    des: "Chicken Tikka Momos is ......",
    item_time: 10,
    available: true,
  },
  {
    _id: 8,
    name: "Chicken Cheese Momos",
    type: "Canteen",
    stall_name: "continentalcoffee",
    category: "Momos",
    image: img,
    new_price: 95,
    old_price: 115,
    des: "Chicken Cheese Momos is ......",
    item_time: 10,
    available: true,
  },
  {
    _id: 9,
    name: "Single Bread Omelette",
    type: "Canteen",
    stall_name: "continentalcoffee",
    category: "Omelette",
    image: img,
    new_price: 45,
    old_price: 65,
    des: "Single Bread Omelette is ......",
    item_time: 10,
    available: true,
  },
  {
    _id: 10,
    name: "Double Bread Omelette",
    type: "Canteen",
    stall_name: "continentalcoffee",
    category: "Omelette",
    image: img,
    new_price: 75,
    old_price: 95,
    des: "Double Bread Omelette is ......",
    item_time: 10,
    available: true,
  },
  {
    _id: 11,
    name: "French Fries",
    type: "Canteen",
    stall_name: "continentalcoffee",
    category: "Fries",
    image: img,
    new_price: 55,
    old_price: 75,
    des: "French Fries is ......",
    item_time: 10,
    available: true,
  },
  {
    _id: 12,
    name: "Chicken Fries",
    type: "Canteen",
    stall_name: "continentalcoffee",
    category: "Fries",
    image: img,
    new_price: 75,
    old_price: 95,
    des: "Chicken Fries is ......",
    item_time: 10,
    available: true,
  },
  {
    _id: 13,
    name: "Garlic Potato Shorts",
    type: "Canteen",
    stall_name: "continentalcoffee",
    category: "Others",
    image: img,
    new_price: 65,
    old_price: 85,
    des: "Garlic Potato Shorts is ......",
    item_time: 10,
    available: true,
  },
  {
    _id: 14,
    name: "Chicken Popcorn",
    type: "Canteen",
    stall_name: "continentalcoffee",
    category: "Others",
    image: img,
    new_price: 75,
    old_price: 95,
    des: "Chicken Popcorn is ......",
    item_time: 10,
    available: true,
  },
  {
    _id: 15,
    name: "Banana Milk Shake",
    type: "Canteen",
    stall_name: "sips",
    category: "Shakes",
    image: img,
    new_price: 59,
    old_price: 79,
    des: "Banana Milk Shake is ......",
    item_time: 15,
    available: true,
  },
  {
    _id: 16,
    name: "Vanilla Milk Shake",
    type: "Canteen",
    stall_name: "sips",
    category: "Shakes",
    image: img,
    new_price: 69,
    old_price: 89,
    des: "Vanilla Milk Shake is ......",
    item_time: 15,
    available: true,
  },
  {
    _id: 17,
    name: "Strawberry Milk Shake",
    type: "Canteen",
    stall_name: "sips",
    category: "Shakes",
    image: img,
    new_price: 69,
    old_price: 89,
    des: "Strawberry Milk Shake is ......",
    item_time: 15,
    available: true,
  },
  {
    _id: 18,
    name: "Butterscotch Milk Shake",
    type: "Canteen",
    stall_name: "sips",
    category: "Shakes",
    image: img,
    new_price: 79,
    old_price: 99,
    des: "Butterscotch Milk Shake is ......",
    item_time: 15,
    available: true,
  },
  {
    _id: 19,
    name: "Mango Milk Shake",
    type: "Canteen",
    stall_name: "sips",
    category: "Shakes",
    image: img,
    new_price: 79,
    old_price: 99,
    des: "Mango Milk Shake is ......",
    item_time: 15,
    available: true,
  },
  {
    _id: 20,
    name: "Sapota Milk Shake",
    type: "Canteen",
    stall_name: "sips",
    category: "Shakes",
    image: img,
    new_price: 79,
    old_price: 99,
    des: "Sapota Milk Shake is ......",
    item_time: 15,
    available: true,
  },
  {
    _id: 21,
    name: "Seethafal Milk Shake",
    type: "Canteen",
    stall_name: "sips",
    category: "Shakes",
    image: img,
    new_price: 79,
    old_price: 99,
    des: "Seethafal Milk Shake is ......",
    item_time: 15,
    available: true,
  },
  {
    _id: 22,
    name: "Oreo Milk Shake",
    type: "Canteen",
    stall_name: "sips",
    category: "Shakes",
    image: img,
    new_price: 79,
    old_price: 99,
    des: "Oreo Milk Shake is ......",
    item_time: 15,
    available: true,
  },
  {
    _id: 23,
    name: "Chocolate Milk Shake",
    type: "Canteen",
    stall_name: "sips",
    category: "Shakes",
    image: img,
    new_price: 89,
    old_price: 109,
    des: "Chocolate Milk Shake is ......",
    item_time: 20,
    available: true,
  },
  {
    _id: 24,
    name: "Peanut Butter Milk Shake",
    type: "Canteen",
    stall_name: "sips",
    category: "Shakes",
    image: img,
    new_price: 89,
    old_price: 109,
    des: "Peanut Butter Milk Shake is ......",
    item_time: 20,
    available: true,
  },
  {
    _id: 25,
    name: "Black Current Milk Shake",
    type: "Canteen",
    stall_name: "sips",
    category: "Shakes",
    image: img,
    new_price: 89,
    old_price: 109,
    des: "Black Current Milk Shake is ......",
    item_time: 20,
    available: true,
  },
  {
    _id: 26,
    name: "Virgin Mojito",
    type: "Canteen",
    stall_name: "sips",
    category: "Mocktails",
    image: img,
    new_price: 59,
    old_price: 79,
    des: "Virgin Mojito is ......",
    item_time: 10,
    available: true,
  },
  {
    _id: 27,
    name: "Coke",
    type: "Canteen",
    stall_name: "sips",
    category: "Mocktails",
    image: img,
    new_price: 59,
    old_price: 79,
    des: "Coke is ......",
    item_time: 10,
    available: true,
  },
  {
    _id: 28,
    name: "Pineapple Mojito",
    type: "Canteen",
    stall_name: "sips",
    category: "Mocktails",
    image: img,
    new_price: 59,
    old_price: 79,
    des: "Pineapple Mojito is ......",
    item_time: 10,
    available: false,
  },
  {
    _id: 29,
    name: "Blue Mojito",
    type: "Canteen",
    stall_name: "sips",
    category: "Mocktails",
    image: img,
    new_price: 69,
    old_price: 89,
    des: "Blue Mojito is ......",
    item_time: 10,
    available: true,
  },
];
export { all_items, discount };
// export default ;