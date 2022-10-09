import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { shopCats } from "../data";

const Container = styled.div`
  background-color: #ffffff;
  padding: 26px 0px 20px;
  width: 100%;
`;
const Wrapper = styled.div`
  padding: 0px 7px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Image = styled.img`
  width: 54px;
  height: 54px;
  margin: 0px 18px 4px;
  object-fit: cover;
  border-radius: 50%;
`;

const Title = styled.h4`
  font-size: 14px;
  color: ${(props) => (props.type === "color" ? "#00C73C" : "#333333")};
  font-weight: ${(props) => (props.type === "color" ? "600" : "500")};
  border-bottom: ${(props) =>
    props.type === "color" ? "1px solid #00C73C" : ""};
`;

const ShopsNav = ({ shopCat, color }) => {
  return (
    <Container>
      <Wrapper>
        {shopCats.map((item) => (
          <CatWrapper key={item.id} onClick={() => shopCat(item.id)}>
            <Image src={item.img} />
            {color === item.id ? (
              <Title type="color">{item.title}</Title>
            ) : (
              <Title>{item.title}</Title>
            )}
          </CatWrapper>
        ))}
      </Wrapper>
    </Container>
  );
};

export default ShopsNav;
