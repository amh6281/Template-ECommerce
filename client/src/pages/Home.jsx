import React from "react";
import Slider from "../components/Slider";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewProducts from "../components/NewProducts";
import Businesses from "../components/Businesses";
import BestItems from "../components/BestItems";
import CategoryNav from "../components/CategoryNav/CategoryNav";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      <BestItems />
      <NewProducts />
      <Businesses />
      <Footer />
    </div>
  );
};

export default Home;
