import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import { addProduct } from "../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import { publicRequest } from "../requestMethods";
import TopNav from "../components/TopNav";
import MidNav from "../components/MidNav";
import CatNav from "../components/CatNav";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

const Container = styled.div``;

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 50px 0px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  padding-right: 50px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding-left: 50px;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ShopName = styled.h3`
  font-weight: 600;
  color: gray;
`;

const ShopId = styled.h3`
  font-weight: 500;
  font-size: 12px;
  color: gray;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const TitleName = styled.h1`
  font-weight: bold;
  font-size: 20px;
  color: #222222;
  margin: 0px 8px 0px 0px;
`;

const TitleButton = styled.button`
  padding: 2px 6px;
  margin: 1px 0px 0px;
  color: #03c75a;
  border: 1px solid #03c75a;
  font-size: 12px;
  font-weight: bold;
  background-color: white;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: ${(props) => (props.type === "price" ? "18px" : "24px")};
`;

const FilterContainer = styled.div`
  width: 100%;
  margin: 15px 0px;
`;

const Filter = styled.div`
  margin-bottom: 8px;
`;

const FilterTitle = styled.select`
  width: 100%;
  font-size: 13px;
  padding: 10px 35px 10px 15px;
  color: #666666;
`;

const FilterTitleOption = styled.option``;

const AddContainer = styled.div`
  width: 100%;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  justify-content: space-between;
`;

const AmountWrapper = styled.div`
  min-width: 90px;
  height: 30px;
  display: flex;
  align-items: center;
  border: 1px solid #dde0e3;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => (props.type === "total" ? "15px" : "")};
  color: ${(props) => (props.type === "total" ? "#222222" : "24px")};
  margin: ${(props) => (props.type === "total" ? "0px 16px 0px 0px" : "")};
`;

const Total = styled.div`
  margin: 26px 0px 0px;
  display: flex;
  align-items: center;
`;

const TotalText = styled.h3`
  font-size: ${(props) => (props.type === "total" ? "24px" : "13px")};
  color: ${(props) =>
    props.type === "price"
      ? "#00000"
      : props.type === "quantity"
      ? "#999999"
      : "#6B90DC"};
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
`;

const DetailImg = styled.img`
  object-fit: cover;
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  border: 2px solid #6b90dc;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 3px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const EventContainer = styled.div`
  margin-top: 20px;
  border: 1px solid #989aa5;
  padding: 13px 16px;
`;

const EventWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const EventTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

const EventButton = styled.button`
  padding: 3px 9px 3px 9px;
  background-color: #454752;
  color: #ffffff;
  font-size: 12px;
`;

const EventBorder = styled.div`
  background-color: #f7f8fa;
  margin: 15px 16px 0px;
  padding: 14px 16px;
`;

const EventBorderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const EventDesc = styled.h3`
  font-size: ${(props) => (props.type === "title" ? "12px" : "13px")};
  color: ${(props) =>
    props.type === "tip"
      ? "red"
      : props.type === "title"
      ? "#ADADAD"
      : "#333333"};
  margin: ${(props) => (props.type === "tip" ? "0px 3px 0px 0px" : "")};
  margin-bottom: 5px;
  margin-left: ${(props) => (props.type === "title" ? "25px" : "")};
  border-bottom: ${(props) =>
    props.type === "title" ? "1px solid #ADADAD" : ""};
`;

const DeliveryContainer = styled.div`
  border: ${(props) => (props.type === "price" ? "" : "1px solid #ededed;")};
  margin: 15px 0px 0px;
  padding: ${(props) =>
    props.type === "price" ? "0px 0px 16px" : "14px 16px"};
  display: flex;
  align-items: center;
  position: relative;
`;

const DeliveryWrapper = styled.div`
  background-color: ${(props) => (props.type === "icon" ? "#934ADA" : "")};
  border-radius: ${(props) => (props.type === "icon" ? "50%" : "")};
  margin-left: ${(props) =>
    props.type === "icon" ? "" : props.type === "price" ? "" : "20px"};
  width: ${(props) => (props.type === "icon" ? "40px" : "")};
  height: ${(props) => (props.type === "icon" ? "40px" : "")};
  position: ${(props) => (props.type === "icon" ? "relative" : "")};
