import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 17px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #f8f9fa;
`;

const CatItem = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #222222;
`;

const Tmp3CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item}`}>
        <CatItem>{item}</CatItem>
      </Link>
    </Container>
  );
};

export default Tmp3CategoryItem;
