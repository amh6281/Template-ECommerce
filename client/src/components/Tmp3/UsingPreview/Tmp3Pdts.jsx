import React from "react";
import styled from "styled-components";
import { Tmp3ProductsList } from "./tmp3Data";
import Tmp3Pdt from "./Tmp3Pdt";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 71%;
  height: 100%;
  margin: 0 auto;
`;

const Tmp3Pdts = () => {
  return (
    <Container>
      {Tmp3ProductsList.map((item) => (
        <Tmp3Pdt item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Tmp3Pdts;
