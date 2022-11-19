import React from "react";
import "./topbar.css";
import {
  NotificationsNone,
  Language,
  Settings,
  AddCircleOutlineOutlined,
} from "@material-ui/icons";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <span className="logo">E-Commerce Admin</span>
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Link to="/newlist" style={{ color: "inherit" }}>
              <AddCircleOutlineOutlined />
            </Link>
            <Link to="/newproduct" style={{ color: "inherit" }}>
              <AddCircleIcon />
            </Link>
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
