import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdvertisingList5 from "./AdvertisingList5";

const Container = styled.div`
  width: 55%;
  margin: 0 auto;
  height: 100%;
  position: relative;
  overflow: hidden;
  margin-top: 60px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  margin-bottom: 12px;
`;

const Info = styled.div`
  width: 15%;
  flex-direction: column;
  margin-top: 10px;
`;

const Info2 = styled.div`
  width: 30%;
`;

const Info3 = styled.div`
  display: flex;
`;

const Info4 = styled.div`
  width: 55%;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: ${(props) => props.type === "small" && "18px"};
  color: #696969;
`;

const Hr = styled.hr`
  background-color: #9acd32;
  border: none;
  height: 2px;
`;

const TitleImg = styled.img`
  width: 114px;
  margin: 15px;
`;

const HotKeyword = styled.div``;

const KeywordTitle = styled.h3`
  margin-top: 230px; //바로가기랑 HOT키워드 사이 간격
  margin-bottom: 10px;
  font-size: 16px;
`;

const Keyword = styled.h5`
  border: 2px solid #eee;
  margin-top: 7px;
  margin-right: 40px;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9acd32;
  font-size: 12px;
`;

const AdvertisingPd5 = () => {
  const settings = {
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
      <Wrapper>
        <Hr />
        <Info3>
          <Info>
            <TitleImg src="https://image10.coupangcdn.com/image/coupang/main/categoryBest/best_title_sports.png" />
            <HotKeyword>
              <KeywordTitle>HOT키워드</KeywordTitle>
              <Keyword>#캠핑의자</Keyword>
              <Keyword>#등산스틱</Keyword>
              <Keyword>#파우치</Keyword>
              <Keyword>#실내자전거</Keyword>
            </HotKeyword>
          </Info>
          <Info2>
            <Slider {...settings}>
              <img src="https://thumbnail10.coupangcdn.com/thumbnails/remote/x/image/bannerunit/bannerunit_fd775658-482f-485e-93d5-8cb2597744f3.jpg" />
              <img src="https://thumbnail7.coupangcdn.com/thumbnails/remote/x/image/bannerunit/bannerunit_78d0e290-ae3a-45cf-800d-ff2c66a91cbe.jpg" />
              <img src="https://thumbnail7.coupangcdn.com/thumbnails/remote/x/image/bannerunit/bannerunit_c19c0c78-4892-454b-9c67-7e86052d73fb.jpg" />
              <img src="https://thumbnail8.coupangcdn.com/thumbnails/remote/x/image/bannerunit/bannerunit_c2317667-80a0-4116-bb97-608eb48b30c8.jpg" />
            </Slider>
          </Info2>
          <Info4>
            <AdvertisingList5 />
          </Info4>
        </Info3>
      </Wrapper>
    </Container>
  );
};

export default AdvertisingPd5;
