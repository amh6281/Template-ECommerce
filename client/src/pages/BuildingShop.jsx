import React, { useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Tp1Home from "../Template1/Tmp1Home";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Navbar from "../Template1/Tmp1Navbar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://user-images.githubusercontent.com/83646986/164176314-5133beb3-99d2-4177-81f7-d9345133fccd.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container2 = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 600;
`;

const InputName = styled.h1`
  font-size: 20px;
  padding-top: 10px;
  margin-top: 10px;
`;

const BtnWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const XButton = styled.button`
  border: none;
  padding: 15px 20px;
  color: black;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
`;

const BuildingShop = () => {
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    setClick(!click);
  };

  const onClick2 = (e) => {
    e.preventDefault();
    setClick2(!click2);
  };

  return (
    <Container2>
      {click ? (
        <div>
          <XButton onClick={onClick}>X</XButton>

          <ProductList />
        </div>
      ) : click2 ? (
        <div>
          <Button onClick={onClick2}>X</Button>
          <Cart />
        </div>
      ) : (
        <Container>
          <Wrapper>
            <Title>쇼핑몰 구축</Title>
            <Form>
              <InputName>Logo</InputName>
              <Input type="file" />
              <Input placeholder="쇼핑몰 이름" />
              <Input placeholder="쇼핑몰 소개글" />
              <Input placeholder="카테고리" />
              <Input placeholder="E-mail" />
              <Input placeholder="주소" />
              <Input placeholder="고객센터 번호" />
              <BtnWrapper>
                <Button
                  onClick={onClick}
                  style={{ borderRadius: "5px", backgroundColor: "Brown" }}
                >
                  Design1
                </Button>
                <Button
                  onClick={onClick2}
                  style={{ borderRadius: "5px", backgroundColor: "Brown" }}
                >
                  Design 2
                </Button>
              </BtnWrapper>
              <BtnWrapper>
                <Button
                  style={{ borderRadius: "5px", backgroundColor: "#432A2A" }}
                >
                  생성
                </Button>
              </BtnWrapper>
            </Form>
          </Wrapper>
        </Container>
      )}
    </Container2>
  );
};

export default BuildingShop;
