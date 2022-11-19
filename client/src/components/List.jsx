import React from "react";
import ListItem from "./ListItem";

const List = ({ list }) => {
  return (
    <div>
      <h1>{list.title}</h1>
      {list.products.map((item, i) => (
        <ListItem index={i} item={item} />
      ))}
    </div>
  );
};

export default List;
