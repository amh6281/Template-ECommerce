import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const NavCategory = () => {
  return (
    <Container>
      <Wrapper>
        <MenuItem>남성패션</MenuItem>
        <MenuItem>여성패션</MenuItem>
        <MenuItem>가구/인테리어</MenuItem>
        <MenuItem>화장품/미용</MenuItem>
        <MenuItem>식품</MenuItem>
        <MenuItem>출산/유아동</MenuItem>
        <MenuItem>반려동물</MenuItem>
        <MenuItem>생활/주방</MenuItem>
        <MenuItem>가전</MenuItem>
        <MenuItem>디지털</MenuItem>
        <MenuItem>컴퓨터</MenuItem>
        <MenuItem>스포츠/레저</MenuItem>
        <MenuItem>건강/의료</MenuItem>
        <MenuItem>자동차/공구</MenuItem>
        <MenuItem>취미/문구/악기</MenuItem>
        <MenuItem>도서</MenuItem>
      </Wrapper>
    </Container>
  );
};

export default NavCategory;
