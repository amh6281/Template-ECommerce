import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  margin: 0px 290px;
  border-right: 1px solid #ececec;
`;

const CatWrapper = styled.div`
  display: flex;
`;

const Category = styled.div`
  background-color: #525f78;
  font-size: 12px;
  flex: 1;
  color: white;
  display: flex;
  align-items: center;
  font-weight: 600;
  padding: 0px 0px 0px 10px;
`;

const ItemWrapper = styled.div`
  padding: 7px 0px 7px 5px;
  flex: 6;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
`;

const Item = styled.span`
  color: #202022;
  font-size: 12px;
  padding: 2px 120px 3px 11px;
  cursor: pointer;
`;

const ColorWrapper = styled.div`
  padding: 7px 0px 7px 5px;
  flex: 6;
  background-color: #f9f9f9;
  display: flex;
  border-left: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Color = styled.div`
  width: 23px;
  height: 23px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  cursor: pointer;
`;

const Filter = ({ filterColor, filterCat, filter }) => {
  return (
    <Container>
      <Wrapper>
        <CatWrapper>
          <Category>카테고리</Category>
          <ItemWrapper>
            {filterCat?.map((item) => (
              <Item onClick={() => filter(item)}>{item}</Item>
            ))}
          </ItemWrapper>
        </CatWrapper>
        <CatWrapper>
          <Category>색상</Category>
          <ColorWrapper>
            {filterColor?.map((item) => (
              <Color color={item} onClick={() => filter(item)} />
            ))}
          </ColorWrapper>
        </CatWrapper>
      </Wrapper>
    </Container>
  );
};

export default Filter;
