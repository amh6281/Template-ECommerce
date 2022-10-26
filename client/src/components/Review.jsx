import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: black;
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #606060;
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Review = ({ review }) => {
  return (
    <Container>
      <Avatar src="https://img1a.coupangcdn.com/image/productreview/web/pdp/profile/img-profile-empty.png" />
      <Details>
        <Name>
          MyoungHoe <Date>{review.createdAt.slice(0, 10)}</Date>
        </Name>
        <Text>{review.desc}</Text>
      </Details>
    </Container>
  );
};

export default Review;
