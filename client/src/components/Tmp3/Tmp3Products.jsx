import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../../requestMethods";
import Tmp3Product from "./Tmp3Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
  height: 100%;
  margin: 0 auto;
`;

const Tmp3Products = ({ shopId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await publicRequest.get(`/products/?shopId=${shopId}`);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, [shopId]);

  return (
    <Container>
      {products.map((product) => (
        <Tmp3Product product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Tmp3Products;
