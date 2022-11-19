import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: 12px;
  font-weight: initial;
  display: flex;
  justify-content: center;
`;

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
    <Container>
      <Image src={product.img} />
      <Title>{product.title}</Title>
    </Container>
  );
};

export default ListItem;
