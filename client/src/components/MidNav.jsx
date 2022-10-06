import React from "react";
import styled from "styled-components";
import { Search } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 65px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ededed;
`;

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 30px;
  width: 150px;
  margin: 0px 20px 0px 0px;
`;

const Shopname = styled.h4`
  height: 30px;
  width: 150px;
  margin: 0px 20px 0px 0px;
  font-size: 22px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  font-size: 14px;
  font-weight: bold;
  outline: none;
  width: 300px;
  height: 35px;
`;

const Icon = styled.div`
  color: white;
  padding: 18px 10px;
  background-color: gray;
  height: 35px;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Menu = styled.h4`
  font-size: 13px;
  font-weight: bold;
  color: ${(props) => (props.type === "icon" ? "#ededed" : "#343434")};
`;

const MidNav = () => {
  const shop = useSelector((state) => state.shop);
  const path = useLocation().pathname.split("/")[1];
  const main = useLocation().pathname;

  return (
    <Container>
      <Wrapper>
        <Left>
          {shop.currentShop &&
          path !== "shops" &&
          path !== "cart" &&
          path !== "order" &&
          main !== "/" ? (
            <Link
              to={`/shop/${shop.currentShop._id}`}
              style={{ color: "inherit" }}
            >
              <Shopname>{shop.currentShop?.shopname}</Shopname>
            </Link>
          ) : (
            <Link to="/" style={{ color: "inherit" }}>
              <Logo
                src="https://user-images.githubusercontent.com/83646986/194276006-b72d9b05-a894-46cc-8ef1-09a15c173667.png"
                alt=""
              />
            </Link>
          )}
          <Input type="text" />
          <Icon>
            <Search />
          </Icon>
        </Left>
        <Right>
          <Link to="/shops" style={{ color: "inherit" }}>
            <Menu>몰 전체보기</Menu>
          </Link>
          <Menu type="icon">|</Menu>
          <Menu>상품 바로가기</Menu>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default MidNav;
