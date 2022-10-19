import { useState, useEffect } from "react";
import TopNav from "../components/TopNav";
import MidNav from "../components/MidNav";
import Banner from "../components/Banner";
import Shop from "../components/Shop";
import Footer from "../components/Footer";
import axios from "axios";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import CatNav from "../components/CatNav";
import ShopsNav from "../components/ShopsNav";
import { Search } from "@material-ui/icons";

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

const ShopCount = styled.span`
  font-size: 13px;
  font-weight: ${(props) => (props.type === "number" ? "600" : "500")};
  color: #222222;
`;

const Left = styled.div`
  padding: 14px 52px;
  display: flex;
  align-items: center;
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

const ShopList = () => {
  const [shops, setShops] = useState([]);
  const [shopCat, setShopCat] = useState(0);
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/shops");
        setShops(res.data);
      } catch (err) {}
    };
    fetchShops();
  }, []);

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      navigate(`/shops/search?q=${q}`);
    }
  };

  return (
    <>
      <TopNav />
      <MidNav />
      <Banner />
      <ShopsNav color={shopCat} shopCat={(e) => setShopCat(e)} />
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
            onClick={() => navigate(`/shops/search?q=${q}`)}
          />
        </Right>
      </ShopNav>
      <Container>
        <Shop shops={shops} shopCat={shopCat} />
      </Container>
      <Footer />
    </>
  );
};

export default ShopList;
