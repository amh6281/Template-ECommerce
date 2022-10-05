import { useState, useEffect } from "react";
import TopNav from "../components/TopNav";
import MidNav from "../components/MidNav";
import Banner from "../components/Banner";
import Shop from "../components/Shop";
import Footer from "../components/Footer";
import axios from "axios";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import CatNav from "../components/CatNav";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
  margin: -6px 0px 0px;
  padding: 0px 46px 18px;
`;

const ShopNav = styled.div`
  padding: 14px 52px;
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  margin-top: 1px;
`;

const ShopCount = styled.span`
  font-size: 13px;
  font-weight: ${(props) => (props.type === "number" ? "600" : "500")};
  color: #222222;
`;

const ShopList = () => {
  const [shops, setShops] = useState([]);
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/shops?category=${cat}`
            : "http://localhost:5000/api/shops"
        );
        setShops(res.data);
      } catch (err) {}
    };
    fetchShops();
  }, [cat]);

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
    <>
      <TopNav />
      <MidNav />
      <CatNav cat={(cat && cats[cat]) || "전체카테고리"} />
      <Banner />
      <ShopNav>
        <ShopCount type="number">{shops.length}</ShopCount>
        <ShopCount>개 쇼핑몰</ShopCount>
      </ShopNav>
      <Container>
        {shops?.map((shop) => (
          <Shop key={shop._id} shop={shop} />
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default ShopList;
