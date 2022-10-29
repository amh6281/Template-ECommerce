import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MidNav from "../components/MidNav";
import TopNav from "../components/TopNav";
import { publicRequest } from "../requestMethods";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

const Container = styled.div``;

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const StatusWrapper = styled.div`
  background-color: #edeff2;
  padding: 41px 40px 67px 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 65px;
`;

const Status = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  align-items: center;
`;

const StatusTitle = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: gray;
  margin-bottom: 5px;
`;

const StatusIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: gray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Count = styled.span`
  font-size: 30px;
`;

const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const OrderDate = styled.div`
  border: 1px solid #dadddf;
  border-radius: 20px;
  padding: 5px 20px;
  width: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 420.5px;
  font-size: 13px;
`;

const ProductWrapper = styled.div`
  padding: 23px 0px 24px;
  display: flex;
  align-items: center;
  border-top: 1px solid #dadddf;
  border-bottom: 1px solid #dadddf;
`;

const ProductImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-left: 5px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => (props.type === "product" ? "15px" : "")};
  flex: ${(props) => (props.type === "product" ? "7" : "3")};
`;

const ProductName = styled.span`
  font-size: 16px;
`;

const DetailWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0px 12px;
`;

const ProductPrice = styled.span`
  font-size: 14px;
`;

const Boundary = styled.span`
  color: #f2f3f4;
  width: 1px;
  margin: 0px 0px 0px 19px;
`;

const ProductDate = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #a5a5a5;
  margin: 0px 0px 0px 8px;
  padding: 0px 0px 0px 11px;
`;

const ProductStatus = styled.span`
  color: #a5a5a5;
  font-size: 13px;
`;

const CancelBtn = styled.button`
  color: #424242;
  font-size: 13px;
  border: 1px solid #ddd;
  width: 110px;
  height: 29px;
  padding: 5px 20px;
  background-color: #fff;
  position: relative;
  left: 139px;
`;

const MyPage = () => {
  const [orders, setOrders] = useState([]);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await publicRequest.get("/orders");
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, []);

  //다차원배열 일차원으로 묶은 후 order의 userId와 currentUser의 id가 같은것만 필터링
  const customData = orders.map((item) => item.custom_data).flat();
  const filterOrders = customData.filter((order) => {
    return order?.userId === currentUser._id;
  });

  const prepared = filterOrders.filter((order) => {
    return order.status == "상품준비중";
  });

  return (
    <>
      <TopNav />
      <MidNav />
      <Container>
        <Wrapper>
          <StatusWrapper>
            <Status>
              <StatusTitle>상품준비중</StatusTitle>
              <StatusIcon>
                <LocalShippingOutlinedIcon
                  style={{ color: "white", fontSize: "30px" }}
                />
              </StatusIcon>
              <Count>{prepared.length}</Count>
            </Status>
            <Status>
              <StatusTitle>배송중</StatusTitle>
              <StatusIcon>
                <LocalShippingOutlinedIcon
                  style={{ color: "white", fontSize: "30px" }}
                />
              </StatusIcon>
              <Count>0</Count>
            </Status>
            <Status>
              <StatusTitle>배송완료</StatusTitle>
              <StatusIcon>
                <LocalShippingOutlinedIcon
                  style={{ color: "white", fontSize: "30px" }}
                />
              </StatusIcon>
              <Count>0</Count>
            </Status>
          </StatusWrapper>
          {filterOrders.map((order) => (
            <OrderWrapper>
              <OrderDate>{order.date}</OrderDate>
              <ProductWrapper>
                <ProductImg src={order.img} />
                <ProductInfo type="product">
                  <ProductName>{order.title}</ProductName>
                  <DetailWrapper>
                    <ProductPrice>
                      {order.price
                        ?.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </ProductPrice>
                    <Boundary>|</Boundary>
                    <ProductDate>{order.date}</ProductDate>
                  </DetailWrapper>
                  <ProductStatus>{order.status}</ProductStatus>
                </ProductInfo>
                <ProductInfo type="payment">
                  <CancelBtn>결제취소</CancelBtn>
                </ProductInfo>
              </ProductWrapper>
            </OrderWrapper>
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default MyPage;
