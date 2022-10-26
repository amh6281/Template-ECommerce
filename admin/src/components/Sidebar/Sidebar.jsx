import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />홈
              </li>
            </Link>
            <Link to="/login" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                로그인
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                상품
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">빠른 메뉴</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              분석
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              판매
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              거래
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              리포트
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">알림</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              메일
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              피드백
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              메세지
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">직원전용</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              관리
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              분석
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              리포트
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
