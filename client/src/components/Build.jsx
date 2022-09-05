import React from "react";
import styled from "styled-components";
import Tmp1Preview from "./Tmp1/Tmp1Preview";
import Tmp2Preview from "./Tmp2/Tmp2Preview";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  background-color: #ffffffe4;
  color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
const Title = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  border: 1px solid #f9f9f9;
  color: black;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;

const Desc = styled.textarea`
  border: 1px solid #f9f9f9;
  color: black;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;

const Tmp = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: #f5f5f5;
  color: #606060;
`;

const Build = ({ setOpen }) => {
  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setOpen(false)}>X</Close>
        <Title>쇼핑몰 구축하기</Title>
        <Input type="text" placeholder="쇼핑몰 이름" />
        <Input type="file" accept="image/*" />
        <Desc placeholder="쇼핑몰 설명" />
        <Input type="text" placeholder="카테고리" />
        <Input type="number" placeholder="디자인 선택" />
        <Tmp>
          <Tmp1Preview />
          <Tmp2Preview />
        </Tmp>
        <Button>생성</Button>
      </Wrapper>
    </Container>
  );
};

export default Build;
