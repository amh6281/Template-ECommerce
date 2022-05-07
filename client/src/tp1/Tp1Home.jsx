import React from "react";
import Announcement from "./Announcement";
import Slider from "./Slider";
import Navbar from "./Navbar";
import BestItems from "./BestItems";
import NewProducts from "./NewProducts";
import Footer from "./Footer";
import Categories from "./Categories";
import SimpleProducts from "./SimpleProducts";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <BestItems />
      <NewProducts />
      <SimpleProducts />
      <Footer />
    </div>
  );
};

export default Home;
