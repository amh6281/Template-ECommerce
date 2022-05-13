import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdvertisingList from "./Advertising/AdvertisingList";

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
  background-color: #ff6347;
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
  color: #d22e60;
  font-size: 12px;
`;

const AdvertisingPd = () => {
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
        <TitleWrapper>
          <Title type="small">HOT! TREND</Title>
          <Title style={{ fontSize: "24px" }}>
            카테고리별 <span style={{ color: "#1E90FF" }}>추천 광고상품</span>
          </Title>
        </TitleWrapper>
        <Hr />
        <Info3>
          <Info>
            <TitleImg src="https://image7.coupangcdn.com/image/coupang/main/categoryBest/best_title_health.png" />
            <HotKeyword>
              <KeywordTitle>HOT키워드</KeywordTitle>
              <Keyword>#멀티비타민</Keyword>
              <Keyword>#타트체리</Keyword>
              <Keyword>#비타민D</Keyword>
              <Keyword>#보스웰리아</Keyword>
            </HotKeyword>
          </Info>
          <Info2>
            <Slider {...settings}>
              <img src="https://static.coupangcdn.com/aa/cmg_paperboy/image/1652144557336/C3_PC-%EB%B3%B5%EC%82%AC%EB%B3%B8.jpg" />
              <img src="https://static.coupangcdn.com/na/cmg_paperboy/image/1651822493243/C3_PC%2841%29.jpg" />
              <img src="https://static.coupangcdn.com/na/cmg_paperboy/image/1651800242729/C3_PC%2819%29.jpg" />
              <img src="https://static.coupangcdn.com/ra/cmg_paperboy/image/1652166823337/C3_PC%2849%29.jpg" />
              <img src="https://static.coupangcdn.com/ca/cmg_paperboy/image/1651210827242/C3_PC.jpg" />
            </Slider>
          </Info2>
          <Info4>
            <AdvertisingList />
          </Info4>
        </Info3>
      </Wrapper>
    </Container>
  );
};

export default AdvertisingPd;
