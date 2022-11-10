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
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);

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
    for (let i = 0; i < e.target.files.length; i++) {
      const newDetailImg = e.target.files[i];
      setDetailImg((prev) => [...prev, newDetailImg]);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();

    const promises = [];
    detailImg.map((img) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + img.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, img);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrls((prev) => [...prev, downloadURL]);
          });
        }
      );
    });
    Promise.all(promises)
      .then(() => alert("상세 이미지가 적용되었습니다."))
      .catch((err) => console.log(err));
  };

  console.log(detailImg);
  console.log(urls);

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            ...inputs,
            img: downloadURL,
            categories: cat,
            shopId: shop[0]?._id,
            shopCat: shop[0]?.category,
            color: color,
            size: size,
            detailImg: urls,
            shopname: shop[0]?.shopname,
          };
          addProduct(product, dispatch);
        });
      }
    );
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
                ? URL.createObjectURL(file)
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
                multiple
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
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
              <label htmlFor="detail">
                세부 이미지
                <DriveFolderUploadOutlinedIcon className="icon" />
                <input
                  type="file"
                  accept="image/*"
                  id="detail"
                  style={{ display: "none" }}
                  multiple
                  onChange={handleDetailImg}
                />
                <button onClick={handleUpload}>적용하기</button>
              </label>
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
