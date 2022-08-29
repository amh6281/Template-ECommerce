import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Shops from "../components/Shops";
import Footer from "../components/Footer";

const ShopList = () => {
  const titles = ["New Shop", "Best Shop", "Hot Shop"];
  return (
    <div>
      <Navbar />
      <Announcement />
      <Banner />
      {titles.map((title) => (
        <Shops title={title} />
      ))}
      <Footer />
    </div>
  );
};

export default ShopList;
