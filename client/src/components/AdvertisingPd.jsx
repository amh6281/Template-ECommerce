import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Info = styled.div`
  width: 10%;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: ${(props) => props.type === "small" && "26px"};
  color: #696969;
`;

const Hr = styled.hr`
  background-color: #ff6347;
  border: none;
  height: 3px;
  margin-bottom: 10px;
`;

const TitleImg = styled.img`
  width: 114px;
`;

const HotKeyword = styled.div``;

const KeywordTitle = styled.h3`
  margin-top: 400px; //바로가기랑 HOT키워드 사이 간격
  margin-bottom: 10px;
`;

const Keyword = styled.h5`
  border: 2px solid #eee;
  margin-top: 7px;
  margin-right: 40px;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d22e60;
`;

const AdvertisingPd = () => {
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
      <Wrapper>
        <Title type="small">HOT! TREND</Title>
        <Title>
          카테고리별 <span style={{ color: "	#1E90FF	" }}>추천 광고상품</span>
        </Title>
        <Hr />

        <Info>
          <TitleImg src="https://image7.coupangcdn.com/image/coupang/main/categoryBest/best_title_health.png" />
          <h5 style={{ fontWeight: 500 }}>바로가기</h5>
          <HotKeyword>
            <KeywordTitle>HOT키워드</KeywordTitle>
            <Keyword>#멀티비타민</Keyword>
            <Keyword>#타트체리</Keyword>
            <Keyword>#비타민D</Keyword>
            <Keyword>#보스웰리아</Keyword>
          </HotKeyword>
          <Slider {...settings}>
            <img src="https://static.coupangcdn.com/aa/cmg_paperboy/image/1652144557336/C3_PC-%EB%B3%B5%EC%82%AC%EB%B3%B8.jpg" />
            <img src="https://static.coupangcdn.com/aa/cmg_paperboy/image/1652144557336/C3_PC-%EB%B3%B5%EC%82%AC%EB%B3%B8.jpg" />
            <img src="https://static.coupangcdn.com/aa/cmg_paperboy/image/1652144557336/C3_PC-%EB%B3%B5%EC%82%AC%EB%B3%B8.jpg" />
            <img src="https://static.coupangcdn.com/aa/cmg_paperboy/image/1652144557336/C3_PC-%EB%B3%B5%EC%82%AC%EB%B3%B8.jpg" />
            <img src="https://static.coupangcdn.com/aa/cmg_paperboy/image/1652144557336/C3_PC-%EB%B3%B5%EC%82%AC%EB%B3%B8.jpg" />
          </Slider>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default AdvertisingPd;
