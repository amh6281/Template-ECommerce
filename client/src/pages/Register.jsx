import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/aipCalls";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

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

const Register = () => {
  const [inputs, setInputs] = useState({});
  const [isBusiness, setIsBusiness] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { ...inputs });
    alert("회원가입이 완료되었습니다.");
    navigate("/");
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
            <Title
              isBusiness={!isBusiness}
              onClick={() => setIsBusiness(false)}
            >
              일반인
            </Title>
            <Title isBusiness={isBusiness} onClick={() => setIsBusiness(true)}>
              사업자
            </Title>
          </Division>
          {isBusiness ? (
            <>
              <InputWrapper>
                <InputBox>
                  <Inputs>
                    <PermIdentityOutlinedIcon />
                    <Input
                      type="text"
                      placeholder="아이디"
                      name="username"
                      onChange={handleChange}
                    />
                  </Inputs>
                  <Inputs>
                    <HttpsOutlinedIcon />
                    <Input
                      type="password"
                      placeholder="비밀번호"
                      name="password"
                      onChange={handleChange}
                    />
                  </Inputs>
                  <Inputs>
                    <EmailOutlinedIcon />
                    <Input
                      type="text"
                      placeholder="이메일"
                      name="email"
                      onChange={handleChange}
                    />
                  </Inputs>
                  <Inputs>
                    <EmailOutlinedIcon />
                    <Input
                      type="text"
                      placeholder="사업자번호"
                      name="businessnumber"
                      onChange={handleChange}
                    />
                  </Inputs>
                  <RegisterBtn onClick={handleClick}>회원가입</RegisterBtn>
                </InputBox>
              </InputWrapper>
              <OptionWrapper>
                <Option type="desc">
                  계정을 생성함으로써 개인정보 취급방침에 따라 개인정보 취급
                  동의
                </Option>
              </OptionWrapper>
            </>
          ) : (
            <>
              <InputWrapper>
                <InputBox>
                  <Inputs>
                    <PermIdentityOutlinedIcon />
                    <Input
                      type="text"
                      placeholder="아이디"
                      name="username"
                      onChange={handleChange}
                    />
                  </Inputs>
                  <Inputs>
                    <HttpsOutlinedIcon />
                    <Input
                      type="password"
                      placeholder="비밀번호"
                      name="password"
                      onChange={handleChange}
                    />
                  </Inputs>
                  <Inputs>
                    <EmailOutlinedIcon />
                    <Input
                      type="text"
                      placeholder="이메일"
                      name="email"
                      onChange={handleChange}
                    />
                  </Inputs>
                  <RegisterBtn onClick={handleClick}>회원가입</RegisterBtn>
                </InputBox>
              </InputWrapper>
              <OptionWrapper>
                <Option type="desc">
                  계정을 생성함으로써 개인정보 취급방침에 따라 개인정보 취급
                  동의
                </Option>
              </OptionWrapper>
            </>
          )}
        </MidWrapper>
      </MidContainer>
    </>
  );
};

export default Register;
