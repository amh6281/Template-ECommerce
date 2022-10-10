import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import MidNav from "../components/MidNav";
import TopNav from "../components/TopNav";
import Menu from "../components/Menu";
import { publicRequest } from "../requestMethods";
import { LocalShippingOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import Filter from "../components/Filter";

const Container = styled.div`
  margin-top: 10px;
`;

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [category, setCategory] = useState(0);
  const [filter, setFilter] = useState("");

  //color 다중배열 합치기
  const colors = allProducts.map((item) => item.color).flat();
  const colorsArr = [...new Set(colors.map(JSON.stringify))].map(JSON.parse);

  //product Categories 합치기
  const categories = allProducts.map((item) => item.categories).flat();
  const catArr = [...new Set(categories.map(JSON.stringify))].map(JSON.parse);
  console.log(colorsArr);
  console.log(catArr);

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
  console.log(filter);
  return (
    <>
      <TopNav />
      <MidNav />
      {/* catNav */}
      <Banner />
      <Container>
        <Menu color={category} category={(e) => setCategory(e)} />
        <Filter
          filterColor={colorsArr}
          filterCat={catArr}
          filter={(e) => setFilter(e)}
        />
        <ProductList products={allProducts} category={category} />
      </Container>
    </>
  );
};

export default AllProducts;
