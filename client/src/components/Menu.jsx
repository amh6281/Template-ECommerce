import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

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
  width: 250px;
  background-color: white;
  height: 100vh;
  color: black;
  font-size: 14px;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid #f5f5f5;
`;

const Login = styled.div``;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>YouTube</Logo>
        </Link>
        <Item>
          <HomeIcon />홈
        </Item>
        <Item>
          <Man2OutlinedIcon />
          남성패션
        </Item>
        <Item>
          <Woman2OutlinedIcon />
          여성패션
        </Item>
        <Hr />
        <Item>
          <BedOutlinedIcon />
          가구/인테리어
        </Item>
        <Item>
          <ContentCutOutlinedIcon />
          화장품/미용
        </Item>
        <Item>
          <RestaurantMenuOutlinedIcon />
          식품
        </Item>
        <Item>
          <ChildFriendlyOutlinedIcon />
          출산/유아동
        </Item>
        <Item>
          <PetsOutlinedIcon />
          반려동물용품
        </Item>
        <Item>
          <BlenderOutlinedIcon />
          생활/주방용품
        </Item>
        <Item>
          <KitchenOutlinedIcon />
          가전
        </Item>
        <Item>
          <CameraAltOutlinedIcon />
          디지털
        </Item>
        <Item>
          <ComputerOutlinedIcon />
          컴퓨터
        </Item>
        <Item>
          <PedalBikeOutlinedIcon />
          스포츠/레저
        </Item>
        <Item>
          <MedicalServicesOutlinedIcon />
          건강/의료용품
        </Item>
        <Item>
          <DirectionsCarFilledOutlinedIcon />
          자동차/공구
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          취미/문구/악세
        </Item>
        <Item>
          <AutoStoriesOutlinedIcon />
          도서
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
