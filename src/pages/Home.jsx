import React from "react";
import Slider from "../components/Slider";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Products from "../components/Products";
import NewProducts from "../components/NewProducts";
import Businesses from "../components/Businesses";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <NewProducts />
      <Businesses />
      <Footer />
    </div>
  );
};

export default Home;
