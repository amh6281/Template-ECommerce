import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Tmp3CategoryItem from "./Tmp3CategoryItem";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 1290px;
  height: 100%;
  margin: 0 auto;
  margin-top: -6px;
`;

const Tmp3Categories = () => {
  const shop = useSelector((state) => state.shop);
  const category = shop.currentShop?.categoryItem[0].catValue;

  return (
    <Container>
      {category?.map((item, index) => (
        <Tmp3CategoryItem key={index} item={item} />
      ))}
    </Container>
  );
};

export default Tmp3Categories;
