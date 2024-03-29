import React from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = ({ total }) => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">총 판매액</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={(total / 10000000) * 100}
            text={`${(total / 10000000) * 100}%`}
            strokeWidth={5}
          />
        </div>
        <p className="title">이번달 총 판매액</p>
        <p className="amount">
          {total?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
        <p className="desc">마지막 결제금액은 포함되지 않을 수 있습니다.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">목표금액</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">12.4K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">지난 주</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">12.4K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">지난 달</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">12.4K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
