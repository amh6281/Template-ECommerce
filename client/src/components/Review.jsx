import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  display: flex;
  gap: 10px;
  width: 765px;
  margin: 30px auto;
  display: flex;
  align-items: center;
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
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await publicRequest.get(`/users/find/${review.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [review.userId]);

  return (
    <Container>
      <Avatar src="https://img1a.coupangcdn.com/image/productreview/web/pdp/profile/img-profile-empty.png" />
      <Details>
        <Name>
          {user.username} <Date>{review.createdAt.slice(0, 10)}</Date>
        </Name>
        <Text>{review.desc}</Text>
      </Details>
    </Container>
  );
};

export default Review;
