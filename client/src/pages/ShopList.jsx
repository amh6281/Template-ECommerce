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
  padding-bottom: 16px;
  background-color: #e9ecef;
  font-family: ë‚˜ëˆ”ê³ ë”•, NanumGothic, ë§‘ì€ê³ ë”•, MalgunGothic, ë‹ì›€,
    Dotum, Helvetica, Apple SD Gothic Neo, sans-serif;
`;

const Shops = styled.div`
  padding: 14px 43px;
  border-top: 1px solid #e2e5e9;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.3px;
  background-color: #e9ecef;
`;

const Ul = styled.ul`
  margin-top: -6px;
  list-style: none;
  margin: 0;
  display: flex;
  list-style-type: disc;
`;

const List = styled.li`
  width: 25%;
  display: inline-block;
  padding: 6px;
  vertical-align: top;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
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

      <Shops>
        <strong>506,290</strong>개 쇼핑몰
      </Shops>

      <Container>
        <List>
          {shops?.map((shop) => (
            <Shop key={shop._id} shop={shop} />
          ))}
        </List>
      </Container>
      <Footer />
    </>
  );
};

export default ShopList;