`;

const DeliveryIcon = styled.div`
  position: relative;
  top: 8px;
  left: 8px;
`;

const DeliveryText = styled.h3`
  color: ${(props) => (props.type === "small" ? "#934ADA" : "#333333")};
  font-size: ${(props) => (props.type === "small" ? "11px" : "12px")};
  margin: 0px 0px 2px;
  padding: ${(props) => (props.type === "price" ? "0px 0px 0px 1px" : "")};
`;

const SelectItem = styled.div`
  margin: 8px 119px 12px 0px;
`;

const SelectItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SelectItemDetail = styled.div`
  color: #333333;
  font-size: 13px;
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const shop = useSelector((state) => state.shop);
  const itemCat = product.categories;
  const dispatch = useDispatch();
  const price = product.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const totalPrice = (quantity * product.price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
    //color, size 안넣으면 배열 형태로 나옴. 하나 선택하기 위해 넣는거.
  };

  return (
    <Container>
      <TopNav />
      <MidNav />
      <CatNav itemCat={itemCat?.join("/")} />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <TopWrapper>
            <ShopName>{shop.currentShop?.shopname}</ShopName>
            <ShopId>상품ID : {product._id}</ShopId>
          </TopWrapper>
          <hr
            style={{
              margin: "10px 0px",
              backgroundColor: "#bcbbbb",
              border: "none",
              height: "2px",
            }}
          />
          <Title>
            <TitleName>{product.title}</TitleName>
            <TitleButton>오늘출발</TitleButton>
          </Title>
          <Desc>{product.desc}</Desc>
          <PriceWrapper>
            <Price>{price}</Price>
            <Price type="price">원</Price>
          </PriceWrapper>
          <EventContainer>
            <EventWrapper>
              <EventTitle>{currentUser.username}님만을 위한 혜택</EventTitle>
              <EventButton>쿠폰받기</EventButton>
            </EventWrapper>
            <EventBorder>
              <EventBorderWrapper>
                <EventDesc type="tip">TIP.</EventDesc>
                <EventDesc>포인트 더 받는 방법</EventDesc>
                <EventDesc style={{ marginLeft: "120px" }}>
                  + 최대 2,000원
                </EventDesc>
              </EventBorderWrapper>
              <EventBorderWrapper>
                <EventDesc type="title">카카오페이 결제 시</EventDesc>
                <EventDesc
                  type="title"
                  style={{
                    marginLeft: "180px",
                  }}
                >
                  1,000원
                </EventDesc>
              </EventBorderWrapper>
              <EventBorderWrapper>
                <EventDesc type="title">충전포인트로 결제 시</EventDesc>
                <EventDesc
                  type="title"
                  style={{
                    marginLeft: "168px",
                  }}
                >
                  1,000원
                </EventDesc>
              </EventBorderWrapper>
            </EventBorder>
          </EventContainer>
          <hr style={{ marginTop: "15px", borderTop: "1px solid #ededed" }} />
          <DeliveryContainer>
            <DeliveryWrapper type="icon">
              <DeliveryIcon>
                <LocalShippingOutlinedIcon />
              </DeliveryIcon>
            </DeliveryWrapper>
            <DeliveryWrapper>
              <DeliveryText>오늘출발 상품</DeliveryText>
              <DeliveryText type="small">
                00:00:00 내에 결제 시 오늘 바로 발송됩니다.
              </DeliveryText>
            </DeliveryWrapper>
          </DeliveryContainer>
          <hr style={{ marginTop: "15px", borderTop: "1px solid #ededed" }} />
          <DeliveryContainer type="price">
            <DeliveryWrapper type="price">
              <DeliveryText
                style={{
                  fontSize: "13px",
                  color: "#333333",
                  display: "flex",
                  fontWeight: "500",
                }}
              >
                택배 배송
                <DeliveryText
                  style={{
                    fontSize: "13px",
                    color: "#E9E9E9",
                    display: "flex",
                    margin: "0px 9px",
                  }}
                >
                  |
                  <DeliveryText
                    style={{
                      fontSize: "13px",
                      color: "#333333",
                      margin: "0px 9px",
                    }}
                  >
                    무료배송
                  </DeliveryText>
                </DeliveryText>
              </DeliveryText>
              <DeliveryText
                style={{
                  margin: "3px 0px 0px",
                  color: "#999999",
                  fontSize: "13px",
                  fontWeight: "500",
                }}
              >
                제주 추가 12,000원, 제주 외 도서지역 추가 15,000원
              </DeliveryText>
            </DeliveryWrapper>
          </DeliveryContainer>
          <hr
            style={{ borderTop: "1px solid #ededed", marginBottom: "15px" }}
          />
          <FilterContainer>
            <Filter>
              <FilterTitle onChange={(e) => setSize(e.target.value)}>
                <FilterTitleOption selected disabled>
                  크기
                </FilterTitleOption>
                {product.size?.map((s) => (
                  <FilterTitleOption key={s}>{s}</FilterTitleOption>
                ))}
              </FilterTitle>
            </Filter>
            <Filter>
              <FilterTitle onChange={(e) => setColor(e.target.value)}>
                <FilterTitleOption selected disabled>
                  색상
                </FilterTitleOption>
                {product.color?.map((c) => (
                  <FilterTitleOption key={c}>{c}</FilterTitleOption>
                ))}
              </FilterTitle>
            </Filter>
          </FilterContainer>
          <hr style={{ borderTop: "1px solid #ededed", margin: "15px 0px" }} />
          <SelectItem>
            <SelectItemWrapper>
              <SelectItemDetail style={{ color: "#6B90DC" }}>
                [오늘출발]
              </SelectItemDetail>
              <SelectItemDetail>{product.title}</SelectItemDetail>
              <SelectItemDetail>/</SelectItemDetail>
              <SelectItemDetail>{size}</SelectItemDetail>
              <SelectItemDetail>/</SelectItemDetail>
              <SelectItemDetail>{color}</SelectItemDetail>
            </SelectItemWrapper>
          </SelectItem>
          <AddContainer>
            <AmountContainer>
              <AmountWrapper>
                <Remove
                  style={{
                    backgroundColor: "#F1F2F4",
                    color: "#000000",
                    margin: "-1px 0px 0px 0px",
                    opacity: "0.2",
                    width: "30px",
                    height: "100%",
                  }}
                  onClick={() => handleQuantity("dec")}
                />
                <Amount>{quantity}</Amount>
                <Add
                  style={{
                    backgroundColor: "#F1F2F4",
                    color: "#000000",
                    margin: "-1px 0px 0px 0px",
                    width: "30px",
                    height: "100%",
                  }}
                  onClick={() => handleQuantity("inc")}
                />
              </AmountWrapper>
              <Amount type="total">
                {totalPrice}
                <Amount>원</Amount>
              </Amount>
            </AmountContainer>
            <hr
              style={{ borderTop: "1px solid #ededed", margin: "15px 0px" }}
            />
            <Total>
              <TotalText type="price">총 상품 금액</TotalText>
              <TotalText type="quantity" style={{ marginLeft: "174px" }}>
                총 수량 {quantity}개 |
              </TotalText>
              <TotalText type="total" style={{ marginLeft: "6px" }}>
                {totalPrice}
              </TotalText>
              <TotalText style={{ fontSize: "18px" }}>원</TotalText>
            </Total>
            <hr
              style={{ borderTop: "1px solid #ededed", margin: "15px 0px" }}
            />
            {currentUser ? (
              <Button onClick={handleClick}>장바구니</Button>
            ) : (
              <Button onClick={() => alert("로그인이 필요합니다.")}>
                장바구니
              </Button>
            )}
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <ImageWrapper>
        <Hr />
        {product.detailImg?.map((img) => (
          <DetailImg key={img} src={img} />
        ))}
      </ImageWrapper>
      <Hr />
      <Footer />
    </Container>
  );
};

export default Product;
