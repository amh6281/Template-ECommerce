import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  width: 50%;
  margin: 0 auto;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  display: flex;
  margin-top: 50px;
  margin-bottom: 15px;
  font-size: 24px;
  font-family: sans-serif;
  text-align: center;
  align-items: center;
`;

const NewBusinessIcon = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <Container>
      <Title>🏬 신규 쇼핑몰</Title>
      <Hr />
      <Slider {...settings}>
        <img src="https://user-images.githubusercontent.com/83646986/168792726-a4bd05d6-f268-4af2-adfb-dd7ecb68f38f.png" />
        <img src="https://user-images.githubusercontent.com/83646986/168792752-1a02cc9b-0d3c-4cd2-9278-5e351be006b9.png" />
        <img src="https://user-images.githubusercontent.com/83646986/168792774-65c306ff-938b-4feb-aa45-dcbbabd711c8.png" />
        <img src="https://user-images.githubusercontent.com/83646986/168792798-0edea2d7-0dc5-4f0f-b8eb-6f4eb7490837.png" />
        <img src="https://user-images.githubusercontent.com/83646986/168794738-41df9365-99dd-4db6-8f17-36a770ebaf04.png" />
        <img src="https://user-images.githubusercontent.com/83646986/168794815-f9923f50-7cf2-47c7-bafb-410fd292ff2f.png" />
      </Slider>
    </Container>
  );
};

export default NewBusinessIcon;
