import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Shops from "../components/Shops";
import Footer from "../components/Footer";

const Shop = () => {
  const titles = ["New Shop", "Best Item", "Hot Shop"];
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

export default Shop;
