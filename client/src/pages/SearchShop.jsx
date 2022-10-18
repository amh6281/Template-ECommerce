import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
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
  margin: 0px 0px 0px;
  padding: 18px 46px 18px;
`;

const SearchShop = () => {
  const [shops, setShops] = useState([]);
  const query = useLocation().search;

  useEffect(() => {
    const fetchShops = async () => {
      const res = await publicRequest.get(`/shops/search${query}`);
      setShops(res.data);
    };
    fetchShops();
  }, [query]);

  return (
    <>
      <TopNav />
      <MidNav />
      <Banner />
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
