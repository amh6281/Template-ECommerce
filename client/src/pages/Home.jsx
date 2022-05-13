import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TodayDiscoverys from "../components/TodayDiscoverys";
import Banner from "../components/Banner";
import AdvertisingPd from "../components/AdvertisingPd";
import ShopSuggestions from "../components/ShopSuggestions";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Banner />
      <TodayDiscoverys />
      <AdvertisingPd />
      <ShopSuggestions />
      <Footer />
    </div>
  );
};

export default Home;
