import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router";
import { LocalShippingOutlined } from "@material-ui/icons";
import TopNav from "../components/TopNav";
import MidNav from "../components/MidNav";

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

const OrderNav = styled.div`
  background-image: url("https://order.pstatic.net/202210/06_142441_1665033881/order_customer/static/img/service/front/order/img_ordersheet/bg_orderend.png?20201207");
`;

const TopContainer = styled.div`
  color: #7d7d7d;
  padding: 0px 423px 30px 0px;
  background-color: #fafafa;
`;

const TopWrapper = styled.div`
  color: #7d7d7d;
  padding: 1px 0px 0px 50px;
`;

const Title = styled.h1`
  margin: 93px 0px 11px;
  font-size: 34px;
  font-weight: 600;
`;

const Hr = styled.div`
  border-top: 1px solid #f0f0f0;
`;

const BottomContainer = styled.div`
  color: #7d7d7d;
  padding: 29px 423px 29px 54px;
  background-color: #fafafa;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin: ${(props) => (props.type === "delivery" ? "18px 0px 0px " : "")};
`;

const OrderNumber = styled.h4`
  font-size: ${(props) => (props.type === "number" ? "14px" : "13px")};
  color: ${(props) => (props.type === "number" ? "#2db400" : "#4b4b4b")};
  margin: ${(props) => (props.type === "number" ? "" : "2px 0px 0px")};
`;

const Delivery = styled.h4`
  font-size: 13px;
  color: #4b4b4b;
  margin: 2px 0px 0px;
  display: flex;
  flex-direction: column;
  margin-bottom: 46px;
`;

const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const DetailInfo = styled.h4`
  color: #000000;
  font-size: 13px;
  font-weight: 400;
`;

const ProductInfo = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  border: 1px solid #f4f4f4;
`;

const Detail = styled.h3`
  font-size: 12px;
  color: #000000;
  padding: 24px 0px 20px;
  display: flex;
  flex: 3;
  align-items: center;
  font-weight: 500;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  object-fit: cover;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 50px;
`;

const Seller = styled.h3`
  font-size: 12px;
  color: #7d7d7d;
  font-weight: 500;
  padding: 24px 0px 20px;
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Shopping = styled.h3`
  font-size: 12px;
  color: #7d7d7d;
  font-weight: 500;
  padding: 24px 0px 20px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Sale = styled.h3`
  font-size: 12px;
  color: #7d7d7d;
  font-weight: 500;
  padding: 24px 0px 20px;
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Price = styled.h3`
  font-size: 14px;
  color: black;
  font-weight: 600;
  padding: 24px 0px 20px;
  display: flex;
  flex: 1;
  justify-content: center;
`;

const ProductName = styled.h3`
  font-size: 13px;
  display: inline-block;
  width: 260px;
  white-space: normal;
`;

const Success = () => {
  const location = useLocation();
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
              <PayItem>주문/결제</PayItem>
              <PayItem>{">"}</PayItem>
              <PayItem type="current">완료</PayItem>
            </Pay>
          </PayNav>
          <OrderNav>
            <TopContainer>
              <TopWrapper>
                <Title>주문이 정상적으로 완료되었습니다.</Title>
              </TopWrapper>
            </TopContainer>
            <Hr />
            <BottomContainer>
              <Info>
                <OrderNumber style={{ flex: 1 }}>주문번호</OrderNumber>
                <OrderNumber type="number" style={{ flex: 4 }}>
                  {location.state.merchant_uid}
                </OrderNumber>
              </Info>
              <Info type="delivery">
                <Delivery style={{ flex: 1 }}>배송지정보</Delivery>
                <DeliveryInfo style={{ flex: 4 }}>
                  <DetailInfo>{location.state.buyer_name}</DetailInfo>
                  <DetailInfo>{location.state.buyer_tel}</DetailInfo>
                  <DetailInfo>
                    ({location.state.buyer_postcode}){" "}
                    {location.state.buyer_addr}
                  </DetailInfo>
                </DeliveryInfo>
              </Info>
              {location.state.custom_data.map((item) => (
                <>
                  <ProductInfo>
                    <Detail>
                      <Image src={item.img} />
                      <ProductWrapper>
                        <ProductName>{item.title}</ProductName>
                      </ProductWrapper>
                    </Detail>
                    <Seller>{item.shopname}</Seller>
                    <Shopping>
                      <LocalShippingOutlined
                        style={{ opacity: "0.5", fontSize: "18px" }}
                      />
                      무료
                    </Shopping>
                    <Sale>(-) 3,500원</Sale>
                    <Price>
                      {item.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </Price>
                  </ProductInfo>
                </>
              ))}
            </BottomContainer>
          </OrderNav>
        </Wrapper>
      </Container>
    </>
  );
};

export default Success;
