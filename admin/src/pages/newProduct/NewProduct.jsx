import { useEffect, useState } from "react";
import "./newProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { publicRequest } from "../../requestMethods";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const [shop, setShop] = useState({});
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [detailImg, setDetailImg] = useState([]);

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser?._id;

  useEffect(() => {
    const getShop = async () => {
      try {
        const res = await publicRequest.get("/shops/" + userId);
        setShop(res.data);
      } catch {}
    };
    getShop();
  }, [userId]);
  console.log(shop);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleColor = (e) => {
    setColor(e.target.value.split(","));
  };

  const handleSize = (e) => {
    setSize(e.target.value.split(","));
  };

  const handleDetailImg = (e) => {
    const nowSelectImgList = e.target.files;
    const nowImgUrlList = [...detailImg];
    for (let i = 0; i < nowSelectImgList.length; i++) {
      const nowImgUrl = URL.createObjectURL(nowSelectImgList[i]);
      nowImgUrlList.push(nowImgUrl);
    }
    setDetailImg(nowImgUrlList);
  };
  console.log(detailImg);
  const handleClick = (e) => {
    e.preventDefault();
    const product = {
      ...inputs,
      img: file,
      categories: cat,
      shopId: shop[0]?._id,
      shopCat: shop[0]?.category,
      color: color,
      size: size,
      detailImg: detailImg,
      shopname: shop[0]?.shopname,
    };
    addProduct(product, dispatch);
  };
  console.log(file);
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">상품 추가</h1>
      <div className="bottom">
        <div className="left">
          <img
            className="img"
            src={
              file
                ? file
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
        </div>
        <div className="right">
          <form className="addProductForm">
            <div className="addProductItem">
              <label htmlFor="file">
                이미지
                <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                accept="image/*"
                onChange={(e) =>
                  setFile(URL.createObjectURL(e.target.files[0]))
                }
                style={{ display: "none" }}
              />
            </div>
            <div className="addProductItem">
              <label>상품명</label>
              <input
                name="title"
                type="text"
                placeholder="Apple Airpods"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>상품 설명</label>
              <input
                name="desc"
                type="text"
                placeholder="description..."
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>세부 이미지</label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleDetailImg}
              />
            </div>
            <div className="addProductItem">
              <label>색상</label>
              <input
                type="text"
                placeholder="red,black,yellow"
                onChange={handleColor}
              />
            </div>
            <div className="addProductItem">
              <label>사이즈</label>
              <input
                type="text"
                placeholder="50ml,100ml or S,XL"
                onChange={handleSize}
              />
            </div>
            <div className="addProductItem">
              <label>상품 가격</label>
              <input
                name="price"
                type="number"
                placeholder="14000"
                onChange={handleChange}
              />
            </div>
            <div className="addProductItem">
              <label>카테고리</label>
              <input
                type="text"
                placeholder="man,shirts"
                onChange={handleCat}
              />
            </div>
            <div className="addProductItem">
              <label>재고</label>
              <select name="inStock" onChange={handleChange}>
                <option value="true">있음</option>
                <option value="false">없음</option>
              </select>
            </div>
            <button onClick={handleClick} className="addProductButton">
              생성하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
