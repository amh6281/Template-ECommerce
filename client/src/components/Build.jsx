import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Tmp1Preview from "./Tmp1/Tmp1Preview";
import Tmp2Preview from "./Tmp2/Tmp2Preview";
import Tmp3Preview from "./Tmp3/Tmp3Preview";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import { useNavigate } from "react-router-dom";
import { userRequest } from "../requestMethods";
import { categories } from "../data";
import { HighlightOffOutlined } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const Wrapper = styled.div`
  width: 1400px;
  height: 850px;
  background-color: #ffffffe4;
  color: black;
  display: flex;
  flex-direction: row;
  position: relative;
`;

const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const Left = styled.div`
  flex: 1;
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  gap: 25px;
  border-right: 1px solid #d5dade;
`;

const Right = styled.div`
  flex: 1;
  width: 700px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  border-right: 1px solid black;
  flex: 1;
  width: 700px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 25px;
  border-right: 1px solid black;
`;

const Inputs = styled.div`
  border: 1px solid #f9f9f9;
  color: black;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: 1px solid #f9f9f9;
  color: black;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;

const Desc = styled.textarea`
  border: 1px solid #f9f9f9;
  color: black;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;

const Tmp = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 20px 0px 20px 0px;
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: #f5f5f5;
  color: #606060;
`;

const UploadLB = styled.label`
  display: inline-block;
  padding: 0.5em 0.75em;
  color: #999;
  font-size: 14px;
  line-height: normal;
  vertical-align: middle;
  background-color: #fdfdfd;
  cursor: pointer;
  border: 1px solid #ebebeb;
  border-bottom-color: #e2e2e2;
  border-radius: 0.25em;
  margin-left: -5px;
  display: flex;
  align-items: center;
  width: 154px;
  justify-content: space-between;
  gap: 4px;
`;

const Select = styled.select`
  border: 1px solid #f9f9f9;
  color: black;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  border-radius: 0.25em;
`;

const UploadBtn = styled.button`
  padding: 0.5em 0.75em;
  color: #999;
  font-size: 14px;
  line-height: normal;
  vertical-align: middle;
  background-color: #fdfdfd;
  cursor: pointer;
  border: 1px solid #ebebeb;
  border-bottom-color: #e2e2e2;
  border-radius: 0.25em;
  margin-right: 1px;
  display: flex;
  align-items: center;
  height: 40px;
`;

const ImgTitle = styled.h1`
  color: #606060;
  font-size: 14px;
`;

const ImgList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: ${(props) => (props.type === "banner" ? "5" : "2.2")};
  border: 1px solid #d5dade;
  gap: 5px;
`;

const Img = styled.img`
  width: ${(props) => (props.type === "banner" ? "656px" : "160.5px")};
  height: ${(props) => (props.type === "banner" ? "117px" : "212px")};
  /* width: ${(props) => (props.type === "banner" ? "656px" : "160.5px")};
  height: ${(props) => (props.type === "banner" ? "127px" : "173px")}; */
  object-fit: cover;
`;

