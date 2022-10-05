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
  width: 280px;
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

const Container = styled.div``;

const Wrapper = styled.div`
  flex: 1;
  margin: 5px;
  width: 280px;
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 280px;
  height: 100%;
  z-index: 2;
  object-fit: cover;
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

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 280px;
  height: 50px;
  margin-bottom: 100px;
`;

const Title = styled.h5`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-left: 5px;
`;

const SizeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Size = styled.h6`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  padding-left: 5px;
  color: #666666;
`;

const Colors = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;
  gap: 5px;
`;

const ColorItem = styled.div`
  display: flex;
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
`;

const Price = styled.h5`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-left: 5px;
  font-size: 14px;
`;

const Product = ({ item }) => {
  return (
    <div style={{ alignItems: "center" }}>
      {/* <Container>
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <Link to={`/product/${item._id}`} style={{ color: "inherit" }}>
              <SearchOutlined />
            </Link>
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
      <Title>{item.title}</Title>
      <Size>{item.size}</Size>
      <Colors>
        {item.color?.map((c) => (
          <ColorItem color={c} />
        ))}
      </Colors>
      <Price>{item.price}원</Price>
      <br /> */}
      <Container>
        <Wrapper>
          <Image src={item.img} />
          <Info>
            <Icon>
              <ShoppingCartOutlined />
            </Icon>
            <Icon>
              <Link to={`/product/${item._id}`} style={{ color: "inherit" }}>
                <SearchOutlined />
              </Link>
            </Icon>
            <Icon>
              <FavoriteBorderOutlined />
            </Icon>
          </Info>
        </Wrapper>
        <Detail>
          <Title>{item.title}</Title>
          <Colors>
            {item.color?.map((c) => (
              <ColorItem color={c} />
            ))}
          </Colors>
          <SizeWrapper>
            {item.size.map((i) => (
              <Size>{i + " "}</Size>
            ))}
          </SizeWrapper>
          <Price>
            {item.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
          </Price>
        </Detail>
      </Container>
    </div>
  );
};

export default Product;
