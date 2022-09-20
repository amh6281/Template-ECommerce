import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Build from "./Build.jsx";
import Menu from "./Menu";

const Container = styled.div`
  height: 106px;
`;

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 28px 0px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchContainer = styled.div`
  width: 25%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-bottom: 2.5px solid black;
  border-radius: 3px;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  font-size: 15px;
`;

const Image = styled.img`
  width: 50%;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  left: 50px;
`;

const Logo = styled.h1`
  font-weight: 600;
`;

const MidNav = () => {
  const [open, setOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);

  const quantity = useSelector((state) => state.cart.quantity);
  const { currentUser } = useSelector((state) => state.user);
  const shop = useSelector((state) => state.shop);

  const path = useLocation().pathname.split("/")[1];
  const main = window.location.path;

  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            {shop.currentShop && path !== "shops" && main !== "/" ? (
              <Logo>{shop.currentShop?.shopname}</Logo>
            ) : (
              <Image src="https://user-images.githubusercontent.com/83646986/190376063-17549320-72a4-472b-a0d9-516073fcfca3.png" />
            )}
          </Left>
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
                      <ShoppingCartOutlined style={{ fontSize: 50 }} />
                    </Badge>
                  </>
                ) : (
                  <Badge badgeContent={0} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                )}
              </MenuItem>
            </Link>
            <Image
              src="https://user-images.githubusercontent.com/83646986/190380972-555dab6d-f3b1-4d24-a386-e9dfc4bd620b.png"
              style={{ width: "50px", height: "50px", cursor: "pointer" }}
              onClick={(e) => setCatOpen((prev) => (prev ? false : true))}
            />
          </Right>
        </Wrapper>
      </Container>
      {open && <Build setOpen={setOpen} />}
      {catOpen && <Menu setOpen={setCatOpen} />}
    </>
  );
};

export default MidNav;
