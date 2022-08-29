import styled from "styled-components";
import { shopList } from "../data";
import Shop from "./Shop";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  display: flex;
  margin-top: 110px;
  margin-bottom: 15px;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  font-size: 19px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
  margin-bottom: 3px;
`;

const Shops = ({ title }) => {
  return (
    <div>
      <Title> {title} </Title>
      <Hr />
      <Container>
        {shopList.map((item) => (
          <Shop item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Shops;
