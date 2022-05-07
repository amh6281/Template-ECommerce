import React from "react";
import Tmp1Announcement from "./Tmp1Announcement";
import Tmp1Slider from "./Tmp1Slider";
import Tmp1Navbar from "./Tmp1Navbar";
import Tmp1Footer from "./Tmp1Footer";
import Tmp1Categories from "./Tmp1Categories";
import Tmp1HotProducts from "./Tmp1HotProducts";
import Tmp1BestProducts from "./Tmp1BestProducts";
import Tmp1NewProducts from "./Tmp1NewProducts";

const Home = () => {
  return (
    <div>
      <Tmp1Navbar />
      <Tmp1Announcement />
      <Tmp1Slider />
      <Tmp1Categories />
      <Tmp1BestProducts />
      <Tmp1NewProducts />
      <Tmp1HotProducts />
      <Tmp1Footer />
    </div>
  );
};

export default Home;
