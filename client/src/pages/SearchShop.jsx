import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Search } from "@material-ui/icons";
import { publicRequest } from "../requestMethods";
import FilterShops from "../components/FilterShops";
import TopNav from "../components/TopNav";
import MidNav from "../components/MidNav";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
  margin: -6px 0px 0px;
  padding: 18px 46px 18px;
  border-top: 1px solid #ededed;
`;

const ShopNav = styled.div`
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
`;

const Left = styled.div`
  padding: 14px 52px;
  display: flex;
  align-items: center;
`;

const ShopCount = styled.span`
  font-size: 13px;
  font-weight: ${(props) => (props.type === "number" ? "600" : "500")};
  color: #222222;
`;

const Right = styled.div`
  margin-right: 52px;
  padding: 6px 35px 6px 12px;
  width: 195px;
  height: 30px;
  border-radius: 50px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 12px;
`;

const SearchShop = () => {
  const [shops, setShops] = useState([]);
  const query = useLocation().search;
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  useEffect(() => {
    const fetchShops = async () => {
      const res = await publicRequest.get(`/shops/search${query}`);
      setShops(res.data);
    };
    fetchShops();
  }, [query]);

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      navigate(`/search?q=${q}`);
    }
  };

  return (
    <>
      <TopNav />
      <MidNav />
      <Banner />
      <ShopNav>
        <Left>
          <ShopCount type="number">{shops.length}</ShopCount>
          <ShopCount>개 쇼핑몰</ShopCount>
        </Left>
        <Right>
          <Input
            type="text"
            placeholder="입점몰 검색"
            onChange={(e) => setQ(e.target.value)}
            onKeyPress={onKeyPress}
          />
          <Search
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/search?q=${q}`)}
          />
        </Right>
      </ShopNav>
      <Container>
        {shops.map((shop) => (
          <FilterShops key={shop._id} shops={shop} />
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default SearchShop;
