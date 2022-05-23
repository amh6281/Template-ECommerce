import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdvertisingList4 from "./AdvertisingList4";

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
  background-color: #6a5acd;
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
  color: #6a5acd;
  font-size: 12px;
`;

const AdvertisingPd4 = () => {
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
            <TitleImg src="https://image6.coupangcdn.com/image/coupang/main/categoryBest/best_title_digital.png" />
            <HotKeyword>
              <KeywordTitle>HOT키워드</KeywordTitle>
              <Keyword>#태블릿PC</Keyword>
              <Keyword>#공기청정기</Keyword>
              <Keyword>#게이밍모니터</Keyword>
              <Keyword>#마사지기</Keyword>
            </HotKeyword>
          </Info>
          <Info2>
            <Slider {...settings}>
              <img src="https://static.coupangcdn.com/sa/cmg_paperboy/image/1652679483356/0518_%28%EC%A3%BC%29%ED%94%84%EB%A6%AC%EC%A6%98%EC%BD%94%EB%A6%AC%EC%95%84_C3_PC.jpg" />
              <img src="https://static.coupangcdn.com/la/cmg_paperboy/image/1652155386633/C3_PC-2022-05-10T130253.107.jpg" />
              <img src="https://static.coupangcdn.com/sa/cmg_paperboy/image/1652666469524/C3_PC2%281%29.jpg" />
              <img src="https://static.coupangcdn.com/va/cmg_paperboy/image/1652260477499/%EC%BF%A0%ED%8C%A1-%EB%A9%94%EC%9D%B8%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC%EB%B3%84-%EC%9D%B8%EA%B8%B0%EC%83%81%ED%92%88%EB%B0%B0%EB%84%88_PC_325x600%282%29.jpg" />
            </Slider>
          </Info2>
          <Info4>
            <AdvertisingList4 />
          </Info4>
        </Info3>
      </Wrapper>
    </Container>
  );
};

export default AdvertisingPd4;
