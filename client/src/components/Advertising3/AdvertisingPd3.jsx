import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdvertisingList3 from "./AdvertisingList3";

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
  background-color: #ffa500;
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
  color: #ffa500;
  font-size: 12px;
`;

const AdvertisingPd3 = () => {
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
            <TitleImg src="https://image10.coupangcdn.com/image/coupang/main/categoryBest/best_title_food.png" />
            <HotKeyword>
              <KeywordTitle>HOT키워드</KeywordTitle>
              <Keyword>#저탄고지</Keyword>
              <Keyword>#비타민</Keyword>
              <Keyword>#다이어트</Keyword>
              <Keyword>#타트체리</Keyword>
            </HotKeyword>
          </Info>
          <Info2>
            <Slider {...settings}>
              <img src="https://static.coupangcdn.com/va/cmg_paperboy/image/1652666811245/C3_PC1.jpg" />
              <img src="https://static.coupangcdn.com/ea/cmg_paperboy/image/1652664402640/C3_PC-%EB%B3%B5%EC%82%AC%EB%B3%B8%2833%29.jpg" />
              <img src="https://static.coupangcdn.com/da/cmg_paperboy/image/1652666987299/C3_PC%2834%29.jpg" />
              <img src="https://static.coupangcdn.com/ga/cmg_paperboy/image/1652666585186/C3_PC%2867%29.jpg" />
            </Slider>
          </Info2>
          <Info4>
            <AdvertisingList3 />
          </Info4>
        </Info3>
      </Wrapper>
    </Container>
  );
};

export default AdvertisingPd3;
