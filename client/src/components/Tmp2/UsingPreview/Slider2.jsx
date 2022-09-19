import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
`;

const Slider2 = () => {
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
        <img src=" https://via.placeholder.com/1920x450" />
        <img src=" https://via.placeholder.com/1920x450" />
      </Slider>
    </Container>
  );
};

export default Slider2;
