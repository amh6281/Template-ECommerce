import React from "react";
import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 280px;
  height: 100%;
  z-index: 2;
  object-fit: contain;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Title = styled.h5`
  display: flex;
  align-items: center;
  padding-left: 5px;
`;

const Size = styled.h6`
  display: flex;
  align-items: center;
  padding-left: 7px;
  padding-bottom: 30px;
`;

const Price = styled.h5`
  display: flex;
  align-items: center;
  padding-left: 7px;
  padding-bottom: 50px;
`;

const Tmp1Product = ({ item }) => {
  return (
    <div style={{ alignItems: "center" }}>
      <Container>
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
      <Title>{item.title}</Title>
      <Size>{item.size}</Size>
      <Price>{item.price}원</Price>
      <br />
    </div>
  );
};

export default Tmp1Product;
