import React from "react";
import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
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

const Name = styled.h3`
  display: flex;
  align-items: center;
  padding-left: 5px;
  justify-content: center;
  margin-bottom: 10px;
`;

const Desc = styled.h5`
  display: flex;
  align-items: center;
  padding-left: 7px;
  padding-bottom: 50px;
  justify-content: center;
`;

const Shop = ({ shop }) => {
  return (
    <div style={{ alignItems: "center" }}>
      <Container>
        <Wrapper>
          <Image src={shop.logo} />
          <Info>
            <Icon>
              <ShoppingCartOutlined />
            </Icon>
            <Icon>
              <Link to={`/shop/${shop._id}`} style={{ color: "inherit" }}>
                <SearchOutlined />
              </Link>
            </Icon>
            <Icon>
              <FavoriteBorderOutlined />
            </Icon>
          </Info>
        </Wrapper>
        <Name>{shop.shopname}</Name>
        <Desc>{shop.desc}</Desc>
        <br />
      </Container>
    </div>
  );
};

export default Shop;
