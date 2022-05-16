import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdvertisingList2 from "./AdvertisingList2";

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
  background-color: #9932cc;
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
  color: #9400d3;
  font-size: 12px;
`;

const AdvertisingPd2 = () => {
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
            <TitleImg src="https://image8.coupangcdn.com/image/coupang/main/categoryBest/best_title_beauty.png" />
            <HotKeyword>
              <KeywordTitle>HOT키워드</KeywordTitle>
              <Keyword>#수분토너</Keyword>
              <Keyword>#에센스/세럼</Keyword>
              <Keyword>#립틴트</Keyword>
              <Keyword>#톤업크림</Keyword>
            </HotKeyword>
          </Info>
          <Info2>
            <Slider {...settings}>
              <img src="https://thumbnail7.coupangcdn.com/thumbnails/remote/x/image/bannerunit/bannerunit_87c9e568-4cf3-4232-8afc-ab337d5e43c5.jpg" />
              <img src="https://static.coupangcdn.com/ca/cmg_paperboy/image/1652249707318/C3_PC%2854%29.jpg" />
              <img src="https://static.coupangcdn.com/na/cmg_paperboy/image/1652404448201/C3_PC%281%29.jpg" />
              <img src="https://static.coupangcdn.com/ca/cmg_paperboy/image/1652318884972/C3_PC%287%29.jpg" />
            </Slider>
          </Info2>
          <Info4>
            <AdvertisingList2 />
          </Info4>
        </Info3>
      </Wrapper>
    </Container>
  );
};

export default AdvertisingPd2;
