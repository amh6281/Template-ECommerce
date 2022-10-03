import { useState, useMemo, useEffect } from "react";
import Chart from "../../components/chart/Chart";
import Featuredinfo from "../../components/featuredinfo/Featuredinfo";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import "./home.css";
import { userRequest } from "../../requestMethods";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/productRedux";

const Home = () => {
  const [userStats, setUserStats] = useState([]);
  const [orders, setOrders] = useState([]);

  const products = useSelector((state) => state.product.products);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("/orders");
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, []);

  const customData = orders.map((item) => item.custom_data);
  const filterShopId = customData.flat().filter((order) => {
    return order.shopId === products[0].shopId;
  });

  const MONTHS = useMemo(
    () => [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    []
  );

  //매출 더하기
  const incomesArr = filterShopId.map((income) => income.price);
  const sum = incomesArr.reduce((a, b) => {
    return a + b;
  }, 0);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) => {
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ]);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await userRequest.get(`/products/${currentUser._id}`);
        dispatch(getProducts(res.data));
      } catch (err) {}
    };
    getProduct();
  }, []);

  return (
    <div className="home">
      <Featuredinfo sum={sum} />
      <Chart
        data={userStats}
        title="사용자 통계 분석"
        dataKey="Active User"
        grid
      />
      <div className="homeWidgets">
        <WidgetLg transaction={filterShopId} />
      </div>
    </div>
  );
};

export default Home;
