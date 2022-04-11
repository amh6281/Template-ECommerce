import styled from "styled-components";
import { detailProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  margin: -15px 150px 0px 150px;
  align-items: center;
  justify-content: center;
`;

const Products = () => {
  return (
    <Container>
      {detailProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
