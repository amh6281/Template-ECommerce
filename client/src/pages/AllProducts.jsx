import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import MidNav from "../components/MidNav";
import TopNav from "../components/TopNav";
import Menu from "../components/Menu";
import { publicRequest } from "../requestMethods";
import { LocalShippingOutlined } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import ProductList from "../components/ProductList";
import Filter from "../components/Filter";
import { Search } from "@material-ui/icons";

const Container = styled.div`
  margin-top: 10px;
`;

const ProductNav = styled.div`
  background-color: #f4f4f4;
`;

const ProductNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 260px;
`;

const ProductCount = styled.span`
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

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [category, setCategory] = useState(0);
  const [filter, setFilter] = useState("");

  const [q, setQ] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await publicRequest.get("/products");
        setAllProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllProducts();
  }, []);

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      navigate(`/products/search?q=${q}`);
    }
  };

  return (
    <>
      <TopNav />
      <MidNav />
      {/* catNav */}
      <Banner />
      <ProductNav>
        <ProductNavWrapper>
          <Left>
            <ProductCount type="number">{allProducts.length}</ProductCount>
            <ProductCount>개 상품</ProductCount>
          </Left>
          <Right>
            <Input
              type="text"
              placeholder="상품 검색"
              onChange={(e) => setQ(e.target.value)}
              onKeyPress={onKeyPress}
            />
            <Search
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/products/search?q=${q}`)}
            />
          </Right>
        </ProductNavWrapper>
      </ProductNav>
      <Container>
        <Menu color={category} category={(e) => setCategory(e)} />
        <Filter
          filter={(e) => setFilter(e)}
          category={category}
          products={allProducts}
          currentFilter={filter}
        />
        <ProductList
          products={allProducts}
          category={category}
          filter={filter}
        />
      </Container>
    </>
  );
};

export default AllProducts;
