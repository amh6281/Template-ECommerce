import React from "react";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import NewBusinessIcon from "../components/NewBusinessIcon";
import AdvertisingPd from "../components/Advertising/AdvertisingPd";
import AdvertisingPd2 from "../components/Advertising2/AdvertisingPd2";
import AdvertisingPd3 from "../components/Advertising3/AdvertisingPd3";
import AdvertisingPd4 from "../components/Advertising4/AdvertisingPd4";
import AdvertisingPd5 from "../components/Advertising5/AdvertisingPd5";
import TopNav from "../components/TopNav";
import MidNav from "../components/MidNav";
import Tmp3Products from "../components/Tmp3/Tmp3Products";
import Tmp3Categories from "../components/Tmp3/Tmp3Categories";

const Home = () => {
  return (
    <div>
      {/* <TopNav />
      <MidNav />
      <Banner />
      <NewBusinessIcon />
      <AdvertisingPd />
      <AdvertisingPd2 />
      <AdvertisingPd3 />
      <AdvertisingPd4 />
      <AdvertisingPd5 />
      <Footer /> */}
      <Tmp3Categories />
      <Tmp3Products />
    </div>
  );
};

export default Home;
