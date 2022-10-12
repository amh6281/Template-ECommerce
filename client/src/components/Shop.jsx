import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
<<<<<<< HEAD

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
=======
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  padding: 6px;
`;

const Wrapper = styled.div`
  padding: 38px 20px 38px 8px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  border-radius: 4px;
`;

const Logo = styled.img`
  width: 72px;
  height: 72px;
  object-fit: cover;
  margin: 5px 14px;
`;

const Info = styled.div`
  padding: 0px 0px 0px 14px;
  width: 312px;
  height: 82px;
`;

const ShopName = styled.h4`
  font-size: 15px;
  font-weight: 600;
  color: #222222;
`;

const ShopDesc = styled.h4`
  font-size: 13px;
  font-weight: 500;
  color: #666666;
`;

const ShopInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ShopCat = styled.h4`
  font-size: ${(props) => (props.type === "icon" ? "10px" : "12px")};
  font-weight: 400;
  color: ${(props) => (props.type === "icon" ? "#E6E6E6" : "#999999")};
  margin: 8px 0px 0px;
`;

const Shop = ({ shops, shopCat }) => {
  const [productCount, setProductCount] = useState([]);

  const cats = [
    "",
    "남성패션",
    "여성패션",
    "가구/인테리어",
    "화장품/미용",
    "식품",
    "출산/유아동",
    "반려동물용품",
    "생활/주방용품",
    "가전",
    "디지털",
    "컴퓨터",
    "스포츠/레저",
    "건강/의료용품",
    "자동차/공구",
    "취미/문구/악세",
    "도서",
  ];

  useEffect(() => {
    const getProductCount = async () => {
      try {
        const res = await publicRequest.get("/products");
        setProductCount(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProductCount();
  }, []);

  // Shop.shopname과 Product.shopname이 같은 상품 개수 구하기
  const countByArray = (arr) => {
    return arr?.reduce((prev, curr) => {
      prev[curr] = ++prev[curr] || 1;
      return prev;
    }, {});
  };

  const count = productCount.map((item) => item.shopname);

  const result = countByArray(count);
>>>>>>> 18911d3ce5f90fc893b090952be72ebea26fa96f

  return (
<<<<<<< HEAD
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
=======
    <div style={{ display: "flex" }}>
      {shopCat !== 0
        ? shops
            ?.filter((shop) => shop.category === shopCat)
            ?.map((item) => (
              <Link to={`/shop/${item._id}`}>
                <Container>
                  <Wrapper>
                    <Logo src={item.logo} />
                    <Info>
                      <ShopName>{item.shopname}</ShopName>
                      <ShopDesc>{item.desc}</ShopDesc>
                      <ShopInfo>
                        <ShopCat>{cats[item.category]}</ShopCat>
                        <ShopCat type="icon">|</ShopCat>
                        <ShopCat>
                          상품개수{" "}
                          {result[item.shopname] ? result[item.shopname] : 0}
                        </ShopCat>
                      </ShopInfo>
                    </Info>
                  </Wrapper>
                </Container>
              </Link>
            ))
        : shops?.map((item) => (
            <Link to={`/shop/${item._id}`}>
              <Container>
                <Wrapper>
                  <Logo src={item.logo} />
                  <Info>
                    <ShopName>{item.shopname}</ShopName>
                    <ShopDesc>{item.desc}</ShopDesc>
                    <ShopInfo>
                      <ShopCat>{cats[item.category]}</ShopCat>
                      <ShopCat type="icon">|</ShopCat>
                      <ShopCat>
                        상품개수{" "}
                        {result[item.shopname] ? result[item.shopname] : 0}
                      </ShopCat>
                    </ShopInfo>
                  </Info>
                </Wrapper>
              </Container>
            </Link>
          ))}
>>>>>>> 18911d3ce5f90fc893b090952be72ebea26fa96f
    </div>
  );
};

export default Shop;
