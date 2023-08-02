import { Fragment, useState } from "react";

function ListGroup() {
  let items = ["new york", "san fransisco", "tokyo", "london", "paris"];

  let [selectedIndex, setSelectedIndex] = useState(-1);

  //   items = [];

  return (
    <>
      <h1>lists </h1>

      <ul className="list-group">
        {/* {items.length === 0 && <p>no items found</p>} */}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
