import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { emptyShop } from "../redux/shopRedux";

const Container = styled.div`
  background: #f0f0f0;
  height: 32px;
`;

const Wrapper = styled.div`
  width: 50%;
  height: 32px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MenuItem = styled.div`
  font-size: 12px;
  cursor: pointer;
  font-weight: 600;
  align-items: center;

  &:hover {
    color: #3535fa;
  }
`;

const CatNav = ({ cat }) => {
  const shop = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[1];
  const category = useLocation().pathname.split("/")[2];

  const handleClick = (e) => {
    dispatch(emptyShop());
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Link to="/" style={{ color: "inherit" }}>
              <MenuItem style={{ fontWeight: 500 }} onClick={handleClick}>
                홈
              </MenuItem>
            </Link>
            <div style={{ fontSize: "12px" }}>{">"}</div>
            {shop.currentShop && path !== ("shops" && "cart") ? (
              <>
                <Link
                  to={`/shop/${shop.currentShop._id}`}
                  style={{ color: "inherit" }}
                >
                  <MenuItem style={{ fontWeight: 500 }}>
                    {shop.currentShop.shopname}
                  </MenuItem>
                </Link>
                {path === "products" ? (
                  <>
                    <div style={{ fontSize: "12px" }}>{">"}</div>
                    <MenuItem style={{ fontWeight: 500 }}>
                      {decodeURI(category)}
                    </MenuItem>
                  </>
                ) : (
                  ""
                )}
              </>
            ) : path === "cart" ? (
              <MenuItem style={{ fontWeight: 500 }}>장바구니</MenuItem>
            ) : (
              <MenuItem style={{ fontWeight: 500 }}>{cat}</MenuItem>
            )}
          </Left>
        </Wrapper>
      </Container>
    </>
  );
};

export default CatNav;
