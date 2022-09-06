import { useState, useEffect } from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Tmp1Slider from "../components/Tmp1/Tmp1Slider";
import SliderCategories from "../components/Tmp1/SliderCategories";
import Tmp1Products from "../components/Tmp1/Tmp1Products";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { fetchStart, fetchSuccess } from "../redux/shopRedux";

const Shop = () => {
  const { currentUser } = useSelector((state) => state.user);
  const shop = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  const path = useLocation().pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const shopRes = await publicRequest.get(`/shops/find/${path}`);
        dispatch(fetchSuccess(shopRes.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [path, dispatch]);

  return (
    <div>
      <Navbar />
      <Announcement />
      <Tmp1Slider />
      <SliderCategories />
      <Tmp1Products shopId={shop.currentShop._id} />
      <Footer />
    </div>
  );
};

export default Shop;
