import { useState, useEffect } from "react";
import Tmp1Slider from "../components/Tmp1/Tmp1Slider";
import SliderCategories from "../components/Tmp1/SliderCategories";
import Tmp1Products from "../components/Tmp1/Tmp1Products";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { fetchStart, fetchSuccess } from "../redux/shopRedux";
import Tmp2Slider from "../components/Tmp2/Tmp2Slider";
import DropCategory from "../components/Tmp2/DropCategory";
import Tmp2Products from "../components/Tmp2/Tmp2Products";
import TopNav from "../components/TopNav";
import MidNav from "../components/MidNav";
import CatNav from "../components/CatNav";
import Tmp3Categories from "../components/Tmp3/Tmp3Categories";
import Tmp3Products from "../components/Tmp3/Tmp3Products";
import List from "../components/List";

const Shop = () => {
  const [lists, setLists] = useState([]);
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

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const res = await publicRequest.get("/lists");
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLists();
  }, []);

  return (
    <div>
      <TopNav />
      <MidNav />
      <CatNav />
      {shop.currentShop?.design === 1 ? (
        <>
          <Tmp1Slider />
          {lists
            .filter((data) => data.shopId === shop.currentShop._id)
            .map((list) => (
              <List key={list._id} list={list} />
            ))}
          <SliderCategories />
          <Tmp1Products shopId={shop.currentShop?._id} />
        </>
      ) : shop.currentShop?.design === 2 ? (
        <>
          <DropCategory />
          <Tmp2Slider />
          {lists.map((list) => (
            <List key={list._id} list={list} />
          ))}
          <Tmp2Products shopId={shop.currentShop?._id} />
        </>
      ) : (
        <>
          <Tmp2Slider />
          {lists.map((list) => (
            <List key={list._id} list={list} />
          ))}
          <Tmp3Categories />
          <Tmp3Products shopId={shop.currentShop?._id} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Shop;
