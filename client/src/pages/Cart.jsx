import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, emptyCart } from "../redux/cartRedux";
import TopNav from "../components/TopNav";
import MidNav from "../components/MidNav";
import CatNav from "../components/CatNav";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
  width: 65%;
  margin: 0 auto;
  padding: 15px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const NavItem = styled.h3`
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => (props.type === "current" ? "black" : "#7d7d7d")};
`;

const EmptyBtn = styled.button`
  font-size: 16px;
  color: #222222;
  border: none;
  background-color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid #03c75a;
  padding: 5px 11px;
  border-color: #d5dade;
  border-radius: 4px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f4f4f4;
`;

const Wrapper = styled.div`
  width: 65%;
  margin: 0 auto;
  padding: 30px 0px 0px;
`;

const CartContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 5px;
`;

const CartWrapper = styled.div`
  padding: ${(props) => (props.type === "top" ? "25px 40px 18px" : "")};
  display: flex;
  align-items: center;
  gap: 5px;
`;

const CartTitle = styled.h3`
  font-size: 20px;
`;

const Hr = styled.hr`
  width: 95%;
  margin: 0 auto;
  border: ${(props) =>
    props.color === "gray"
      ? "1px solid #ededed"
      : props.type === "bottom"
      ? "1px solid #ededed"
      : "1px solid #383d4a"};
  margin-top: ${(props) => (props.color === "gray" ? "14px" : "")};
`;

const Delivery = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 0px 0px;
  width: 95%;
  margin: 0 auto;
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

const Product = styled.div`
  display: flex;
`;

const ProductContainer = styled.div`
  padding: ${(props) =>
    props.type === "option"
      ? "20px 10px"
      : (props.type = "price" ? "20px 15px" : "20px 30px")};
  display: flex;
  border-right: 1px solid #ededed;
`;

const ProductWrapper = styled.div`
  display: flex;
`;

const ProductBtn = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 5px 0px 16px;
`;

const DeleteBtn = styled.button`
  font-size: 14px;
  color: #222222;
  border: none;
  background-color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid #d5dade;
  border-radius: 2px;
`;

const ProductInfo = styled.div`
  display: flex;
`;

const ProductImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  object-fit: cover;
`;

const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) =>
    props.type === "delivery" ? "6px" : props.type === "price" ? "6px" : "4px"};
  padding-left: ${(props) =>
    props.type === "price" ? "" : props.type === "delivery" ? "" : "10px"};
  align-items: ${(props) =>
    props.type === "price"
      ? "center"
      : props.type === "delivery"
      ? "center"
      : ""};
  justify-content: ${(props) =>
    props.type === "price"
      ? "center"
      : props.type === "delivery"
      ? "center"
      : ""};
  width: ${(props) =>
    props.type === "price"
      ? "168px"
      : props.type === "delivery"
      ? "152px"
      : ""};
`;

const ProductTitle = styled.h3`
  font-size: 14px;
`;

const ProductPrice = styled.h3`
  font-size: ${(props) =>
    props.type === "price"
      ? "15px"
      : props.type === "product"
      ? "14px"
      : "12px"};
`;

const ProductShop = styled.h3`
  font-size: 12px;
  color: #959595;
`;

const ProductOption = styled.h3`
  font-size: 12px;
  font-weight: 500;
`;

const DeliveryPrice = styled.h3`
  font-size: ${(props) => (props.type === "price" ? "15px" : "12px")};
  font-weight: 600;
`;

const OrderBtn = styled.button`
  font-size: ${(props) => (props.type === "total" ? "16px" : "12px")};
  border: 1px solid #03c75a;
  font-weight: bold;
  color: #03c75a;
  background-color: white;
  padding: 6px 12px;
  border-radius: 4px;
  margin-left: ${(props) => (props.type === "total" ? "15px" : "")};
`;

const SelectAmountContainer = styled.div`
  padding: 24px 0px 30px;
`;

const SelectAmountWrapper = styled.div`
  margin: 0px 200px;
  display: flex;
  justify-content: space-around;
`;

const SelectPrice = styled.span`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SelectAmount = styled.span`
  font-size: ${(props) =>
    props.type === "select" ? "14px" : props.type === "m" ? "18px" : "16px"};
  font-weight: 600;
  color: ${(props) =>
    props.color === "red"
      ? "red"
      : props.color === "green"
      ? "#00C63A"
      : "#222222"};
`;

const Icon = styled.div`
  color: #d5dade;
  display: flex;
  align-items: center;
  padding: 0px 15px;
`;

const OrderAmount = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Hrr = styled.hr`
  border-right: 1px solid black;
  margin: 0px 30px;
`;

const PayBarContainer = styled.div`
  width: 100%;
  height: 75px;
  color: white;
  font-size: 14px;
  position: fixed;
  top: 92vh;
  z-index: 999;
  background-color: #03c75a;
  display: flex;
  justify-content: flex-end;
`;

const PayBarWrapper = styled.div`
  padding: 14px 0px;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: end;
  margin: 0px 150px;
`;

const PayBarPrice = styled.span`
  font-size: ${(props) =>
    props.type === "price" ? "24px" : props.type === "last" ? "20px" : "18px"};
  color: #ffffff;
  font-weight: bold;
