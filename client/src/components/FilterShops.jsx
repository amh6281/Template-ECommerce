import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 6px;
`;

const Wrapper = styled.div`
  padding: 38px 20px 38px 8px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  border-radius: 4px;
`;

const Logo = styled.img`
  width: 72px;
  height: 72px;
  object-fit: cover;
  margin: 5px 14px;
`;

const Info = styled.div`
  padding: 0px 0px 0px 14px;
  width: 312px;
  height: 82px;
`;

const ShopName = styled.h4`
  font-size: 15px;
  font-weight: 600;
  color: #222222;
`;

const ShopDesc = styled.h4`
  font-size: 13px;
  font-weight: 500;
  color: #666666;
`;

const ShopInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ShopCat = styled.h4`
  font-size: ${(props) => (props.type === "icon" ? "10px" : "12px")};
  font-weight: 400;
  color: ${(props) => (props.type === "icon" ? "#E6E6E6" : "#999999")};
  margin: 8px 0px 0px;
`;

const FilterShops = ({ shops }) => {
  const cats = [
    "",
    "남성패션",
    "여성패션",
    "가구/인테리어",
    "화장품/미용",
    "식품",
    "출산/유아동",
    "반려동물용품",
    "생활/주방용품",
    "가전",
    "디지털",
    "컴퓨터",
    "스포츠/레저",
    "건강/의료용품",
    "자동차/공구",
    "취미/문구/악세",
    "도서",
  ];

  return (
    <Link to={`/shop/${shops._id}`}>
      <Container>
        <Wrapper>
          <Logo src={shops.logo} />
          <Info>
            <ShopName>{shops.shopname}</ShopName>
            <ShopDesc>{shops.desc}</ShopDesc>
            <ShopInfo>
              <ShopCat>{cats[shops.category]}</ShopCat>
            </ShopInfo>
          </Info>
        </Wrapper>
      </Container>
    </Link>
  );
};

export default FilterShops;
