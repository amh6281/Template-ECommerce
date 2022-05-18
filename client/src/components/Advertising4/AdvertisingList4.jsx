import React from "react";
import styled from "styled-components";
import AdvertisingItem4 from "./AdvertisingItem4";
import { advertisingItem7 } from "../../data";
import { advertisingItem8 } from "../../data";

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

const AdvertisingList4 = () => {
  return (
    <div>
      <Container>
        <ImgContainer>
          <ImgList1>
            {advertisingItem7.map((item) => (
              <Wrapper key={item.id}>
                <AdvertisingItem4 item={item} key={item.id} />
              </Wrapper>
            ))}
          </ImgList1>
          <ImgList2>
            {advertisingItem8.map((item) => (
              <Wrapper key={item.id}>
                <AdvertisingItem4 item={item} key={item.id} />
              </Wrapper>
            ))}
          </ImgList2>
        </ImgContainer>
      </Container>
    </div>
  );
};

export default AdvertisingList4;
