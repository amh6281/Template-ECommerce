import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TodayDiscoverys from "../components/TodayDiscoverys";
import Banner from "../components/Banner";
import AdvertisingPd from "../components/AdvertisingPd";
import ShopSuggestions from "../components/ShopSuggestions";
import AdvertisingPd2 from "../components/Advertising2/AdvertisingPd2";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Banner />
      <TodayDiscoverys />
      <AdvertisingPd />
      <AdvertisingPd2 />
      <ShopSuggestions />
      <Footer />
    </div>
  );
};

export default Home;
