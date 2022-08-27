import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/AtShop1/Shop1Slider";
import Categories from "../components/AtShop1/SliderCategories";
import Shop1Products from "../components/AtShop1/Shop1Products";
import Footer from "../components/Footer";

const Shop1 = () => {
  const titles = ["Best Item", "Hot Item", "New Item"];

  return (
    <div>
      <Navbar />
      {/* Shop1에서는 카테고리 빼기*/}
      <Announcement />
      <Slider />
      <Categories />
      {titles.map((title) => (
        <Shop1Products title={title} />
      ))}
      <Footer />
    </div>
  );
};

export default Shop1;
