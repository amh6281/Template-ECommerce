import React from "react";
import styled from "styled-components";
import AdvertisingItem2 from "./AdvertisingItem2";
import { advertisingItem3 } from "../../data";
import { advertisingItem4 } from "../../data";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  cursor: pointer;
`;

const ImgContainer = styled.div``;

const Wrapper = styled.div`
  margin: 37px 5px;
`;

const ImgList1 = styled.div`
  display: flex;
`;

const ImgList2 = styled.div`
  display: flex;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`;

const AdvertisingList2 = () => {
  return (
    <div>
      <Container>
        <ImgContainer>
          <ImgList1>
            {advertisingItem3.map((item) => (
              <Wrapper key={item.id}>
                <AdvertisingItem2 item={item} key={item.id} />
              </Wrapper>
            ))}
          </ImgList1>
          <ImgList2>
            {advertisingItem4.map((item) => (
              <Wrapper key={item.id}>
                <AdvertisingItem2 item={item} key={item.id} />
              </Wrapper>
            ))}
          </ImgList2>
        </ImgContainer>
      </Container>
    </div>
  );
};

export default AdvertisingList2;
