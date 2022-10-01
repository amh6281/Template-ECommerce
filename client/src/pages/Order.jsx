import { LocalShippingOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";
import MidNav from "../components/MidNav";
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
  margin-top: ${(props) => (props.type === "order" ? "38px" : "")};
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
  height: 67.7vh;
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
  margin-left: ${(props) =>
    props.title === "delivery"
      ? ""
      : props.title === "address"
      ? "-16px"
      : "12px"};
  width: ${(props) => (props.title === "address" ? "100px" : "250px")};
  height: 30px;
`;

const DetailAddr = styled.div`
  display: flex;
  align-items: center;
  margin-left: 103px;
`;

const OrderContent = styled.h3`
  color: #1e1e23;
  font-size: 12px;
  display: flex;
  justify-content: center;
  padding: 0px 0px 40px;
`;

const OrderRight = styled.div`
  width: 30%;
  padding: 31px 50px 0px;
  display: flex;
  flex-direction: column;
`;

const OrderInfo = styled.h3`
  font-size: ${(props) => (props.type === "detail" ? "18px" : "12px")};
  margin-bottom: 17px;
  padding: ${(props) => (props.type === "detail" ? "38px 0px 0px" : "")};
  color: ${(props) => (props.type === "option" ? "#888888" : "#222222")};
`;

const OrderInfoItem = styled.h4`
  font-size: 12px;
  margin: 6px 0px 0px;
  font-weight: 500;
`;

const PayDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PostBtn = styled.button`
  padding: 0 7px;
  height: 26px;
  border: 1px solid #dcdee0;
  color: #303038;
  cursor: pointer;
  background-color: white;
  margin: 6px 1px 0px -40px;
`;

const PaymentWrapper = styled.div`
  background-image: url("https://order.pstatic.net/202209/21_145624_1663739784/order_customer/static/img/service/front/order/img_ordersheet/bg_payment_agree.png?20200903");
  padding: 26px 0px 35px;
  color: #7d7d7d;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.7);
  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.7);
`;

const PayBtn = styled.button`
  color: #ffffff;
  background-color: #09aa5c;
  margin: 0px 6px;
  font-size: 18px;
  width: 198px;
  height: 56px;
  font-weight: bold;
  border: none;
`;

const Order = () => {
  const [openPostcode, setOpenPostcode] = useState(false);
  const [zoneCode, setZoneCode] = useState("");
  const [address, setAddress] = useState("");
  const cart = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.user);

  const handle = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setOpenPostcode((current) => !current);
    },
    // 주소 선택 이벤트
    selectAddress: (data) => {
      setZoneCode(data.zonecode);
      setAddress(data.address);
      setOpenPostcode(false);
    },
  };

  const modalStyle = {
    width: "30%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: "100",
    border: "1px solid #000000",
    overflow: "hidden",
  };

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
                <Input type="text" placeholder="50자 이내로 입력하세요" />
              </ReceiverInfo>
              <ReceiverInfo>
                <ReceiveTitle>배송지 주소</ReceiveTitle>
                <Input title="address" readOnly value={zoneCode} />
                <PostBtn onClick={handle.clickButton}>우편번호</PostBtn>
                {openPostcode && (
                  <DaumPostcode
                    onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
                    autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                    style={modalStyle}
                  />
                )}
              </ReceiverInfo>
              <ReceiverInfo>
                <DetailAddr>
                  <Input type="text" placeholder="" readOnly value={address} />
                  <Input type="text" placeholder="" />
                </DetailAddr>
              </ReceiverInfo>
              <Hr style={{ margin: "30px 0px 40px" }} />
              <OrderContent>
                주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
              </OrderContent>
            </OrderLeft>
            <OrderRight>
              <OrderInfo>주문자 정보</OrderInfo>
              <OrderInfoItem weight="normal">
                {currentUser.username}
              </OrderInfoItem>
              <OrderInfoItem weight="normal">{currentUser.email}</OrderInfoItem>
              <Hr type="order" />
              <OrderInfo type="detail">결제상세</OrderInfo>
              <PayDetail>
                <OrderInfo>주문금액</OrderInfo>
                <OrderInfo>
                  {cart.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </OrderInfo>
              </PayDetail>
              <PayDetail>
                <OrderInfo type="option">ㄴ상품금액</OrderInfo>
                <OrderInfo type="option">
                  {cart.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </OrderInfo>
              </PayDetail>
              <PayDetail>
                <OrderInfo type="option">ㄴ배송비</OrderInfo>
                <OrderInfo type="option">0원</OrderInfo>
              </PayDetail>
            </OrderRight>
          </OrderContainer>
          <Hr />
          <PaymentWrapper>
            <PayBtn>결제하기</PayBtn>
          </PaymentWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Order;
