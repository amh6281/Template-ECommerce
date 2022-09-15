import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TodayDiscoverys from "../components/TodayDiscoverys";
import Banner from "../components/Banner";
import ShopSuggestions from "../components/ShopSuggestions";
import NewBusinessIcon from "../components/NewBusinessIcon";
import AdvertisingPd from "../components/Advertising/AdvertisingPd";
import AdvertisingPd2 from "../components/Advertising2/AdvertisingPd2";
import AdvertisingPd3 from "../components/Advertising3/AdvertisingPd3";
import AdvertisingPd4 from "../components/Advertising4/AdvertisingPd4";
import AdvertisingPd5 from "../components/Advertising5/AdvertisingPd5";
import TopNav from "../components/TopNav";
import MidNav from "../components/MidNav";

const Home = () => {
  return (
    <div>
      <TopNav />
      {/* <Navbar /> */}
      <MidNav />
      <Banner />
      <NewBusinessIcon />
      <TodayDiscoverys />
      <AdvertisingPd />
      <AdvertisingPd2 />
      <AdvertisingPd3 />
      <AdvertisingPd4 />
      <AdvertisingPd5 />
      <ShopSuggestions />
      <Footer />
    </div>
  );
};

export default Home;
