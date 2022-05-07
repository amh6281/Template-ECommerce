import React from "react";
import Slider from "../components/Slider";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewProducts from "../components/NewProducts";
import BestProducts from "../components/BestProducts";
import CategoryNav from "../components/CategoryNav/CategoryNav";
import NewBtn from "../components/NewBtn";
const Home = () => {
  return (
    <div>
      <NewBtn />
      <Navbar />
      <Announcement />
      <Slider />
      <BestProducts />
      <NewProducts />
      <Footer />
    </div>
  );
};

export default Home;
