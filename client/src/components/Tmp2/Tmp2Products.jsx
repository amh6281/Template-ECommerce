import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Tmp2ProductsList } from "../../tmpData";
import Tmp2Product from "./Tmp2Product";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { publicRequest } from "../../requestMethods";

const Container = styled.div`
  width: 49%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 1919px) {
    width: 48%;
  }
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
  margin-bottom: 10px;
  margin-left: 480px;
  margin-right: 488px;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 115px;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -49}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  display: flex;
  margin-top: 50px;
  margin-bottom: 15px;
  margin-left: 480px;
  font-size: 24px;
  font-family: sans-serif;
  text-align: center;
  align-items: center;
`;

const Tmp2Products = ({ shopId }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await publicRequest.get(`/products/?shopId=${shopId}`);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, [shopId]);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div>
      <Title>Best Item</Title>
      <Hr />
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {products.map((product) => (
            <Slide key={product.id}>
              <Tmp2Product product={product} key={product.id} />
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      </Container>
    </div>
  );
};

export default Tmp2Products;
