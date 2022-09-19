import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../../tmpData";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 52vh;
  display: flex;
  position: relative;
  overflow: hidden;
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
  top: -35px;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Image = styled.img`
  height: 92%;
`;

const Tmp1Slider = () => {
  const shop = useSelector((state) => state.shop);
  const banner = shop.currentShop.bannerImg;

  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : banner.length - 1);
    } else {
      setSlideIndex(slideIndex < banner.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {banner.map((item) => (
          <Image src={item} />
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Tmp1Slider;
