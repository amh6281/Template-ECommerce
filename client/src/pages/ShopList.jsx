import { useState, useEffect } from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Shop from "../components/Shop";
import Footer from "../components/Footer";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const ShopList = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    try {
      const fetchShops = async () => {
        const res = await axios.get("http://localhost:5000/api/shops");
        setShops(res.data);
      };
      fetchShops();
    } catch (err) {}
  }, []);

  return (
    <>
      <Navbar />
      <Announcement />
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
