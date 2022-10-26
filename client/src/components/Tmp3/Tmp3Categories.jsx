import React from "react";
import styled from "styled-components";
import Tmp3CategoryItem from "./Tmp3CategoryItem";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 1290px;
  height: 100%;
  margin: 0 auto;
`;

const Tmp3Categories = () => {
  return (
    <Container>
      <Tmp3CategoryItem />
      <Tmp3CategoryItem />
      <Tmp3CategoryItem />
      <Tmp3CategoryItem />
    </Container>
  );
};

export default Tmp3Categories;
