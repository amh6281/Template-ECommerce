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
  width: 600px;
  height: 800px;
  background-color: #ffffffe4;
  color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
const Title = styled.h1`
  text-align: center;
`;

const Inputs = styled.div`
  border: 1px solid #f9f9f9;
  color: black;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
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
`;

const Select = styled.select`
  border: 1px solid #f9f9f9;
  color: black;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
`;

const Build = ({ setOpen }) => {
  const [logo, setLogo] = useState(undefined);
  const [imgPerc, setImgPerc] = useState(0);
  const [inputs, setInputs] = useState({});
  const [banner, setBanner] = useState([]);
  const [cat, setCat] = useState([]);
  const [catImg, setCatImg] = useState([]);

  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser?._id;

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };
  console.log(cat);
  console.log(inputs);
  console.log(banner);
  console.log(catImg);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

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
              bannerImg: banner,
              categoryItem: { catValue: cat, catImg: catImg },
            };
          });
        });
      }
    );
  };

  const handleBanner = (e) => {
    const nowSelectImgList = e.target.files;
    const nowImgUrlList = [...banner];
    for (let i = 0; i < nowSelectImgList.length; i++) {
      const nowImgUrl = URL.createObjectURL(nowSelectImgList[i]);
      nowImgUrlList.push(nowImgUrl);
    }
    setBanner(nowImgUrlList);
  };

  const handleCatImg = (e) => {
    const nowSelectImgList = e.target.files;
    const nowImgUrlList = [...catImg];
    for (let i = 0; i < nowSelectImgList.length; i++) {
      const nowImgUrl = URL.createObjectURL(nowSelectImgList[i]);
      nowImgUrlList.push(nowImgUrl);
    }
    setCatImg(nowImgUrlList);
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
        <Title>개설하기</Title>
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
        <Input type="file" accept="image/*" multiple onChange={handleCatImg} />
        <Input type="text" placeholder="카테고리" onChange={handleCat} />
        <Input type="file" accept="image/*" multiple onChange={handleBanner} />
        {imgPerc > 0 ? (
          <Inputs>{"업로딩:" + imgPerc + "%"}</Inputs>
        ) : (
          <Inputs>
            <UploadLB for="input-file">쇼핑몰 LOGO</UploadLB>
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
        </Select>
        <Tmp>
          <Tmp1Preview />
          <Tmp2Preview />
          <Tmp3Preview />
        </Tmp>
        <Button onClick={handleBuild}>생성</Button>{" "}
      </Wrapper>
    </Container>
  );
};

export default Build;
