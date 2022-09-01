import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import CategoryNav from "./CategoryNav/CategoryNav";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userRedux";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <CategoryNav />
        </Left>
        <Center>
          <Link to="/" style={{ color: "inherit" }}>
            <Logo>E-Commerce</Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/register" style={{ color: "inherit" }}>
            {currentUser ? (
              <MenuItem>{currentUser.name}</MenuItem>
            ) : (
              <MenuItem>REGISTER</MenuItem>
            )}
          </Link>
          <Link to="/login" style={{ color: "inherit" }}>
            {currentUser ? (
              <MenuItem onClick={handleClick}>LOGOUT</MenuItem>
            ) : (
              <MenuItem>SIGN IN</MenuItem>
            )}
          </Link>
          <Link to="/cart" style={{ color: "inherit" }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
