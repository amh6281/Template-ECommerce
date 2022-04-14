import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 50%;
  cursor: pointer;
`;

const BuildingShop = () => {
  const ShowImg = () => {};

  return (
    <Container>
      <Wrapper>
        <Title>쇼핑몰 구축</Title>
        <Form>
          <Input type="file" />
          <Input placeholder="Logo" />
          <Input placeholder="쇼핑몰 이름" />
          <Input placeholder="카테고리" />
          <Input placeholder="대표 이미지" />
          <Image
            src="https://user-images.githubusercontent.com/83646986/161936590-fc1146fa-adb2-476a-aa0f-d95dceee53b5.png"
            onClick={ShowImg}
          />
          <Button>생성</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default BuildingShop;
