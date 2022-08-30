import { useState, useEffect } from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Shop from "../components/Shop";
import Footer from "../components/Footer";
import axios from "axios";

const ShopList = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    try {
      const fetchShops = async () => {
        const res = await axios.get("http://localhost:5000/api/shops");
        setShops(res.data);
      };
      fetchShops();
    } catch (err) {}
  }, []);

  return (
    <div>
      <Navbar />
      <Announcement />
      <Banner />
      {shops?.map((shop) => (
        <Shop key={shop._id} shop={shop} />
      ))}
      <Footer />
    </div>
  );
};

export default ShopList;
