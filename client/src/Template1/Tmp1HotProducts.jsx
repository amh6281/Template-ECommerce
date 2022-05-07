import styled from "styled-components";
import { hotProducts } from "../data";
import Tmp1HotProduct from "./Tmp1HotProduct";

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

const Tmp1HotProducts = () => {
  return (
    <div>
      <Title> HOT ITEM </Title>
      <Hr />
      <Container>
        {hotProducts.map((item) => (
          <Tmp1HotProduct item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Tmp1HotProducts;
