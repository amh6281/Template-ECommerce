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
`;

const Image = styled.img`
  width: 80%;
  height: 100%;
  object-fit: cover;
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

const Title = styled.h1`
  font-weight: bold;
  font-size: 20px;
  color: #222222;
  margin-top: 20px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const PriceWrapper = styled.div`
  border: 1px solid gray;
  padding: 5px 5px;
  background-color: #fafafa;
  border: none;
`;

const Price = styled.span`
  font-weight: ${(props) => (props.type === "price" ? "500" : "600")};
  font-size: ${(props) => (props.type === "price" ? "20px" : "40px")};
  color: ${(props) => (props.type === "price" ? "gray" : "")};
  margin-left: ${(props) => (props.type === "price" ? "5px" : "")};
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
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
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

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
  margin-top: 30px;
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
  border: 1px solid #ededed;
  margin: 15px 0px 0px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  position: relative;
`;

const DeliveryWrapper = styled.div`
  background-color: ${(props) => (props.type === "icon" ? "#934ADA" : "")};
  border-radius: ${(props) => (props.type === "icon" ? "50%" : "")};
  margin-left: ${(props) => (props.type === "icon" ? "" : "20px")};
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
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <PriceWrapper>
            <Price>{price}</Price>
            <Price type="price">원</Price>
            <div>{color}</div>
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
          <hr style={{ marginTop: "15px", borderTop: "0.5px solid #ededed" }} />
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
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            {currentUser ? (
              <Button onClick={handleClick}>ADD TO CART</Button>
            ) : (
              <Button onClick={() => alert("로그인이 필요합니다.")}>
                ADD TO CART
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
