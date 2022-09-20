import React, { useCallback } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteProducts } from "../redux/aipCalls";
import { deleteProduct, emptyCart } from "../redux/cartRedux";
import TopNav from "../components/TopNav";
import MidNav from "../components/MidNav";
import CatNav from "../components/CatNav";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;
const ProductId = styled.span``;

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
    <Container>
      <TopNav />
      <MidNav />
      <CatNav />
      <Wrapper>
        <Title>장바구니</Title>
        <Hr />
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Hr />
        <Bottom>
          <Info>
            {currentUser
              ? cart.products.map((product) => (
                  <Product key={product._id}>
                    <ProductDetail>
                      <Image src={product.img} />
                      <Details>
                        <ProductName>
                          <b>상품명 : </b>
                          {product.title}
                        </ProductName>
                        <ProductName>
                          <b>쇼핑몰 : </b>
                          {product.shopId}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b>
                          {product._id}
                        </ProductId>
                        <ProductSize>
                          <b>Size:</b>
                          {product.size}
                        </ProductSize>
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
                ))
              : ""}
          </Info>
          <Summary>
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
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
