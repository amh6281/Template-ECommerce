import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userRedux";
import { emptyShop } from "../redux/shopRedux";
import Build from "./Build";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Container = styled.div`
  height: 40px;
  border-bottom: 1px solid #ededed;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 9px;
  margin-left: 5px;
`;

const LeftMenu = styled.h4`
  font-size: 12px;
  cursor: pointer;
  font-weight: bold;
  color: #343434;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  color: #343434;
`;

const RightMenu = styled.h4`
  font-size: 11px;
  cursor: pointer;
  font-weight: bold;
  color: #343434;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const Icon = styled.img`
  height: 20px;
  width: 20px;
  object-fit: cover;
  border: 1px solid #ededed;
  background-color: #ededed;
  border-radius: 50%;
`;

const MenuItem = styled.div`
  font-size: 11px;
  cursor: pointer;
  font-weight: 600;
`;

const TopNav = () => {
  const [open, setOpen] = useState(false);

  const quantity = useSelector((state) => state.cart.quantity);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Link
              to="/"
              style={{ color: "inherit" }}
              onClick={() => dispatch(emptyShop())}
            >
              <LeftMenu>#SHOP</LeftMenu>
            </Link>
            <LeftMenu
              onClick={() =>
                currentUser.isEntrepreneur
                  ? setOpen(true)
                  : alert("사업자가 아닙니다.")
              }
              style={{ fontWeight: 500 }}
            >
              개설하기
            </LeftMenu>
          </Left>
          <Right>
            <Link to="/register" style={{ color: "inherit" }}>
              {currentUser ? (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "9px" }}
                >
                  <Link
                    to={`/cart/${currentUser?._id}`}
                    style={{ color: "inherit" }}
                  >
                    <Cart>
                      {currentUser ? (
                        <>
                          <Badge
                            fontSize="5"
                            badgeContent={quantity}
                            color="primary"
                            overlap="circular"
                          >
                            <ShoppingCartOutlined />
                          </Badge>
                          <RightMenu style={{ margin: "0px 2px" }}>
                            장바구니
                          </RightMenu>
                        </>
                      ) : (
                        <Badge badgeContent={0} color="primary">
                          <ShoppingCartOutlined />
                        </Badge>
                      )}
                    </Cart>
                  </Link>
                  <User>
                    <Icon src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif" />
                    <RightMenu>{currentUser.username}님</RightMenu>
                  </User>
                </div>
              ) : (
                <RightMenu>REGISTER</RightMenu>
              )}
            </Link>
            <Link to="/login" style={{ color: "inherit" }}>
              {currentUser ? (
                <MenuItem
                  onClick={handleClick}
                  style={{
                    border: "0.5px solid lightgray",
                    backgroundColor: "#fafafa",
                    color: "#888888",
                    padding: "4px",
                  }}
                >
                  로그아웃
                </MenuItem>
              ) : (
                <MenuItem>SIGN IN</MenuItem>
              )}
            </Link>
            <MenuItem style={{ fontWeight: 500 }}>고객센터</MenuItem>
            <Link to="/mypage" style={{ color: "inherit" }}>
              <MenuItem style={{ fontWeight: 500 }}>마이페이지</MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
      {open && <Build setOpen={setOpen} />}
    </>
  );
};

export default TopNav;
