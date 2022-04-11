import React from "react";
import styled from "styled-components";
import { business } from "../data";
import Business from "./Business";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

const Title = styled.h1`
  display: flex;
  margin-top: 100px;
  padding-left: 20px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`;

const Businesses = () => {
  return (
    <div>
      <Title>New Bussiness</Title>
      <Hr />
      <Container>
        {business.map((item) => (
          <Business item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Businesses;
