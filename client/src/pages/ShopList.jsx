import { useState, useEffect } from "react";
import TopNav from "../components/TopNav";
import MidNav from "../components/MidNav";
import Banner from "../components/Banner";
import Shop from "../components/Shop";
import Footer from "../components/Footer";
import axios from "axios";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
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

  return (
    <>
      <TopNav />
      <MidNav />
      <Banner />
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
