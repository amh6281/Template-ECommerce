import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import MidNav from "../components/MidNav";
import TopNav from "../components/TopNav";
import Menu from "../components/Menu";
import { publicRequest } from "../requestMethods";
import { LocalShippingOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const ProductsWrapper = styled.div`
  padding: 0px 20px;
  margin: 0px 290px;
  border-right: 1px solid #ececec;
`;

const Wrapper = styled.div`
  padding: 20px 0px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  border-top: 1px solid #ececec;

  &:hover {
    background-color: #fafcff;
  }
`;

const InfoLeft = styled.div`
  height: 140px;
  flex: 9;
  border-right: 1px solid #ececec;
`;

const Left = styled.div`
  display: flex;
`;

const InfoRight = styled.div`
  height: 140px;
  padding: 0px 0px 0px 20px;
  display: flex;
  flex-direction: column;
  flex: 1.8;
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border: 1px solid #ececec;
  cursor: pointer;

  &:hover {
    border: 1px solid lightblue;
  }
`;

const Info = styled.div`
  padding: 4px 18px 0px 21px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  color: #000000;
  font-size: 12px;
  margin: 0px 0px 5px;
  cursor: pointer;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 0px 12px;
`;

const Price = styled.h4`
  color: ${(props) => (props.type === "delivery" ? "#959595" : "#f24443")};
  margin: 0px 4px 0px 0px;
  font-size: ${(props) => (props.type === "delivery" ? "12px" : " 15px")};
  font-weight: ${(props) => (props.type === "delivery" ? "500" : " 600")};
`;

const Desc = styled.h4`
  color: #77808f;
  font-size: 12px;
  font-weight: 500;
  margin: 0px 0px 11px;
`;

const CatWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0px 0px 7px;
`;

const Category = styled.h4`
  color: #777777;
  font-size: 12px;
  font-weight: 500;
`;

const Date = styled.h4`
  color: #777777;
  font-size: 12px;
  margin-top: 11px;
  font-weight: 500;
`;

const ShopInfo = styled.div`
  margin: 1px 0px 7px;
  display: flex;
  align-items: center;
`;

const Shopname = styled.h4`
  color: #222222;
  font-size: 12px;
  cursor: pointer;
`;

const ShopBtn = styled.h4`
  color: #959595;
  font-size: 11px;
  margin: 0px 0px 0px 5px;
  padding: 0px 5px 0px 4px;
  background-color: #ffffff;
  border: 1px solid #dfdfdf;
  cursor: pointer;
`;

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [shops, setShops] = useState([]);
  const [category, setCategory] = useState(0);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await publicRequest.get("/products");
        setAllProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllProducts();
  }, []);

  useEffect(() => {
    const getShops = async () => {
      try {
        const res = await publicRequest.get("/shops");
        setShops(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getShops();
  }, []);
  console.log(category);
  return (
    <>
      <TopNav />
      <MidNav />
      {/* catNav */}
      <Banner />
      <Container>
        <Menu category={(e) => setCategory(e)} />
        <ProductsWrapper>
          {allProducts.map((item) => (
            <Wrapper>
              <InfoLeft>
                <Left>
                  <ImgWrapper>
                    <Link
                      to={`/product/${item._id}`}
                      style={{ color: "inherit" }}
                    >
                      <Image src={item.img} />
                    </Link>
                  </ImgWrapper>
                  <Info>
                    <Link
                      to={`/product/${item._id}`}
                      style={{ color: "inherit" }}
                    >
                      <Title>{item.title}</Title>
                    </Link>
                    <PriceWrapper>
                      <Price>
                        {item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        원
                      </Price>
                      <LocalShippingOutlined
                        style={{
                          color: "#959595",
                          fontSize: "14px",
                          margin: "0px 3px 1px 2px",
                        }}
                      />
                      <Price type="delivery">무료배송</Price>
                    </PriceWrapper>
                    <CatWrapper>
                      {item.categories.map((i) => (
                        <Category>{i}</Category>
                      ))}
                    </CatWrapper>
                    <Desc>{item.desc}</Desc>
                    <Date>등록일 {item.createdAt.substr(0, 10)}</Date>
                  </Info>
                </Left>
              </InfoLeft>
              <InfoRight>
                <Link to={`/shop/${item.shopId}`}>
                  <ShopInfo>
                    <Shopname>{item.shopname}</Shopname>
                    <ShopBtn>정보</ShopBtn>
                  </ShopInfo>
                </Link>
              </InfoRight>
            </Wrapper>
          ))}
        </ProductsWrapper>
      </Container>
    </>
  );
};

export default AllProducts;
