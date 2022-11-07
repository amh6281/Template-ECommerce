import React, { forwardRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Review from "../components/Review";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const Reviews = forwardRef(({ productId, getData }, ref) => {
  const [reviews, setReviews] = useState([]);

  getData(reviews.length);

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
    <Container ref={ref}>
      {reviews.map((review) => (
        <Review key={review._id} review={review} />
      ))}
    </Container>
  );
});

export default Reviews;
