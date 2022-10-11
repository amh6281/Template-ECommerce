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

  return (
    <>
      <TopNav />
      <MidNav />
      {/* catNav */}
      <Banner />
      <Container>
        <Menu color={category} category={(e) => setCategory(e)} />
        <Filter
          filter={(e) => setFilter(e)}
          category={category}
          products={allProducts}
        />
        <ProductList products={allProducts} category={category} />
      </Container>
    </>
  );
};

export default AllProducts;
