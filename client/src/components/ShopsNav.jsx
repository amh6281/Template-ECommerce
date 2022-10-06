import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { shopCat } from "../data";

const Container = styled.div`
  background-color: #ffffff;
  padding: 26px 0px 20px;
  width: 100%;
`;
const Wrapper = styled.div`
  padding: 0px 7px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Image = styled.img`
  width: 54px;
  height: 54px;
  margin: 0px 18px 4px;
  object-fit: cover;
  border-radius: 50%;
`;

const Title = styled.h4`
  font-size: 14px;
  color: #333333;
  font-weight: 500;
`;

const ShopsNav = () => {
  const [path, setPath] = useState(0);
  return (
    <Container>
      <Wrapper>
        <Link to="/shops" style={{ color: "inherit" }}>
          <CatWrapper onClick={() => setPath(0)}>
            <Image src="https://t1.daumcdn.net/cfile/tistory/99A7B7365A9F7BA61B" />
            {path === 0 ? (
              <Title
                style={{
                  color: "#00C73C",
                  fontWeight: "bold",
                  borderBottom: "1px solid #00C73C",
                }}
              >
                전체
              </Title>
            ) : (
              <Title>전체</Title>
            )}
          </CatWrapper>
        </Link>
        {shopCat.map((item) => (
          <Link to={`/shops/${item.id}`} style={{ color: "inherit" }}>
            <CatWrapper key={item.id} onClick={() => setPath(item.id)}>
              <Image src={item.img} />
              {path === item.id ? (
                <Title
                  style={{
                    color: "#00C73C",
                    fontWeight: "bold",
                    borderBottom: "1px solid #00C73C",
                  }}
                >
                  {item.title}
                </Title>
              ) : (
                <Title>{item.title}</Title>
              )}
            </CatWrapper>
          </Link>
        ))}
      </Wrapper>
    </Container>
  );
};

export default ShopsNav;
