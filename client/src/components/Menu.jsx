import React from "react";
import styled from "styled-components";
import { menu } from "../data";

const Container = styled.div`
  width: 11%;
  margin: 0 auto;
  position: absolute;
  color: white;
  font-size: 14px;
  z-index: 999;
  margin-left: 50px;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
  background-color: black;
  opacity: 0.7;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  cursor: pointer;
  padding: 6.3px 0px;
  border-radius: 10px;
  background-color: ${(props) => (props.type === "color" ? "red" : "")};

  &:hover {
    background-color: #4b4a4a;
  }
`;

const Menu = ({ category, color }) => {
  return (
    <Container>
      <Wrapper>
        {menu.map((item) => (
          <>
            {color === item.id ? (
              <Item type="color" onClick={() => category(item.id)}>
                <div>{item.icon}</div>
                {item.title}
              </Item>
            ) : (
              <Item onClick={() => category(item.id)}>
                <div>{item.icon}</div>
                {item.title}
              </Item>
            )}
          </>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Menu;
