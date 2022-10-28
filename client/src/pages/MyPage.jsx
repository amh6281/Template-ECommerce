import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MidNav from "../components/MidNav";
import TopNav from "../components/TopNav";
import { publicRequest } from "../requestMethods";

const Container = styled.div``;

const Wrapper = styled.div`
  width: 65%;
  margin: 0 auto;
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

  console.log(filterOrders);

  return (
    <>
      <TopNav />
      <MidNav />
      <Container>
        <Wrapper>
          {filterOrders.map((order) => (
            <h1>{order.price}</h1>
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default MyPage;
