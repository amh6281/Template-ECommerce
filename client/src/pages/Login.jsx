import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { login } from "../redux/aipCalls";

const TopContainer = styled.div`
  padding: 0px 0px 48px;
`;

const TopWrapper = styled.div`
  margin: 0px 580px;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  margin: 108px 0px 0px;
  width: 200px;
  height: 50px;
`;

const MidContainer = styled.div``;

const MidWrapper = styled.div`
  margin: 0px 722.5px;
`;

const InputWrapper = styled.div`
  border-left: 1px solid #ededed;
  border-right: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  border-radius: 4px;
  height: 50%;
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  padding: 20px 28px;
`;

const Inputs = styled.div`
  display: flex;
  width: 100%;
  padding: 14px 17px 13px;
  border: 1px solid #ededed;
  border-radius: 4px;
  align-items: center;
  gap: 4px;
`;

const Input = styled.input`
  font-size: 14px;
  font-weight: bold;
  border: none;
  width: 100%;
  outline: none;
`;

const RegisterBtn = styled.button`
  padding: 13px 0px;
  font-size: 14px;
  border: 1px solid #03c75a;
  color: #03c75a;
  background-color: white;
  width: 100%;
  margin-top: 50px;
  cursor: pointer;
`;

const Division = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Title = styled.h4`
  border-bottom: ${({ isBusiness }) => (isBusiness ? "" : "1px solid #d1d1d1")};
  width: 100%;
  border-radius: 4px;
  padding: 17px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ isBusiness }) => (isBusiness ? "" : "#F8F9FA")};
`;

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px 0px 35px;
`;

const Option = styled.h4`
  color: #888;
  font-size: ${(props) => (props.type === "desc" ? "12px" : "14px")};
  font-weight: 500;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <>
      <TopContainer>
        <TopWrapper>
          <Logo src="https://user-images.githubusercontent.com/83646986/190376063-17549320-72a4-472b-a0d9-516073fcfca3.png" />
        </TopWrapper>
      </TopContainer>
      <MidContainer>
        <MidWrapper>
          <Division>
            <Title>로그인</Title>
          </Division>
          <InputWrapper>
            <InputBox>
              <Inputs>
                <PermIdentityOutlinedIcon />
                <Input
                  type="text"
                  placeholder="아이디"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Inputs>
              <Inputs>
                <HttpsOutlinedIcon />
                <Input
                  type="password"
                  placeholder="비밀번호"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Inputs>
              <RegisterBtn onClick={handleClick}>로그인</RegisterBtn>
            </InputBox>
          </InputWrapper>
          <OptionWrapper>
            <Option>비밀번호 찾기</Option>
            <Option>|</Option>
            <Option>아이디 찾기</Option>
          </OptionWrapper>
        </MidWrapper>
      </MidContainer>
    </>
  );
};

export default Login;
