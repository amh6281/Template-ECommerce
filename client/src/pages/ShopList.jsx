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
import ShopsNav from "../components/ShopsNav";

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
  const [shopCat, setShopCat] = useState(0);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/shops");
        setShops(res.data);
      } catch (err) {}
    };
    fetchShops();
  }, []);

  return (
    <>
      <TopNav />
      <MidNav />
      <Banner />
      <ShopsNav color={shopCat} shopCat={(e) => setShopCat(e)} />
      <ShopNav>
        <ShopCount type="number">{shops.length}</ShopCount>
        <ShopCount>개 쇼핑몰</ShopCount>
      </ShopNav>
      <Container>
        <Shop shops={shops} shopCat={shopCat} />
      </Container>
      <Footer />
    </>
  );
};

export default ShopList;
