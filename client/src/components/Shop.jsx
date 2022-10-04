import React from "react";
import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin-left: 20px;
`;

const Ul = styled.ul`
  margin-top: -6px;
  list-style: none;
  margin: 0;
  display: flex;
`;

const List = styled.li`
  width: 25%;
  display: inline-block;
  padding: 6px;
  vertical-align: top;
  box-sizing: border-box;
  cursor: pointer;
`;

const ImgContainer = styled.div`
  display: flex;
  padding: 18px 320px 18px 0px;
  background-color: #fff;
  border-radius: 7px;
`;

const Imagebox = styled.div`
  display: flex;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 100px;
  height: 82px;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 38px 20px 38px 8px;
`;

const Descbox = styled.div`
  flex: 1 1;
  min-width: 0;
  padding-left: 14px;
`;

const Shopname = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: bold;
  line-height: 19px;
  letter-spacing: -0.3px;
  color: #222;
`;

const Detail = styled.div`
  display: flex;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 8px;
  font-size: 12px;
  line-height: 15px;
  color: #999;
`;

const Image = styled.img`
  max-width: 72px;
  max-height: 72px;
  vertical-align: top;
`;

const Desc = styled.div`
  white-space: nowrap;
  font-size: 13px;
  line-height: 20px;
  color: #666;
`;

const Shop = ({ shop }) => {
  return (
    <div key={shop._id}>
      <Container>
        <ImgContainer>
          <Ul>
            <Imagebox>
              <Link to={`/shop/${shop._id}`} style={{ color: "inherit" }}>
                <Image src={shop.logo} />
              </Link>
            </Imagebox>
            <Descbox>
              <Shopname>{shop.shopname}</Shopname>
              <Desc>{shop.desc}</Desc>
              <Detail>인테리어 | 상품개수: 개</Detail>
            </Descbox>
          </Ul>
        </ImgContainer>
      </Container>
      <br />
    </div>
  );
};

export default Shop;
