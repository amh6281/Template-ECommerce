import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  background-color: #eef115;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
`;

const Tmp1Announcement = () => {
  return <Container>카카오톡 채널 추가 시 2,000원 할인쿠폰 지급!</Container>;
};

export default Tmp1Announcement;
