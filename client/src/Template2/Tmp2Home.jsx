import React from "react";
import Tmp2Navbar from "./Tmp2Navbar";
import Tmp2Announcement from "./Tmp2Announcement";
import Tmp2Slider from "./Tmp2Slider";
import Tmp2Category from "./Category/Tmp2Category";
import Tmp2Footer from "./Tmp2Footer";
import Tmp2ShopSuggestions from "./Tmp2ShopSuggestions";

const Home = () => {
  return (
    <div>
      <Tmp2Navbar />
      <Tmp2Announcement />
      <Tmp2Category />
      <Tmp2Slider />
      <Tmp2ShopSuggestions />
      <Tmp2Footer />
    </div>
  );
};

export default Home;
