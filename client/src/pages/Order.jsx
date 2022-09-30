import { LocalShippingOutlined } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import MidNav from "../components/MidNav";
import Postcode from "../components/Postcode";
import TopNav from "../components/TopNav";

const Container = styled.div`
  width: 100%;
  height: 200vh;
  background-color: #f4f4f4;
`;

const Wrapper = styled.div`
  width: 65%;
  margin: 0 auto;
`;

const PayNav = styled.div`
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Pay = styled.div`
  display: flex;
  gap: 10px;
`;

const PayTitle = styled.h3``;

const PayItem = styled.h3`
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => (props.type === "current" ? "black" : "#7d7d7d")};
`;

const Hr = styled.hr`
  width: ${(props) => (props.type === "bottom" ? "90%" : "100%")};
  margin: 0 auto;
  border: ${(props) =>
    props.type === "bottom" || "order"
      ? "1px solid #ededed"
      : "1px solid #383d4a"};
  margin-top: ${(props) => (props.type === "order" ? "20px" : "")};
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.type === "detail" ? "white" : "")};
`;

const Info = styled.h3`
  font-size: 12px;
  color: #000000;
  padding: 24px 0px 20px;
  display: flex;
  flex: 3;
  justify-content: ${(props) => (props.type === "detail" ? "" : "center")};
  align-items: center;
  font-weight: 500;
`;

const Seller = styled.h3`
  font-size: 12px;
  color: ${(props) => (props.type === "detail" ? "#7d7d7d" : "black")};
  font-weight: 500;
  padding: 24px 0px 20px;
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Delivery = styled.h3`
  font-size: 12px;
  color: ${(props) => (props.type === "detail" ? "#7d7d7d" : "black")};
  font-weight: 500;
  padding: 24px 0px 20px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Quantity = styled.h3`
  font-size: 12px;
  color: ${(props) => (props.type === "detail" ? "#7d7d7d" : "black")};
  font-weight: 500;
  padding: 24px 0px 20px;
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Sale = styled.h3`
  font-size: 12px;
  color: ${(props) => (props.type === "detail" ? "#7d7d7d" : "black")};
  font-weight: 500;
  padding: 24px 0px 20px;
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Price = styled.h3`
  font-size: ${(props) => (props.type === "detail" ? "14px" : "12px")};
  color: black;
  font-weight: ${(props) => (props.type === "detail" ? "600" : "400")};
  padding: 24px 0px 20px;
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  object-fit: cover;
  position: relative;
  left: 50px;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  gap: 5px;
  position: relative;
  left: 100px;
`;

const Title = styled.h3`
  font-size: 13px;
  display: flex;
`;

const Option = styled.div`
  display: flex;
  gap: 5px;
`;

const OptionItem = styled.h3`
  font-size: 12px;
  background-color: ${(props) => (props.type === "option" ? "#00C63A" : "")};
  color: ${(props) => (props.type === "option" ? "white" : "#7d7d7d")};
  padding: ${(props) => (props.type === "option" ? "1px 5px" : "")};
  font-weight: 500;
`;

const OrderContainer = styled.div`
  width: 100%;
  display: flex;
`;

const OrderLeft = styled.div`
  background-image: url("https://order.pstatic.net/202209/21_145624_1663739784/order_customer/static/img/service/front/order/img_ordersheet/bg_order_leftpannel.png?20200903");
  padding: 31px 50px 0px 49px;
  width: 70%;
  height: 100vh;
`;

const OrderTitle = styled.h4`
  margin-bottom: 10px;
`;

const ReceiverInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const ReceiveTitle = styled.h4`
  font-size: 12px;
  color: #1e1e23;
  margin: 0px 18px 0px -10px;
  padding: 5px 0px 0px 10px;
`;

const Input = styled.input`
  border: none;
  margin: 6px 1px 0px 0px;
  padding: 0px 10px;
  font-size: 14px;
  margin-left: ${(props) => (props.title === "delivery" ? "" : "12px")};
  width: 250px;
  height: 30px;
`;

const OrderRight = styled.div`
  width: 30%;
  padding: 31px 50px 0px;
  display: flex;
  flex-direction: column;
`;

const OrderInfo = styled.h3`
  font-size: 12px;
  margin-bottom: 17px;
`;

const OrderInfoItem = styled.h4`
  font-size: 12px;
  margin: 6px 0px 0px;
`;

const Order = () => {
  const cart = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <TopNav />
      <MidNav />
      <Container>
        <Wrapper>
          <PayNav>
            <Pay>
              <PayTitle>주문/결제</PayTitle>
            </Pay>
            <Pay>
              <PayItem>장바구니</PayItem>
              <PayItem>{">"}</PayItem>
              <PayItem type="current">주문/결제</PayItem>
              <PayItem>{">"}</PayItem>
              <PayItem>완료</PayItem>
            </Pay>
          </PayNav>
          <Hr />
          <ProductInfo>
            <Info>상품정보</Info>
            <Seller>판매자</Seller>
            <Delivery>배송비</Delivery>
            <Quantity>수량</Quantity>
            <Sale>할인</Sale>
            <Price>상품금액</Price>
          </ProductInfo>
          {cart.products.map((product) => (
            <>
              <ProductInfo type="detail">
                <Info type="detail">
                  <Image src={product.img} />
                  <ProductWrapper>
                    <Title>{product.title}</Title>
                    <Option>
                      <OptionItem type="option">옵션</OptionItem>
                      <OptionItem>컬러 : {product.color}</OptionItem>
                      <OptionItem>사이즈 : {product.size}</OptionItem>
                    </Option>
                  </ProductWrapper>
                </Info>
                <Seller type="detail">남자쇼핑몰</Seller>
                <Delivery type="detail">
                  <LocalShippingOutlined
                    style={{ opacity: "0.5", fontSize: "18px" }}
                  />
                  무료
                </Delivery>
                <Quantity type="detail">{cart.quantity}개</Quantity>
                <Sale type="detail">(-) 3,500원</Sale>
                <Price type="detail">
                  {product.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </Price>
              </ProductInfo>
              <Hr type="bottom" />
            </>
          ))}
          <OrderContainer>
            <OrderLeft>
              <OrderTitle>배송지정보</OrderTitle>
              <ReceiverInfo>
                <ReceiveTitle>수령인</ReceiveTitle>
                <Input type="text" placeholder="50자 이내로 입력하세요" />
              </ReceiverInfo>
              <ReceiverInfo>
                <ReceiveTitle>배송지명</ReceiveTitle>
                <Input
                  title="delivery"
                  type="text"
                  placeholder="50자 이내로 입력하세요"
                />
              </ReceiverInfo>
              <ReceiverInfo>
                <ReceiveTitle>연락처</ReceiveTitle>
                <Input type="number" placeholder="50자 이내로 입력하세요" />
              </ReceiverInfo>
              <Postcode />
            </OrderLeft>
            <OrderRight>
              <OrderInfo>주문자 정보</OrderInfo>
              <OrderInfoItem>{currentUser.username}</OrderInfoItem>
              <OrderInfoItem>{currentUser.email}</OrderInfoItem>
              <Hr type="order" />
            </OrderRight>
          </OrderContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default Order;
