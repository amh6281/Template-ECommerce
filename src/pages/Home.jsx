import React from "react";
import Slider from "../components/Slider";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Footer />
    </div>
  );
};

export default Home;
