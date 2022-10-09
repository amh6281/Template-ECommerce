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

const Container = styled.div`
  margin-top: 10px;
`;

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [category, setCategory] = useState(0);

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
        <ProductList products={allProducts} category={category} />
      </Container>
    </>
  );
};

export default AllProducts;
