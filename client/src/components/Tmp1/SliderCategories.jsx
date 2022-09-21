import React, { useState } from "react";
import styled from "styled-components";
import { categories } from "../../tmpData";
import SliderCategoryItem from "./SliderCategoryItem";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 99%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
  margin-left: 11px;
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
  transform: translateX(${(props) => props.slideIndex * -98.5}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  display: flex;
  margin-top: 50px;
  margin-bottom: 15px;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  font-size: 19px;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
  margin-bottom: 3px;
`;

const SliderCategories = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const shop = useSelector((state) => state.shop);
  const categoryItem = shop.currentShop.categoryItem;

  let Arr1 = categoryItem[0]?.catImg;
  let Arr2 = categoryItem[0]?.catValue;
  let Arr3 = [];
  for (let i = 0; i < Arr1?.length; i++) {
    const temp = [Arr1[i], Arr2[i]];
    Arr3.push(temp);
  }

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div>
      <Title>CATEGORY</Title>
      <Hr />
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {Arr3?.map((item) => (
            <Slide key={item.id}>
              <SliderCategoryItem item={item} key={item.id} />
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      </Container>
    </div>
  );
};

export default SliderCategories;
