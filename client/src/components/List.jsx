import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 95%;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  display: flex;
  margin-top: 50px;
  margin-bottom: 15px;
  font-size: 22px;
  font-family: sans-serif;
  justify-content: center;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
  margin-bottom: 3px;
`;

const ListWrapper = styled.div`
  display: flex;
`;

const List = ({ list }) => {
  return (
    <Container>
      <Wrapper>
        <Title>{list.title}</Title>
        <Hr />
        <ListWrapper>
          {list.products.map((item, i) => (
            <ListItem index={i} item={item} />
          ))}
        </ListWrapper>
      </Wrapper>
    </Container>
  );
};

export default List;
