import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, emptyCart } from "../redux/cartRedux";
import TopNav from "../components/TopNav";
import MidNav from "../components/MidNav";
import CatNav from "../components/CatNav";
import axios from "axios";

const Container = styled.div`
  background-color: #f4f4f4;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 65%;
  margin: 0 auto;
  padding: 30px 0px 44px;
  background-color: #ffffff;
  border-radius: 16px;
  margin-bottom: 30px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
`;

const Info = styled.div`
  flex: 3;
  padding: 0px 0px 0px 20px;
  display: flex;
  align-items: center;
`;

const DeleteBtn = styled.button`
  width: 20px;
  height: 20px;
  background-color: white;
  border: 1px solid #03c75a;
`;

const ShopName = styled.div``;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;

const ProductName = styled.h3`
  font-size: 12px;
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 61vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "18px"};
`;

const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.user);

  const handleDelete = useCallback((product) => {
    dispatch(
      deleteProduct({
        id: product._id,
        total: product.price * product.quantity,
      })
    );
  }, []);

  const handleReset = () => {
    dispatch(emptyCart());
  };

  return (
    <>
      <TopNav />
      <MidNav />
      <CatNav />
      <Container>
        {currentUser
          ? cart.products.map((product) => (
              <Wrapper>
                {/* <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top> */}
                <Bottom>
                  <Info>
                    <DeleteBtn onClick={() => handleDelete(product)}>
                      X
                    </DeleteBtn>
                    <Product key={product._id}>
                      <ProductDetail>
                        <Image src={product.img} />
                        <Details>
                          <ProductName>{product.title}</ProductName>
                          <ProductSize>{product.size}</ProductSize>
                          <ProductColor color={product.color} />
                        </Details>
                      </ProductDetail>
                      <PriceDetail>
                        <ProductAmountContainer>
                          <Add />
                          <ProductAmount>{product.quantity}</ProductAmount>
                          <Remove />
                        </ProductAmountContainer>
                        <ProductPrice>
                          ₩ {product.price * product.quantity}
                        </ProductPrice>
                      </PriceDetail>
                      <button onClick={() => handleDelete(product)}>X</button>
                    </Product>
                  </Info>
                  {/* <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              {currentUser ? (
                <>
                  {" "}
                  <SummaryItem>
                    <SummaryItemText>총 상품 금액</SummaryItemText>
                    <SummaryItemPrice>₩ {cart.total}</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>배송비</SummaryItemText>
                    <SummaryItemPrice>₩ + 3,500</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>총할인금액</SummaryItemText>
                    <SummaryItemPrice>₩ - 3,500</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem type="total">
                    <SummaryItemText>결제 예정 금액</SummaryItemText>
                    <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                  </SummaryItem>{" "}
                </>
              ) : (
                <>
                  <SummaryItem>
                    <SummaryItemText>총 상품 금액</SummaryItemText>
                    <SummaryItemPrice>₩ 0</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>배송비</SummaryItemText>
                    <SummaryItemPrice>₩ + 0</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>총할인금액</SummaryItemText>
                    <SummaryItemPrice>₩ 0</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem type="total">
                    <SummaryItemText>결제 예정 금액</SummaryItemText>
                    <SummaryItemPrice>0</SummaryItemPrice>
                  </SummaryItem>{" "}
                </>
              )}
              <button onClick={() => handleReset()}>장바구니 초기화</button>
            </Summary> */}
                </Bottom>
              </Wrapper>
            ))
          : ""}
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
