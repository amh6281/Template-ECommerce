import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  height: 446px;
`;

const Banner = () => {
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
        <img src="https://static.coupangcdn.com/ma/cmg_paperboy/image/1652162630962/220511_C1_%EB%B7%B0%ED%8B%B0%ED%96%A5%EC%88%98%ED%94%84%EB%A1%9C%EB%AA%A8%EC%85%98%28PLP%29_A_SMD-17330_PC.jpg" />
        <img src="https://static.coupangcdn.com/ta/cmg_paperboy/image/1652100089087/%5BPC%5DC1.jpg" />
        <img src="https://static.coupangcdn.com/ta/cmg_paperboy/image/1652154290819/C1_PC1.jpg" />
        <img src="https://image8.coupangcdn.com/image/ccm/banner/6bab58cd49cb9e41acaa8c45ed28208d.png" />
        <img src="https://static.coupangcdn.com/sa/cmg_paperboy/image/1652161493078/PC_C1%282%29.jpg" />
      </Slider>
    </Container>
  );
};

export default Banner;
