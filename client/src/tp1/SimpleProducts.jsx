import styled from "styled-components";
import { detailProducts } from "../data";
import SimpleProduct from "./SimpleProduct";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  display: flex;
  margin-top: 25px;
  margin-left: 10px;
`;

const SimpleProducts = () => {
  return (
    <div>
      <Title> 뭐라할까 </Title>
      <Container>
        {detailProducts.map((item) => (
          <SimpleProduct item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default SimpleProducts;
