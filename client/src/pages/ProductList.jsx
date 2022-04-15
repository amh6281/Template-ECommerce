import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Container = styled.div``;

const Left = styled.h2`
  flex: 1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 25px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`;

const Wrapper = styled.div`
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Left>의류</Left>
        <Right>
          <MenuItem>New</MenuItem>
          <MenuItem>Highprice</MenuItem>
          <MenuItem>Lowprice</MenuItem>
          <MenuItem>Best</MenuItem>
        </Right>
      </Wrapper>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductList;
