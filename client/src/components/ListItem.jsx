import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { publicRequest } from "../requestMethods";

const ListItem = ({ index, item }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + item);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [item]);

  return (
    <div>
      <h2>{product.title}</h2>
      <h4>{product.price}</h4>
    </div>
  );
};

export default ListItem;
