import styled from "styled-components";
import Tmp1NewProduct from "./Tmp1NewProduct";
import { hotProducts } from "../data";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  display: flex;
  margin-top: 50px;
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

const Tmp1NewProducts = () => {
  return (
    <div>
      <Title> NEW ITEM </Title>
      <Hr />
      <Container>
        {hotProducts.map((item) => (
          <Tmp1NewProduct item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Tmp1NewProducts;
