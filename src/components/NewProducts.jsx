import React, { useState } from "react";
import styled from "styled-components";
import { newProducts } from "../data";
import NewProduct from "./NewProduct";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const Title = styled.h1`
  display: flex;
  margin-top: 100px;
  padding-left: 20px;
`;

const NewProducts = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div>
      <Title>NEW</Title>
      <Hr />
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          왼
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {newProducts.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <NewProduct item={item} key={item.id} />
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          오
        </Arrow>
      </Container>
    </div>
  );
};

export default NewProducts;
