import styled from "styled-components";
import { hotProducts } from "../data";
import Tmp1BestProduct from "./Tmp1BestProduct";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  display: flex;
  margin-top: 110px;
  margin-bottom: 15px;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  font-size: 19px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
  margin-bottom: 3px;
`;

const Tmp1BestProducts = () => {
  return (
    <div>
      <Title> BEST ITEM </Title>
      <Hr />
      <Container>
        {hotProducts.map((item) => (
          <Tmp1BestProduct item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Tmp1BestProducts;
