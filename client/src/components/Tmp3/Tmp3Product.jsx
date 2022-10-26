import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  margin: 0px 5px;
  object-fit: cover;
`;

const Top = styled.div`
  padding: 15px 0px;
  width: 250px;
  border-bottom: 1px solid #e9e9e9;
  margin: 0px 5px;
`;

const Title = styled.span`
  font-size: 15px;
  color: #222222;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 17px 5px 0px;
  padding: 0px 0px 5px;
`;

const Price = styled.span`
  font-size: 17px;
  color: #222222;
  font-weight: bold;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-right: 5px;
  color: #1c1c1c;
`;

const Tmp3Product = () => {
  return (
    <Container>
      <Wrapper>
        <Image src=" https://via.placeholder.com/250x250" />
        <Top>
          <Title>모아나 아쿠아텍스 3/4인용</Title>
        </Top>
        <Bottom>
          <Price>234,000원</Price>
          <Icon>
            <ShoppingCartOutlinedIcon style={{ fontSize: "17px" }} />
            <ZoomInOutlinedIcon style={{ fontSize: "17px" }} />
          </Icon>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Tmp3Product;
