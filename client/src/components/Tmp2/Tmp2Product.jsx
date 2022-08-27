import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  width: 225px;
  height: 350px;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 65%;
`;

const Title = styled.h1`
  font-size: 12px;
  font-weight: initial;
  margin-left: 10px;
  display: flex;
`;

const Price = styled.h1`
  font-size: 14px;
  margin-left: 10px;
`;

const Tmp2Product = ({ item }) => {
  return (
    <div>
      <Container>
        <Image src={item.img} />
        <Title>{item.title}</Title>
        <Price>{item.price}원</Price>
      </Container>
    </div>
  );
};

export default Tmp2Product;
