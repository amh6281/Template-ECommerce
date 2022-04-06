import styled from "styled-components";

const Container = styled.div`
  background-color: silver;
`;

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
        <MenuItem>의류</MenuItem>
        <MenuItem>식품</MenuItem>
        <MenuItem>가전</MenuItem>
        <MenuItem>뷰티</MenuItem>
        <MenuItem>주방용품</MenuItem>
        <MenuItem>스포츠</MenuItem>
        <MenuItem>도서</MenuItem>
        <MenuItem>헬스</MenuItem>
        <MenuItem>도서</MenuItem>
      </Wrapper>
    </Container>
  );
};

export default NavCategory;
