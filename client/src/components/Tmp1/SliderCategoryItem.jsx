import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 2px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  min-width: 467px;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const SliderCategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item[1]}`}>
        <Image src={item[0]} />
        <Info>
          <Title>{item[1]}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default SliderCategoryItem;