const Build = ({ setOpen }) => {
  const [logo, setLogo] = useState(undefined);
  const [imgPerc, setImgPerc] = useState(0);
  const [inputs, setInputs] = useState({});
  const [cat, setCat] = useState([]);

  const [catImg, setCatImg] = useState([]);
  const [catUrls, setCatUrls] = useState([]);
  const [catProgress, setCatProgress] = useState(0);

  const [banner, setBanner] = useState([]);
  const [bannerUrls, setBannerUrls] = useState([]);
  const [bannerProgress, setBannerProgress] = useState(0);

  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser?._id;

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleCatImg = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newCatImg = e.target.files[i];
      setCatImg((prev) => [...prev, newCatImg]);
    }
  };

  const catHandleUpload = (e) => {
    e.preventDefault();
    const promises = [];

    catImg.map((img) => {
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
          setCatProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setCatUrls((prev) => [...prev, downloadURL]);
          });
        }
      );
    });
    Promise.all(promises)
      .then(() => alert("카테고리 이미지가 적용되었습니다."))
      .catch((err) => console.log(err));
  };
  console.log(catUrls);

  const handleBanner = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newBanner = e.target.files[i];
      setBanner((prev) => [...prev, newBanner]);
    }
  };

  const bannerHandleUpload = (e) => {
    e.preventDefault();
    const promises = [];

    banner.map((img) => {
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
          setBannerProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setBannerUrls((prev) => [...prev, downloadURL]);
          });
        }
      );
    });
    Promise.all(promises)
      .then(() => alert("배너 이미지가 적용되었습니다."))
      .catch((err) => console.log(err));
  };
  console.log(bannerProgress);
  const uploadFile = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (urlType === "logo") {
          setImgPerc(progress);
        }
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setInputs((prev) => {
            return {
              ...prev,
              [urlType]: downloadURL,
              bannerImg: bannerUrls,
              categoryItem: { catValue: cat, catImg: catUrls },
            };
          });
        });
      }
    );
  };

  useEffect(() => {
    logo && uploadFile(logo, "logo");
  }, [logo]);

  const handleBuild = async (e) => {
    e.preventDefault();
    const res = await userRequest.post("/shops", { ...inputs });
    setOpen(false);
    res.status === 200 && navigate(`/shop/${res.data._id}`);
  };

  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setOpen(false)}>
          <HighlightOffOutlined />
        </Close>

        <Left>
          <Input
            type="text"
            placeholder="쇼핑몰 이름"
            name="shopname"
            onChange={handleChange}
          />
          <Desc
            type="text"
            placeholder="쇼핑몰 설명"
            name="desc"
            onChange={handleChange}
          />
          <Inputs>
            <UploadLB htmlFor="catImg">
              카테고리 이미지 <DriveFolderUploadOutlinedIcon />
            </UploadLB>
            <Input
              id="catImg"
              type="file"
              style={{ display: "none" }}
              accept="image/*"
              multiple
              onChange={handleCatImg}
            />
            {catProgress > 0 ? (
              <UploadBtn onClick={catHandleUpload}>적용완료</UploadBtn>
            ) : (
              <UploadBtn onClick={catHandleUpload}>적용하기</UploadBtn>
            )}
          </Inputs>
          <Input type="text" placeholder="카테고리" onChange={handleCat} />
          <Inputs>
            <UploadLB htmlFor="bannerImg" type="banner">
              배너 이미지 <DriveFolderUploadOutlinedIcon />
            </UploadLB>
            <Input
              id="bannerImg"
              type="file"
              style={{ display: "none" }}
              accept="image/*"
              multiple
              onChange={handleBanner}
            />
            {bannerProgress > 0 ? (
              <UploadBtn onClick={bannerHandleUpload}>적용완료</UploadBtn>
            ) : (
              <UploadBtn onClick={bannerHandleUpload}>적용하기</UploadBtn>
            )}
          </Inputs>
          {imgPerc > 0 ? (
            <Inputs>{"업로딩:" + imgPerc + "%"}</Inputs>
          ) : (
            <Inputs>
              <UploadLB htmlFor="input-file">
                쇼핑몰 로고 <DriveFolderUploadOutlinedIcon />
              </UploadLB>
              <Input
                type="file"
                id="input-file"
                style={{ display: "none" }}
                accept="image/*"
                onChange={(e) => setLogo(e.target.files[0])}
              />
            </Inputs>
          )}
          <Select name="category" onChange={handleChange}>
            <option value="0">카테고리 선택</option>
            {categories.map((item) => (
              <option value={item.value}>{item.cat}</option>
            ))}
          </Select>
          <Select name="design" onChange={handleChange}>
            <option value="0">디자인 선택</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Select>
          <Tmp>
            <Tmp1Preview />
            <Tmp2Preview />
            <Tmp3Preview />
          </Tmp>
          <Button onClick={handleBuild}>생성</Button>
        </Left>
        <Right>
          <ImgTitle>카테고리 이미지</ImgTitle>
          <ImgList>
            {catUrls.map((url, i) => (
              <Img key={i} src={url} alt="" />
            ))}
          </ImgList>
          <ImgTitle>배너 이미지</ImgTitle>
          <ImgList type="banner">
            {bannerUrls.map((url, i) => (
              <Img type="banner" key={i} src={url} alt="" />
            ))}
          </ImgList>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Build;
