import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { register } from "../redux/aipCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 14px;
  padding-top: 15px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  flex: 1;
  margin: 20px 10px 0px 0px;
`;

const Register = () => {
  const [inputs, setInputs] = useState({});
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
    <Container>
      <Wrapper>
        <Title>회원가입</Title>
        <Form>
          <Input
            type="text"
            placeholder="username"
            name="username"
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <Input
            type="number"
            placeholder="business-number"
            name="businessnumber"
            onChange={handleChange}
          />
          <Agreement>
            계정을 생성함으로써 개인정보 취급방침에 따라 개인정보 취급 동의
          </Agreement>
          <Button onClick={handleClick}>일반 회원가입</Button>
          <Button>사업자 회원가입</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
