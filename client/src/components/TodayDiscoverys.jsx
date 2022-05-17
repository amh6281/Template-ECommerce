import React from "react";
import styled from "styled-components";
import TodayDisCoverey from "./TodayDiscovery";
import { itemData } from "../data";
import { itemData2 } from "../data";

const Container = styled.div`
  margin-left: 475px;
  cursor: pointer;
`;

const ImgContainer = styled.div``;

const Wrapper = styled.div`
  margin: 5px;
`;

const BImage = styled.div`
  display: flex;
`;

const Image = styled.div`
  display: flex;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
  margin-bottom: 10px;
  margin-left: 475px;
  margin-right: 475px;
`;

const Title = styled.h1`
  display: flex;
  margin-top: 50px;
  margin-bottom: 15px;
  margin-left: 475px;
  font-size: 24px;
  font-family: sans-serif;
  text-align: center;
  align-items: center;
`;

const TodayDiscoverys = () => {
  return (
    <div>
      <Title>
        🔭 오늘의 발견
        <span style={{ fontSize: "18px", marginLeft: "5px" }}>
          {" "}
          | 오늘의 가장 HOT한 상품
        </span>
      </Title>
      <Hr />
      <Container>
        <ImgContainer>
          <BImage>
            {itemData.map((item) => (
              <Wrapper key={item.id}>
                <TodayDisCoverey item={item} key={item.id} />
              </Wrapper>
            ))}
          </BImage>
          <Image>
            {itemData2.map((item) => (
              <Wrapper key={item.id}>
                <TodayDisCoverey item={item} key={item.id} />
              </Wrapper>
            ))}
          </Image>
        </ImgContainer>
      </Container>
    </div>
  );
};

export default TodayDiscoverys;
