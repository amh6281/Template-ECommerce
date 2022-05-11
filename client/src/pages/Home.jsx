import React from "react";
import Slider from "../components/Slider";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewProducts from "../components/NewProducts";
import BestProducts from "../components/BestProducts";
import CategoryNav from "../components/CategoryNav/CategoryNav";
import NewBtn from "../components/NewBtn";
import TodayPD from "../components/TodayPD";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      <TodayPD />
      <BestProducts />
      <NewProducts />
      <Footer />
    </div>
  );
};

export default Home;
