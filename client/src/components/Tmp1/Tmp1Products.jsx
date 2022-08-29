import styled from "styled-components";
import { Tmp1ProductsList } from "../../tmpData";
import Tmp1Product from "./Tmp1Product";

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

const Tmp1Products = ({ title }) => {
  return (
    <div>
      <Title> {title} </Title>
      <Hr />
      <Container>
        {Tmp1ProductsList.map((item) => (
          <Tmp1Product item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Tmp1Products;
