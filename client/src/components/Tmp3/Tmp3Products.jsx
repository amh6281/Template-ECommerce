import React from "react";
import styled from "styled-components";
import Tmp3Product from "./Tmp3Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
  height: 100%;
  margin: 0 auto;
`;

const Tmp3Products = () => {
  return (
    <Container>
      <Tmp3Product />
      <Tmp3Product />
      <Tmp3Product />
      <Tmp3Product />
      <Tmp3Product />
    </Container>
  );
};

export default Tmp3Products;
