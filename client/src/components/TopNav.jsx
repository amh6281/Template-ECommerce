import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userRedux";
import Build from "./Build";

const Container = styled.div`
  background: #f0f0f0;
  height: 32px;
`;

const Wrapper = styled.div`
  width: 50%;
  height: 32px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

const MenuItem = styled.div`
  font-size: 11px;
  cursor: pointer;
  font-weight: 600;
`;

const TopNav = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <MenuItem
              onClick={() =>
                currentUser.isEntrepreneur
                  ? setOpen(true)
                  : alert("사업자가 아닙니다.")
              }
              style={{ fontWeight: 500 }}
            >
              입점하기
            </MenuItem>
          </Left>
          <Right>
            <Link to="/register" style={{ color: "inherit" }}>
              {currentUser ? (
                <MenuItem>{currentUser.username}님</MenuItem>
              ) : (
                <MenuItem>REGISTER</MenuItem>
              )}
            </Link>
            <Link to="/login" style={{ color: "inherit" }}>
              {currentUser ? (
                <MenuItem
                  onClick={handleClick}
                  style={{
                    border: "0.5px solid lightgray",
                    backgroundColor: "#fafafa",
                    color: "#888888",
                    padding: "4px",
                  }}
                >
                  로그아웃
                </MenuItem>
              ) : (
                <MenuItem>SIGN IN</MenuItem>
              )}
            </Link>
            <MenuItem style={{ fontWeight: 500 }}>고객센터</MenuItem>
          </Right>
        </Wrapper>
      </Container>
      {open && <Build setOpen={setOpen} />}
    </>
  );
};

export default TopNav;
