import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Tmp1Slider from "../components/Tmp1/Tmp1Slider";
import Categories from "../components/Tmp1/SliderCategories";
import Tmp1Products from "../components/Tmp1/Tmp1Products";
import Footer from "../components/Footer";

const Tmp1 = () => {
  const titles = ["Best Item", "Hot Item", "New Item"];

  return (
    <div>
      <Navbar />
      {/* Shop1에서는 카테고리 빼기*/}
      <Announcement />
      <Tmp1Slider />
      <Categories />
      {titles.map((title) => (
        <Tmp1Products title={title} />
      ))}
      <Footer />
    </div>
  );
};

export default Tmp1;
