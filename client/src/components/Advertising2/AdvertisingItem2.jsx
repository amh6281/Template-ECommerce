import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  padding: 0px;
`;

const Image = styled.img`
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: 12px;
  font-weight: initial;
  margin-left: 10px;
`;

const Price = styled.h1`
  font-size: 14px;
  margin-left: 10px;
`;

const AdvertisingItem2 = ({ item }) => {
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

export default AdvertisingItem2;
