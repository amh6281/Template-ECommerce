import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import Man2OutlinedIcon from "@mui/icons-material/Man2Outlined";
import Woman2OutlinedIcon from "@mui/icons-material/Woman2Outlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import ChildFriendlyOutlinedIcon from "@mui/icons-material/ChildFriendlyOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import BlenderOutlinedIcon from "@mui/icons-material/BlenderOutlined";
import KitchenOutlinedIcon from "@mui/icons-material/KitchenOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import PedalBikeOutlinedIcon from "@mui/icons-material/PedalBikeOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 11%;
  margin: 0 auto;
  position: absolute;
  color: white;
  font-size: 14px;
  z-index: 999;
  margin-left: 50px;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
  background-color: black;
  opacity: 0.7;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  cursor: pointer;
  padding: 6.3px 0px;
  border-radius: 10px;

  &:hover {
    background-color: #4b4a4a;
  }
`;

const Menu = ({ category }) => {
  return (
    <Container>
      <Wrapper>
        <Item onClick={() => category(0)}>
          <HomeIcon />
          전체카테고리
        </Item>
        <Item onClick={() => category(1)}>
          <Man2OutlinedIcon />
          남성패션
        </Item>
        <Item onClick={() => category(2)}>
          <Woman2OutlinedIcon />
          여성패션
        </Item>
        <Item onClick={() => category(3)}>
          <BedOutlinedIcon />
          가구/인테리어
        </Item>
        <Item onClick={() => category(4)}>
          <ContentCutOutlinedIcon />
          화장품/미용
        </Item>
        <Item onClick={() => category(5)}>
          <RestaurantMenuOutlinedIcon />
          식품
        </Item>
        <Item onClick={() => category(6)}>
          <ChildFriendlyOutlinedIcon />
          출산/유아동
        </Item>
        <Item onClick={() => category(7)}>
          <PetsOutlinedIcon />
          반려동물용품
        </Item>
        <Item onClick={() => category(8)}>
          <BlenderOutlinedIcon />
          생활/주방용품
        </Item>
        <Item onClick={() => category(9)}>
          <KitchenOutlinedIcon />
          가전
        </Item>
        <Item onClick={() => category(10)}>
          <CameraAltOutlinedIcon />
          디지털
        </Item>
        <Item onClick={() => category(11)}>
          <ComputerOutlinedIcon />
          컴퓨터
        </Item>
        <Item onClick={() => category(12)}>
          <PedalBikeOutlinedIcon />
          스포츠/레저
        </Item>
        <Item onClick={() => category(13)}>
          <MedicalServicesOutlinedIcon />
          건강/의료용품
        </Item>
        <Item onClick={() => category(14)}>
          <DirectionsCarFilledOutlinedIcon />
          자동차/공구
        </Item>
        <Item onClick={() => category(15)}>
          <SportsEsportsOutlinedIcon />
          취미/문구/악세
        </Item>
        <Item onClick={() => category(16)}>
          <AutoStoriesOutlinedIcon />
          도서
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
