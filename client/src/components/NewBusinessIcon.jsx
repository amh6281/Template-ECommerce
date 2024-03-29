import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Container = styled.div`
  overflow: hidden;
  width: 50%;
  margin: 0 auto;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  display: flex;
  margin-top: 50px;
  margin-bottom: 15px;
  font-size: 24px;
  font-family: sans-serif;
  text-align: center;
  align-items: center;
`;

const NewBusinessIcon = () => {
  const [shopIcons, setShopIcons] = useState([]);

  useEffect(() => {
    try {
      const fetchShopIcons = async () => {
        const res = await axios.get("http://localhost:5000/api/shops");
        setShopIcons(res.data);
      };
      fetchShopIcons();
    } catch (err) {
      console.log(err);
    }
  }, []);
  console.log(shopIcons);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const Image = styled.img`
    height: 160px;
    z-index: 2;
    object-fit: contain;
  `;

  return (
    <Container>
      <Title>🏬 신규 쇼핑몰</Title>
      <Hr />
      <Slider {...settings}>
        {shopIcons.map((shop) => (
          <Image key={shop._id} src={shop.logo} />
        ))}
      </Slider>
    </Container>
  );
};

export default NewBusinessIcon;
