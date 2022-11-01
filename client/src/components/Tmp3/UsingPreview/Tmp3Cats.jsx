import React from "react";
import styled from "styled-components";
import Tmp3Cat from "./Tmp3Cat";
import { categories } from "./tmp3Data";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 1030px;
  height: 100%;
  margin: 0 auto;
  margin-top: -6px;
`;

const Tmp3Cats = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Tmp3Cat item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Tmp3Cats;
