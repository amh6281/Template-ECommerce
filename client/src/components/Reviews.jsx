import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Review from "../components/Review";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const NewReview = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #f5f5f5;
  color: black;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Reviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await publicRequest.get(`/reviews/${productId}`);
        setReviews(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchReviews();
  }, [productId]);

  return (
    <Container>
      <NewReview>
        <Avatar src="https://img1a.coupangcdn.com/image/productreview/web/pdp/profile/img-profile-empty.png" />
        <Input placeholder="리뷰 추가..." />
      </NewReview>
      {reviews.map((review) => (
        <Review key={review._id} review={review} />
      ))}
    </Container>
  );
};

export default Reviews;
