import React from "react";
import styled from "styled-components";
import { business } from "../data";
import Business from "./Business";

const Container = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const Businesses = () => {
  return (
    <div>
      <Title>New Bussiness</Title>
      <Container>
        {business.map((item) => (
          <Business item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Businesses;
