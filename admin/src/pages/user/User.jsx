import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">유저 편집하기</h1>
        <Link to="/newUser">
          <button className="userAddButton">생성하기</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">길 태욱</span>
              <span className="userShowUserTitle">학생</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">세부정보</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">gtw8406</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">03.22.1998</span>
            </div>
            <span className="userShowTitle">연락처</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">010-8406-1566</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">xodnr1566@naver.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">천안 | 대한민국</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">편집하기</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>아이디</label>
                <input
                  type="text"
                  placeholder="gtw8406"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>이름</label>
                <input
                  type="text"
                  placeholder="길 태욱"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>이메일</label>
                <input
                  type="text"
                  placeholder="xodnr1566@naver.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>핸드폰 번호</label>
                <input
                  type="text"
                  placeholder="010-8406-1566"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>주소</label>
                <input
                  type="text"
                  placeholder="천안 | 대한민국"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">업데이트</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
