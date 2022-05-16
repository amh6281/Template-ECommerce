import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  border: 1px solid #eaeaea;
  padding: 0px;
`;

const Image = styled.img`
  object-fit: cover;
`;

const TodayDiscovery = ({ item }) => {
  return (
    <div>
      <Container>
        <Image src={item.img} />
      </Container>
    </div>
  );
};

export default TodayDiscovery;
