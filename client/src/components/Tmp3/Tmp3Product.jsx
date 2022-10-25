import React from "react";
import styled from "styled-components";
import { ShoppingCartOutlined } from "@material-ui/icons";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

const Container = styled.div`
  margin-top: 50px;
  position: relative;
`;

const Left = styled.div`
  width: 1450px;
  border-left: 1px solid #dedede;
  border-right: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
  overflow: hidden;
`;

const Division = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Menu = styled.div`
  border: ${({ isBusiness }) => (isBusiness ? "" : "1px solid #d1d1d1")};
  width: 100%;
  padding: 17px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ isBusiness }) => (isBusiness ? "" : "#F8F9FA")};
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const ImgBox = styled.div`
  display: flex;
`;

const Images = styled.img`
  margin: 25px;
  width: 300px;
`;

const TitleBox = styled.div`
  display: flex;
`;

const Title = styled.div`
  margin: 0 25px 0 25px;
  width: 300px;
  padding-bottom: 20px;
  border-bottom: 1px solid #dedede;
`;

const PriceBox = styled.div`
  display: flex;
`;

const Price = styled.div`
  margin: 25px;
  width: 300px;
  display: flex;
`;

const Discount = styled.div`
  display: block;
  width: 50px;
  height: 50px;
  background-color: #f95959;
  line-height: 45px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  letter-spacing: -0.7px;
  margin: 20px 10px 10px 10px;
`;

const Sale = styled.div`
  margin: 15px;
  font-size: 20px;
`;

const XX = styled.div`
  color: #999;
  letter-spacing: -0.5px;
  font-family: "Nanum Gothic";
  font-weight: 400;
  line-height: 1 !important;
  margin-bottom: 5px;
  text-decoration: line-through;
`;

const YY = styled.div`
  color: #222;
  letter-spacing: -0.5px;
  font-family: "Nanum Gothic";
  font-weight: 700;
  line-height: 1 !important;
  padding-top: 0px;
  margin: 20px 0px 0px 0px;
`;

const Icons = styled.div`
  position: absolute;
  margin: 10px 0px 0px 250px;
`;

const Tpm3Product = () => {
  return (
    <Container>
      <Left>
        <Division>
          <Menu>하나</Menu>
          <Menu>둘</Menu>
          <Menu>셋</Menu>
        </Division>
        <Wrapper>
          <ImgBox>
            <Images src=" https://via.placeholder.com/388x583" />
            <Images src=" https://via.placeholder.com/388x583" />
            <Images src=" https://via.placeholder.com/388x583" />
            <Images src=" https://via.placeholder.com/388x583" />
          </ImgBox>
          <TitleBox>
            <Title>모아나 아쿠아텍스 3/4인용11111</Title>
            <Title>모아나 아쿠아텍스 3/4인용</Title>
            <Title>모아나 아쿠아텍스 3/4인용</Title>
            <Title>모아나 아쿠아텍스 3/4인용</Title>
          </TitleBox>
          <PriceBox>
            <Price>
              <Discount>61%</Discount>
              <Sale>
                <XX>600.000 원</XX>
                <YY>
                  <strong>234.000 원</strong>
                </YY>
              </Sale>
              <Icons>
                <ShoppingCartOutlined />
                <ZoomInIcon />
              </Icons>
            </Price>
            <Price>
              <Discount>61%</Discount>
              <Sale>
                <XX>600.000 원</XX>
                <YY>
                  <strong>234.000 원</strong>
                </YY>
              </Sale>
              <Icons>
                <ShoppingCartOutlined />
                <ZoomInIcon />
              </Icons>
            </Price>
            <Price>
              <Discount>61%</Discount>
              <Sale>
                <XX>600.000 원</XX>
                <YY>
                  <strong>234.000 원</strong>
                </YY>
              </Sale>
              <Icons>
                <ShoppingCartOutlined />
                <ZoomInIcon />
              </Icons>
            </Price>
            <Price>
              <Discount>61%</Discount>
              <Sale>
                <XX>600.000 원</XX>
                <YY>
                  <strong>234.000 원</strong>
                </YY>
              </Sale>
              <Icons>
                <ShoppingCartOutlined />
                <ZoomInIcon />
              </Icons>
            </Price>
          </PriceBox>
        </Wrapper>
      </Left>
    </Container>
  );
};

export default Tpm3Product;
