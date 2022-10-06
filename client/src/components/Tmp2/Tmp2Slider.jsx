import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  overflow: hidden;
`;

const Tmp2Slider = () => {
  const shop = useSelector((state) => state.shop);
  const banner = shop.currentShop?.bannerImg;

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <Container>
      <Slider {...settings}>
        {banner?.map((item, index) => (
          <img src={item} key={index} />
        ))}
      </Slider>
    </Container>
  );
};

export default Tmp2Slider;
