import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewProducts from "../components/NewProducts";
import BestProducts from "../components/BestProducts";
import Banner from "../components/Banner";
import AdvertisingPd from "../components/AdvertisingPd";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Banner />
      <AdvertisingPd />
      <BestProducts />
      <NewProducts />
      <Footer />
    </div>
  );
};

export default Home;