`;

const TotalOrder = styled.span`
  font-size: 16px;
  margin: 0px 0px 0px 26px;
  font-weight: bold;
  border: 2px solid #ffffff;
  border-radius: 4px;
  padding: 13px 55px;
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

  //cart.products의 모든 quantity 개수
  const quantityArr = cart.products.map((item) => item.quantity);
  const TotalQuantity = quantityArr.reduce((a, b) => {
    return a + b;
  }, 0);

  return (
    <>
      <PayBarContainer>
        <PayBarWrapper>
          <PayBarPrice>총 주문금액</PayBarPrice>
          <PayBarPrice type="price">
            {cart.total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            <PayBarPrice type="last">원</PayBarPrice>
          </PayBarPrice>
          <Link to="/order" style={{ color: "inherit" }}>
            <TotalOrder>{TotalQuantity}건 주문하기</TotalOrder>
          </Link>
        </PayBarWrapper>
      </PayBarContainer>
      <TopNav />
      <MidNav />
      <NavContainer>
        <NavWrapper>
          <EmptyBtn onClick={handleReset}>
            <ClearOutlinedIcon
              style={{ color: "#d5dade", margin: "0px 3px 0 -3px" }}
            />
            전체 삭제
          </EmptyBtn>
        </NavWrapper>
        <NavWrapper>
          <NavItem type="current">장바구니</NavItem>
          <NavItem>{">"}</NavItem>
          <NavItem>주문/결제</NavItem>
          <NavItem>{">"}</NavItem>
          <NavItem>완료</NavItem>
        </NavWrapper>
      </NavContainer>
      <Container>
        {currentUser
          ? cart.products.map((product) => (
              <>
                <Wrapper>
                  <CartContainer>
                    <CartWrapper type="top">
                      <CartTitle>{product.shopname}</CartTitle>
                      <HomeOutlinedIcon
                        style={{ width: "27px", height: "27px" }}
                      />
                    </CartWrapper>
                    <Hr />
                    <CartWrapper>
                      <Delivery>
                        <DeliveryText type="delivery">오늘출발</DeliveryText>
                        <DeliveryText type="time">
                          00:00까지 결제 시
                        </DeliveryText>
                        <DeliveryText>오늘 바로 발송</DeliveryText>
                      </Delivery>
                    </CartWrapper>
                    <Hr color="gray" />
                    <Product>
                      <ProductContainer style={{ flex: 4.5 }}>
                        <ProductWrapper>
                          <ProductBtn>
                            <DeleteBtn onClick={() => handleDelete(product)}>
                              <ClearOutlinedIcon
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  color: "#d5dade",
                                }}
                              />
                            </DeleteBtn>
                          </ProductBtn>
                          <ProductInfo>
                            <ProductImg src={product.img} />
                            <ProductItem>
                              <ProductTitle>{product.title}</ProductTitle>
                              <ProductPrice type="product">
                                {product.price
                                  ?.toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                원
                              </ProductPrice>
                              <ProductShop>{product.shopname}</ProductShop>
                            </ProductItem>
                          </ProductInfo>
                        </ProductWrapper>
                      </ProductContainer>
                      <ProductContainer type="option" style={{ flex: 2.5 }}>
                        <ProductWrapper>
                          <ProductInfo>
                            <ProductItem>
                              <ProductOption>
                                사이즈 : {product.size} / 컬러 : {product.color}{" "}
                                / {product.quantity}개
                              </ProductOption>
                            </ProductItem>
                          </ProductInfo>
                        </ProductWrapper>
                      </ProductContainer>
                      <ProductContainer type="price" style={{ flex: 1.5 }}>
                        <ProductWrapper>
                          <ProductInfo>
                            <ProductItem type="price">
                              <ProductPrice>상품금액</ProductPrice>
                              <ProductPrice
                                type="price"
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                {(product.price * product.quantity)
                                  ?.toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                <ProductPrice>원</ProductPrice>
                              </ProductPrice>
                              <OrderBtn>주문하기</OrderBtn>
                            </ProductItem>
                          </ProductInfo>
                        </ProductWrapper>
                      </ProductContainer>
                      <ProductContainer style={{ flex: 1.5 }}>
                        <ProductWrapper>
                          <ProductInfo>
                            <ProductItem type="delivery">
                              <DeliveryPrice>배송비</DeliveryPrice>
                              <DeliveryPrice type="price">무료</DeliveryPrice>
                            </ProductItem>
                          </ProductInfo>
                        </ProductWrapper>
                      </ProductContainer>
                    </Product>
                    <Hr type="bottom" />
                    <SelectAmountContainer>
                      <SelectAmountWrapper>
                        <SelectPrice>
                          <SelectAmount type="select">
                            선택상품금액
                          </SelectAmount>
                          <SelectAmount>
                            {(product.price * product.quantity)
                              ?.toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            <SelectAmount type="select">원</SelectAmount>
                          </SelectAmount>
                        </SelectPrice>
                        <Icon>
                          <AddOutlinedIcon />
                        </Icon>
                        <SelectPrice>
                          <SelectAmount type="select">총 배송비</SelectAmount>
                          <SelectAmount>
                            3,500<SelectAmount type="select">원</SelectAmount>
                          </SelectAmount>
                        </SelectPrice>
                        <Icon>
                          <RemoveOutlinedIcon />
                        </Icon>
                        <SelectPrice>
                          <SelectAmount type="select">
                            할인예상금액
                          </SelectAmount>
                          <SelectAmount color="red">
                            3,500
                            <SelectAmount color="red" type="select">
                              원
                            </SelectAmount>
                          </SelectAmount>
                        </SelectPrice>
                        <Hrr />
                        <OrderAmount>
                          <SelectAmount>주문금액</SelectAmount>
                          <SelectAmount color="green" type="m">
                            {(product.price * product.quantity)
                              ?.toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            <SelectAmount color="green">원</SelectAmount>
                          </SelectAmount>
                        </OrderAmount>
                        <OrderBtn type="total">
                          {product.shopname} {product.quantity}건 주문하기
                        </OrderBtn>
                      </SelectAmountWrapper>
                    </SelectAmountContainer>
                  </CartContainer>
                </Wrapper>
              </>
            ))
          : ""}
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
