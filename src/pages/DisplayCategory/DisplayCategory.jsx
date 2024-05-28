import React, { useContext } from "react";
import { ItemContext } from "../../Context/ItemContext";
import ItemStyleOne from "../../Components/Item/ItemStyleOne";
// import { category_items } from "../Data/Data";

const DisplayCategory = (props) => {
  const { all_items,url } = useContext(ItemContext);
  const uniques = [
    ...new Set(
      all_items.map((obj) => {
        return obj.category;
      })
    ),
  ];
  console.log(uniques);

  return (
    <div>
      {/* <div className="hstack gap-3">
        // use for categoey navbar build this after completing time in video 1hr
        45mins
        // also check 2hr 13mins clip
        {uniques.map((name) =>
          all_items.map((ele) => {
            if (name === ele.category && props.stall_name === ele.stall_name) {
              category_items.map((element) => {
                if (element.category_name === ele.category) {
                  return (
                    <div>
                      <div className="h1">{name}</div>
                    </div>
                  );
                } else {
                  return null;
                }
              });
            } else {
              return null;
            }
          })
        )}
      </div> */}
      <marquee
        className=" bg-light p-1 border border-start-0 border-end-0 border-dark"
        behavior="scroll"
        direction="left"
      >
        {uniques.map((name) =>
          all_items.map((ele, index) => {
            if (name === ele.category && props.stall_name === ele.stall_name) {
              return (
                <img
                  src={url + "/images/" + ele.image}
                  width="102"
                  height="102"
                  className="rounded-pill me-5 border border-danger border-2"
                />
              );
            } else {
              return null;
            }
          })
        )}
      </marquee>

      {/* <div className="container">
        <div className="row">
          {uniques.map((name) =>
            all_items.map((ele, index) => {
              if (
                name === ele.category &&
                props.stall_name === ele.stall_name
              ) {
                return (
                  <div className="col-md-4 p-4">
                    {name}
                  </div>
                );
              } else {
                return null;
              }
            })
          )}
        </div>
      </div> */}

      <div className="container">
        <div className="row">
          {uniques.map((name) =>
            all_items.map((ele, index) => {
              if (
                name === ele.category &&
                props.stall_name === ele.stall_name
              ) {
                return (
                  <div className="col-md-4 p-4">
                    <ItemStyleOne
                      key={index}
                      id={ele._id}
                      name={ele.name}
                      type={ele.type}
                      stall_name={ele.stall_name}
                      category={ele.category}
                      image={ele.image}
                      new_price={ele.new_price}
                      old_price={ele.old_price}
                      des={ele.des}
                      item_time={ele.item_time}
                      available={ele.available}
                    />
                  </div>
                );
              } else {
                return null;
              }
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayCategory;

// import React, { useContext } from 'react'
// import { ItemsContext } from '../Context/ItemsContext'

// const DisplayCategory = (props) => {
//     const {all_items} = useContext(ItemsContext)
//     console.log(all_items)
//   return (
//     <div>
//     <h1>DisplayCategory</h1>
//       {/* {all_items.map((ele, i) => {
//         if (props.stall_name === ele.stall_name) {
//           return <h1>{ele.name}</h1>;
//         } else {
//           return null;
//         }
//       })} */}
//     </div>
//   );
// }

// export default DisplayCategory
