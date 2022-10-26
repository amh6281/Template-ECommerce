import React, { useContext } from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../Context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Management</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">메인</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>홈</span>
            </li>
          </Link>
          <p className="title">리스트</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>사용자</span>
            </li>
          </Link>
          <li>
            <StoreIcon className="icon" />
            <span>상품</span>
          </li>
          <li>
            <CreditCardIcon className="icon" />
            <span>주문</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>배송</span>
          </li>
          <p className="title">편의</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>통계</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>알림</span>
          </li>
          <p className="title">서비스</p>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>로그분석</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>환경설정</span>
          </li>
          <p className="title">사용자</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>프로필</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>로그아웃</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
