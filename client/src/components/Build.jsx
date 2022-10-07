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

const InputWrapper = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  padding: 30px 60px;
`;

const Inputs = styled.div`
  display: flex;
  width: 340px;
  padding: 14px 17px 13px;
  border-bottom: 1px solid #ededed;
  border-radius: 4px;
  align-items: center;
  gap: 4px;
  margin-bottom: 10px;
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
  margin-top: 30px;
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

const Select = styled.select`
  width: 340px;
  height: 30px;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: -10px;
  margin-bottom: -10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
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
        <InputWrapper>
          <InputBox>
            <Inputs>
              <Input
                type="text"
                placeholder="쇼핑몰 이름"
                name="shopname"
                onChange={handleChange}
              />
            </Inputs>
            <Inputs>
              <Desc
                type="text"
                placeholder="쇼핑몰 설명"
                name="desc"
                onChange={handleChange}
              />
            </Inputs>
            <Inputs>
              <Input
                type="text"
                name="catImg"
                placeholder="카테고리 src(DESIGN1일경우만)"
                onChange={handleCat}
              />
            </Inputs>
            <Inputs>
              <Input
                type="text"
                name="catValue"
                placeholder="카테고리"
                onChange={handleCat}
              />
            </Inputs>

            <Inputs>
              <Input
                type="text"
                placeholder="배너 이미지 img1,img2"
                onChange={(e) => setBanner(e.target.value.split(","))}
              />
            </Inputs>
            {imgPerc > 0 ? (
              <Inputs>{"업로딩:" + imgPerc + "%"}</Inputs>
            ) : (
              <Inputs>
                <UploadLB for="input-file">쇼핑몰 ICON</UploadLB>
                <Input
                  type="file"
                  id="input-file"
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={(e) => setLogo(e.target.files[0])}
                />
              </Inputs>
            )}

            <Inputs>
              <Select name="category" onChange={handleChange}>
                <option value="0">카테고리 선택</option>
                {categories.map((item) => (
                  <option value={item.value}>{item.cat}</option>
                ))}
              </Select>
            </Inputs>

            <Inputs>
              <Select name="design" onChange={handleChange}>
                <option value="0">디자인 선택</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </Select>
            </Inputs>
            <Tmp>
              <Tmp1Preview />
              <Tmp2Preview />
            </Tmp>
          </InputBox>
          <Button onClick={handleBuild}>생성</Button>{" "}
        </InputWrapper>
      </Wrapper>
    </Container>
  );
};

export default Build;
