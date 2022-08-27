import React from "react";
import Announcement from "../components/Announcement";
import DropCategory from "../components/AtShop2/DropCategory";
import Navbar from "../components/Navbar";
import Shop2Slider from "../components/AtShop2/Shop2Slider";
import Shop2Products from "../components/AtShop2/Shop2Products";
import Footer from "../components/Footer";

const Shop2 = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <DropCategory />
      <Shop2Slider />
      <Shop2Products />
      <Footer />
    </div>
  );
};

export default Shop2;
