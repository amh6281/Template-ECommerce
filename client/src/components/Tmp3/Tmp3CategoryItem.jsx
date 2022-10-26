import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 17px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #f8f9fa;
`;

const CatItem = styled.span``;

const Tmp3CategoryItem = () => {
  return (
    <Container>
      <CatItem>카테고리1</CatItem>
    </Container>
  );
};

export default Tmp3CategoryItem;
