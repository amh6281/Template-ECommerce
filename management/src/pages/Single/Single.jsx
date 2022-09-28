import React from "react";
import "./single.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Chart from "../../components/Chart/Chart";
import Transaction from "../../components/Transaction/Transaction";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">사용자정보</h1>
            <div className="item">
              <img
                src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">홍길동</h1>
                <div className="detailItem">
                  <span className="itemKey">이메일:</span>
                  <span className="itemValue">aaa@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">핸드폰번호:</span>
                  <span className="itemValue">010-1234-5678</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">주소:</span>
                  <span className="itemValue">
                    충청남도 천안시 서북구 쌍용동
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="사용자 거래내역 (6개월)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Transaction />
        </div>
      </div>
    </div>
  );
};

export default Single;
