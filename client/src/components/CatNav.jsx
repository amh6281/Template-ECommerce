import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(emptyShop());
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Link to="/">
              <MenuItem style={{ fontWeight: 500 }} onClick={handleClick}>
                홈
              </MenuItem>
            </Link>
            <div style={{ fontSize: "12px" }}>{">"}</div>
            <MenuItem style={{ fontWeight: 500 }}> {cat}</MenuItem>
          </Left>
        </Wrapper>
      </Container>
    </>
  );
};

export default CatNav;
