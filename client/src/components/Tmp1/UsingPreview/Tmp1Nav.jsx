import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 106px;
`;

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 28px 0px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchContainer = styled.div`
  width: 25%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-bottom: 2.5px solid black;
  border-radius: 3px;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  font-size: 15px;
`;

const Image = styled.img`
  width: 50%;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  left: 50px;
`;

const Tmp1Nav = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Image src=" https://via.placeholder.com/300x100" />
          </Left>
          <Center>
            <SearchContainer>
              <Input />
              <Search style={{ fontSize: 22 }} />
            </SearchContainer>
          </Center>
          <Right>
            <MenuItem>
              <Badge badgeContent={0} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
            <Image
              src="https://user-images.githubusercontent.com/83646986/190380972-555dab6d-f3b1-4d24-a386-e9dfc4bd620b.png"
              style={{ width: "50px", height: "50px", cursor: "pointer" }}
            />
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Tmp1Nav;
