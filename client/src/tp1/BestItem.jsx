import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
const Title = styled.h5`
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

const Size = styled.h6`
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-bottom: 30px;
`;

const Price = styled.h5`
  display: flex;
  align-items: center;
  padding-left: 14px;
  padding-bottom: 50px;
`;

const Container = styled.div`
  flex: 1;
  margin-left: 13px;
  min-width: 280px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  width: 280px;
  height: 300px;
  z-index: 2;
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

const BestItem = ({ item }) => {
  return (
    <div style={{ alignItems: "center" }}>
      <Container>
        <Circle />
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
    </div>
  );
};

export default BestItem;
