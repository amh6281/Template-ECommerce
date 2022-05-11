import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Title = styled.h1`
  display: flex;
  margin-top: 50px;
  margin-bottom: 15px;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  font-size: 19px;
`;

const Container = styled.div`
  margin-left: 200px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
  margin-bottom: 10px;
`;

export default function QuiltedImageList() {
  return (
    <div>
      <Title>오늘의 발견</Title>
      <Hr />
      <Container>
        <ImageList
          sx={{ width: 1500, height: 900 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  ></IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </div>
  );
}

const itemData = [
  {
    img: "https://static.coupangcdn.com/xa/cmg_paperboy/image/1652155730521/C2_01.jpg",
    title: "비엔나 소세지",
    rows: 3,
    cols: 2,
  },
  {
    img: "https://static.coupangcdn.com/ea/cmg_paperboy/image/1652155812428/C2_02.jpg",
    title: "이라이프",
    rows: 3,
    cols: 2,
  },
  {
    img: "https://static.coupangcdn.com/wa/cmg_paperboy/image/1652156146468/C2_03.jpg",
    title: "휴지",
    rows: 4,
    cols: 1,
  },
  {
    img: "https://thumbnail8.coupangcdn.com/thumbnails/remote/x/image/displayitem/displayitem_914ce4a5-08fd-4ec4-92ab-98e3dfaf5d53.jpg",
    title: "접이식 헤어드라이어",
    rows: 4,
    cols: 1,
  },
  {
    img: "https://static.coupangcdn.com/ka/cmg_paperboy/image/1652156168218/C2_05.jpg",
    title: "브랜드위크 SALE",
    rows: 4,
    cols: 1,
  },

  {
    img: "https://static.coupangcdn.com/ea/cmg_paperboy/image/1652155779824/C2_08.jpg",
    title: "라면",
    rows: 4,
    cols: 1,
  },
];
