import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Tmp1Preview from "./Tmp1/Tmp1Preview";
import Tmp2Preview from "./Tmp2/Tmp2Preview";
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
  width: 500px;
  height: 750px;
  background-color: white;
  color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  border-radius: 4px;
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

const Input = styled.input`
  font-size: 14px;
  border: none;
  width: 340px;
  height: 30px;
  margin-bottom: -10px;
  outline: none;

  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const Desc = styled.textarea`
  font-size: 14px;
  border: none;
  width: 340px;
  height: 30px;
  margin-bottom: -10px;
  outline: none;
`;

const Tmp = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
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

const Label = styled.label`
  font-size: 12px;
`;

const Build = ({ setOpen }) => {
  const [logo, setLogo] = useState(undefined);
  const [imgPerc, setImgPerc] = useState(0);
  const [inputs, setInputs] = useState({});
  const [banner, setBanner] = useState([]);
  const [cat, setCat] = useState([]);

  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser?._id;

  const handleCat = (e) => {
    setCat((prev) => {
      return {
        ...prev,
        [e.target.name.split(",")]: e.target.value.split(","),
      };
    });
  };
  console.log(cat);

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
              categoryItem: cat,
            };
          });
        });
      }
    );
  };
  console.log(inputs);

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
        <Title>입점하기</Title>
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
        <Input
          type="text"
          name="catImg"
          placeholder="카테고리 src(DESIGN1일경우만)"
          onChange={handleCat}
        />
        <Input
          type="text"
          name="catValue"
          placeholder="카테고리"
          onChange={handleCat}
        />

        <Label>배너 이미지</Label>
        <Input
          type="text"
          placeholder="img1,img2"
          onChange={(e) => setBanner(e.target.value.split(","))}
        />
        <Label>쇼핑몰 ICON</Label>
        {imgPerc > 0 ? (
          "업로딩:" + imgPerc + "%"
        ) : (
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setLogo(e.target.files[0])}
          />
        )}
        <Label>카테고리 선택</Label>
        <select name="category" onChange={handleChange}>
          {categories.map((item) => (
            <option value={item.value}>{item.cat}</option>
          ))}
        </select>
        <Label>디자인 선택</Label>
        <select name="design" onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <Tmp>
          <Tmp1Preview />
          <Tmp2Preview />
        </Tmp>
        <Button onClick={handleBuild}>생성</Button>
      </Wrapper>
    </Container>
  );
};

export default Build;
