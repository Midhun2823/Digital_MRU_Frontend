import React from "react";
import ExploreMenu from "../ExploreMenu/ExploreMenu";

const CafeteriaMenu = () => {
  // const { all_items } = useContext(ItemsContext);
  // const uniques = [
  //   ...new Set(
  //     all_items.map((obj) => {
  //       return obj.stall_name;
  //     })
  //   ),
  // ];
  // console.log(uniques);
  return (
    <div>
      <ExploreMenu/>
      {/* <h1>{uniques}</h1> */}
    </div>
  );
};

export default CafeteriaMenu;
