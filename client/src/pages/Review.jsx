import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import MidNav from "../components/MidNav";
import TopNav from "../components/TopNav";

const Container = styled.div``;

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const Order = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin: 25px 20px;
`;

const Title = styled.h1`
  font-size: 14px;
  font-weight: bold;
  margin-top: 40px;
  margin-right: 10px;
`;

const Price = styled.h1`
  font-size: 14px;
  font-weight: bold;
  margin-top: 40px;
`;

const ReviewWrapper = styled.div`
  display: flex;
  border-top: 1px solid black;
`;

const ReviewTitle = styled.h1`
  padding: 20px 0px 0px;
  font-size: 15px;
  width: 230px;
  height: 180px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #dcdcdc;
`;

const InputWrapper = styled.div`
  width: 730px;
  height: 180px;
  padding: 10px;
  border-bottom: 1px solid #dcdcdc;
`;

const Input = styled.input`
  outline: none;
  width: 710px;
  height: 120px;
  background-color: #f5f5f5;
  padding: 10px;
  padding-bottom: 80px;
  border: none;
`;

const Desc = styled.h1`
  color: #989ca1;
  font-size: 12px;
  padding: 12px 0px 10px;
`;

const BtnWrapper = styled.div`
  padding: 10px 10px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ReviewBtn = styled.button`
  margin: 5px;
  padding: 10px 30px;
  background-color: #000000;
  color: white;
`;

const CancelBtn = styled.button`
  margin: 5px;
  padding: 10px 30px;
  background-color: #ffffff;
  color: #000000;
`;

const Review = () => {
  const [review, setReview] = useState("");
  const location = useLocation();

  return (
    <>
      <TopNav />
      <MidNav />
      <Container>
        <Wrapper>
          <Order>
            <Image src={location.state[0].img} />
            <Title>{location.state[0].title},</Title>
            <Price>
              {location.state[0].price
                ?.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              원
            </Price>
          </Order>
          <ReviewWrapper>
            <ReviewTitle>내용</ReviewTitle>
            <InputWrapper>
              <Input
                type="text"
                placeholder="다른 고객님에게 도움이 되도록 상품에 대한 솔직한 평가를 남겨주세요."
              />
              <Desc>
                주민등록번호, 연락처, 주소 등의 정보는 타인에게 노출될 경우
                개인정보 도용의 위험이 있으니 작성에 주의해 주시기 바랍니다.
              </Desc>
            </InputWrapper>
          </ReviewWrapper>
          <BtnWrapper>
            <ReviewBtn>등록하기</ReviewBtn>
            <CancelBtn>취소하기</CancelBtn>
          </BtnWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Review;
