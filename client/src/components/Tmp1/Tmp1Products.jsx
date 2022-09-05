import { useEffect, useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../../requestMethods";
import { Tmp1ProductsList } from "../../tmpData";
import Tmp1Product from "./Tmp1Product";

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

const Tmp1Products = ({ shopId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await publicRequest.get(`/products/${shopId}`);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, [shopId]);

  return (
    <div>
      <Title>Best Item</Title>
      <Hr />
      <Container>
        {products.map((product) => (
          <Tmp1Product product={product} key={product.id} />
        ))}
      </Container>
    </div>
  );
};

export default Tmp1Products;
