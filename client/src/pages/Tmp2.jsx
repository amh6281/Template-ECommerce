import React from "react";
import Announcement from "../components/Announcement";
import DropCategory from "../components/Tmp2/DropCategory";
import Navbar from "../components/Navbar";
import Tmp2Slider from "../components/Tmp2/Tmp2Slider";
import Tmp2Products from "../components/Tmp2/Tmp2Products";
import Footer from "../components/Footer";

const Tmp2 = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <DropCategory />
      <Tmp2Slider />
      <Tmp2Products />
      <Footer />
    </div>
  );
};

export default Tmp2;
