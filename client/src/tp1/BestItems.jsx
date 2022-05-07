import styled from "styled-components";
import { popularProducts } from "../data";
import BestItem from "./BestItem";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  display: flex;
  margin-top: 100px;
  padding-left: 20px;
`;

const BestItems = () => {
  return (
    <div>
      <Title> Best </Title>
      <Container>
        {popularProducts.map((item) => (
          <BestItem item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default BestItems;
