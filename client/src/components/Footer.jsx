import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  margin-top: 100px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: 600;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
`;

const Payment = styled.img`
  width: 50%;
`;

const Shopname = styled.h4`
  height: 30px;
  width: 150px;
  margin: 0px 20px 0px 0px;
  font-size: 22px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 30px;
  width: 150px;
  margin: 0px 20px 0px 0px;
`;

const Footer = () => {
  const shop = useSelector((state) => state.shop);
  const path = useLocation().pathname.split("/")[1];
  return (
    <Container>
      <Left>
        {shop.currentShop &&
        path !== "shops" &&
        path !== "cart" &&
        path !== "order" &&
        path !== "allproducts" &&
        path !== "success" ? (
          <Link
            to={`/shop/${shop.currentShop._id}`}
            style={{ color: "inherit" }}
          >
            <Shopname>{shop.currentShop?.shopname}</Shopname>
          </Link>
        ) : (
          <Link to="/" style={{ color: "inherit" }}>
            <Logo
              src="https://user-images.githubusercontent.com/83646986/194276006-b72d9b05-a894-46cc-8ef1-09a15c173667.png"
              alt=""
            />
          </Link>
        )}
        <Desc>copyright © all rights reserved</Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>MENU</Title>
        <List>
          <ListItem>LOGIN</ListItem>
          <ListItem>REGISTER</ListItem>
          <ListItem>HOME</ListItem>
          <ListItem>CART</ListItem>
          <ListItem>MY PAGE</ListItem>
          <ListItem>ORDER</ListItem>
          <ListItem>WISH</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          충청남도 천안시 서북구 쌍용15길
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          1599-9999
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          amh6281@naver.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
