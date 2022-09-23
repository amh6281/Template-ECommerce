import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, emptyCart } from "../redux/cartRedux";
import TopNav from "../components/TopNav";
import MidNav from "../components/MidNav";
import CatNav from "../components/CatNav";
import axios from "axios";

const Empty = styled.div`
  width: 65%;
  margin: 0 auto;
  padding: 10px 0px;
`;

const EmptyBtn = styled.button`
  font-size: 16px;
  color: #222222;
  border: none;
  background-color: white;
  font-weight: 600;
  margin-left: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid #03c75a;
  padding: 5px 11px;
  border-color: #d5dade;
  border-radius: 4px;
`;

const Container = styled.div`
  background-color: #f4f4f4;
  padding: 30px 0px 44px;
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

const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProductInfo = styled.div`
  padding: ${(props) =>
    props.type === "first" ? "0px 0px 20px 80px" : "0px 0px 20px 20px"};
  border-right: ${(props) =>
    props.type === "delivery" ? "" : "1px solid #ededed"};
  width: ${(props) =>
    props.size === "s" ? "18%" : props.size === "m" ? "25%" : "40%"};
`;

const Hr = styled.hr`
  width: 92%;
  margin: 0 auto;
  border: ${(props) =>
    props.type === "bottom" ? "1px solid #ededed" : "1px solid #383d4a"};
`;

const Delivery = styled.div`
  display: flex;
  align-items: center;
`;

const DeliveryText = styled.h3`
  color: ${(props) => (props.type === "time" ? "#333333" : "#0abe16")};
  font-size: ${(props) => (props.type === "delivery" ? "11px" : "12px")};
  margin: ${(props) => (props.type === "time" ? "0px 0px" : "0px 4px 0px 0px")};
  padding: 0px 2px;
  border: ${(props) => (props.type === "delivery" ? "1px solid #0abe16" : "")};
  width: ${(props) => (props.type === "delivery" ? "51" : "103.5px")};
  font-weight: 500;
`;

const Details = styled.div`
  display: flex;
  margin: 10px 0px 0px 0px;
  gap: 12px;
`;

const Image = styled.img`
  width: 100px;
  height: 105px;
  border-radius: 4px;
`;

const ProductName = styled.h3`
  width: 296px;
  height: 103px;
  font-size: 14px;
`;

const ProductPrice = styled.h3`
  width: 100px;
  height: 100px;
  font-size: 14px;
  margin: 6px 0px 0px 0px;
`;

const ProductOption = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.type === "price" ? "column" : "")};
  width: 280px;
  height: 143px;
  gap: 5px;
`;

const ProductColor = styled.div`
  font-size: 12px;
  color: #222222;
  padding: 12px 0px 0px 0px;
`;

const ProductSize = styled.span`
  font-size: 12px;
  color: #222222;
  padding: 12px 0px 0px 0px;
`;

const Price = styled.h3`
  font-size: ${(props) => (props.type === "number" ? "15px" : "12px")};
  color: #000000;
  position: relative;
  top: 30px;
  left: ${(props) => (props.type === "number" ? "61px" : "64px")};
`;

const OrderBtn = styled.button`
  font-size: ${(props) => (props.type === "total" ? "16px" : "12px")};
  border: 1px solid #03c75a;
  font-weight: bold;
  color: #03c75a;
  background-color: white;
  width: ${(props) => (props.type === "total" ? "220px" : "80px")};
  padding: ${(props) => (props.type === "total" ? "10px 0px" : "3px 12px")};
  border-radius: 4px;
  position: ${(props) => (props.type === "total" ? "" : "relative")};
  top: ${(props) => (props.type === "total" ? "" : "35px")};
  left: ${(props) => (props.type === "total" ? "" : "50px")};
`;

const DeliberyPrice = styled.h3`
  color: ${(props) => (props.type === "price" ? "#444444" : "#000000")};
  font-size: ${(props) => (props.type === "price" ? "12px" : "15px")};
  position: relative;
  top: 30px;
  left: ${(props) => (props.position === "center" ? "55px" : "58px")};
`;

const DeleteBtn = styled.button`
  width: 20px;
  height: 20px;
  background-color: white;
  border: 1px solid #03c75a;
  position: relative;
  top: 57.5px;
  left: -30px;
`;

