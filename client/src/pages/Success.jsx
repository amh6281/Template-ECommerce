import React from "react";
import styled from "styled-components";

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

const Success = () => {
  return (
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
                3213213123123
              </OrderNumber>
            </Info>
            <Info type="delivery">
              <Delivery style={{ flex: 1 }}>배송지정보</Delivery>
              <DeliveryInfo style={{ flex: 4 }}>
                <DetailInfo>홍길동</DetailInfo>
                <DetailInfo>010-1234-1234</DetailInfo>
                <DetailInfo>(31172) 충청남도 천안시 서북구 </DetailInfo>
              </DeliveryInfo>
            </Info>
          </BottomContainer>
        </OrderNav>
      </Wrapper>
    </Container>
  );
};

export default Success;
