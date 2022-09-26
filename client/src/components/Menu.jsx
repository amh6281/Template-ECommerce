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
`;

const Wrapper = styled.div`
  padding: 18px 26px;
  position: relative;
  left: 1380px;
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

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/shops" style={{ color: "inherit" }}>
          <Item>
            <HomeIcon />
            전체카테고리
          </Item>
        </Link>
        <Link to={`/shops/${1}`} style={{ color: "inherit" }}>
          <Item>
            <Man2OutlinedIcon />
            남성패션
          </Item>
        </Link>
        <Link to={`/shops/${2}`} style={{ color: "inherit" }}>
          <Item>
            <Woman2OutlinedIcon />
            여성패션
          </Item>
        </Link>
        <Link to={`/shops/${3}`} style={{ color: "inherit" }}>
          <Item>
            <BedOutlinedIcon />
            가구/인테리어
          </Item>
        </Link>
        <Link to={`/shops/${4}`} style={{ color: "inherit" }}>
          <Item>
            <ContentCutOutlinedIcon />
            화장품/미용
          </Item>
        </Link>
        <Link to={`/shops/${5}`} style={{ color: "inherit" }}>
          <Item>
            <RestaurantMenuOutlinedIcon />
            식품
          </Item>
        </Link>
        <Link to={`/shops/${6}`} style={{ color: "inherit" }}>
          <Item>
            <ChildFriendlyOutlinedIcon />
            출산/유아동
          </Item>
        </Link>
        <Link to={`/shops/${7}`} style={{ color: "inherit" }}>
          <Item>
            <PetsOutlinedIcon />
            반려동물용품
          </Item>
        </Link>
        <Link to={`/shops/${8}`} style={{ color: "inherit" }}>
          <Item>
            <BlenderOutlinedIcon />
            생활/주방용품
          </Item>
        </Link>
        <Link to={`/shops/${9}`} style={{ color: "inherit" }}>
          <Item>
            <KitchenOutlinedIcon />
            가전
          </Item>
        </Link>
        <Link to={`/shops/${10}`} style={{ color: "inherit" }}>
          <Item>
            <CameraAltOutlinedIcon />
            디지털
          </Item>
        </Link>
        <Link to={`/shops/${11}`} style={{ color: "inherit" }}>
          <Item>
            <ComputerOutlinedIcon />
            컴퓨터
          </Item>
        </Link>
        <Link to={`/shops/${12}`} style={{ color: "inherit" }}>
          <Item>
            <PedalBikeOutlinedIcon />
            스포츠/레저
          </Item>
        </Link>
        <Link to={`/shops/${13}`} style={{ color: "inherit" }}>
          <Item>
            <MedicalServicesOutlinedIcon />
            건강/의료용품
          </Item>
        </Link>
        <Link to={`/shops/${14}`} style={{ color: "inherit" }}>
          <Item>
            <DirectionsCarFilledOutlinedIcon />
            자동차/공구
          </Item>
        </Link>
        <Link to={`/shops/${15}`} style={{ color: "inherit" }}>
          <Item>
            <SportsEsportsOutlinedIcon />
            취미/문구/악세
          </Item>
        </Link>
        <Link to={`/shops/${16}`} style={{ color: "inherit" }}>
          <Item>
            <AutoStoriesOutlinedIcon />
            도서
          </Item>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Menu;