const Order = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 50px;
  justify-content: center;
  padding-top: 30px;
`;

const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OrderText = styled.h3`
  display: ${(props) => (props.display === "flex" ? "flex" : "")};
  align-items: ${(props) => (props.display === "flex" ? "center" : "")};
  color: ${(props) =>
    props.color === "red"
      ? "#F85151"
      : props.color === "green"
      ? "#00C63A"
      : "#222222"};
  font-size: ${(props) =>
    props.size === "m" ? "16px" : props.size === "x" ? "18px" : "14px"};
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: -10px;
  color: #d5dade;
`;

const Line = styled.hr`
  border-left: 1px solid #d1d4d7;
  height: 45px;
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
      <Empty>
        <EmptyBtn onClick={handleReset}>
          <ClearOutlinedIcon
            style={{ color: "#d5dade", margin: "0px 3px 0 -3px" }}
          />
          전체 삭제
        </EmptyBtn>
      </Empty>

      <Container>
        <Wrapper>
          <Hr />
          {currentUser
            ? cart.products.map((product) => (
                <>
                  <ProductWrapper>
                    <ProductInfo type="first">
                      <DeleteBtn onClick={() => handleDelete(product)}>
                        X
                      </DeleteBtn>
                      <Delivery>
                        <DeliveryText type="delivery">오늘출발</DeliveryText>
                        <DeliveryText type="time">
                          00:00까지 결제 시
                        </DeliveryText>
                        <DeliveryText>오늘 바로 발송</DeliveryText>
                      </Delivery>
                      <Details>
                        <Image src={product.img} />
                        <ProductName>
                          {product.title}
                          <ProductPrice>
                            {" "}
                            {product.price
                              ?.toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            원
                          </ProductPrice>
                        </ProductName>
                      </Details>
                    </ProductInfo>
                    <ProductInfo size="m">
                      <Details>
                        <ProductOption>
                          <ProductColor>컬러 : {product.color} / </ProductColor>
                          <ProductSize>사이즈 : {product.size}</ProductSize>
                        </ProductOption>
                      </Details>
                    </ProductInfo>

                    <ProductInfo size="s">
                      <Details>
                        <ProductOption type="price">
                          <Price>상품금액</Price>
                          <Price type="number">
                            {product.price
                              ?.toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            원
                          </Price>
                          <OrderBtn>주문하기</OrderBtn>
                        </ProductOption>
                      </Details>
                    </ProductInfo>
                    <ProductInfo type="delivery" size="s">
                      <Details>
                        <ProductOption type="price">
                          <DeliberyPrice type="price" position="center">
                            배송비
                          </DeliberyPrice>
                          <DeliberyPrice>무료</DeliberyPrice>
                        </ProductOption>
                      </Details>
                    </ProductInfo>
                  </ProductWrapper>
                  <Hr type="bottom" />
                </>
              ))
            : ""}
          <Order>
            <OrderWrapper>
              <OrderText>선택상품금액</OrderText>
              <OrderText display="flex" size="m">
                {cart.total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                <OrderText>원</OrderText>
              </OrderText>
            </OrderWrapper>
            <Icon>
              <AddOutlinedIcon />
            </Icon>
            <OrderWrapper>
              <OrderText>총 배송비</OrderText>
              <OrderText display="flex" size="m">
                3,500 <OrderText>원</OrderText>
              </OrderText>
            </OrderWrapper>
            <Icon>
              <RemoveOutlinedIcon />
            </Icon>
            <OrderWrapper>
              <OrderText>할인예상금액</OrderText>
              <OrderText type="sale" display="flex" size="m" color="red">
                3,500 <OrderText color="red">원</OrderText>
              </OrderText>
            </OrderWrapper>
            <Line />
            <OrderWrapper>
              <OrderText size="m">주문금액</OrderText>
              <OrderText
                size="x"
                type="totalPrice"
                display="flex"
                color="green"
              >
                {cart.total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                <OrderText size="m" color="green">
                  원
                </OrderText>
              </OrderText>
            </OrderWrapper>
            <OrderBtn type="total">총 {cart.quantity}건 주문하기</OrderBtn>
          </Order>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
