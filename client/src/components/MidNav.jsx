import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { useSelector } from "react-redux";
import Build from "./Build.jsx";
import Menu from "./Menu";

const Container = styled.div`
  height: 116px;
`;

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  width: 25%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-bottom: 2.5px solid black;
  border-radius: 3px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const MidNav = () => {
  const [open, setOpen] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <Container>
        <Wrapper>
          <Center>
            <SearchContainer>
              <Input />
              <Search style={{ fontSize: 22 }} />
            </SearchContainer>
          </Center>
          <Right>
            <Link to={`/cart/${currentUser?._id}`} style={{ color: "inherit" }}>
              <MenuItem>
                {currentUser ? (
                  <>
                    <Badge badgeContent={quantity} color="primary">
                      <ShoppingCartOutlined style={{ fontSize: 30 }} />
                    </Badge>
                  </>
                ) : (
                  <Badge badgeContent={0} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                )}
              </MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
      {open && <Build setOpen={setOpen} />}
    </>
  );
};

export default MidNav;
