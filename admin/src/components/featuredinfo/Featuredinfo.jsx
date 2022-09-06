import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { userRequest } from "../../requestMethods";
import { useSelector } from "react-redux";

export default function Featuredinfo() {
  const [income, setIncome] = useState([]);
  const [shop, setShop] = useState({});
  const [perc, setPerc] = useState(0);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const getShop = async () => {
      try {
        const res = await userRequest.get(`/shops?userId="${currentUser._id}"`);
        setShop(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getShop();
  }, []);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get(`/orders/income/${shop[0]?._id}`);
        setIncome(res.data);
        setPerc((res.data[1]?.total * 100) / res.data[0]?.total - 100);
      } catch (err) {
        console.log(err);
      }
    };
    getIncome();
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">수익</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₩ {income[1]?.total}</span>
          <span className="featuredMoneyRate">
            % {Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">전월대비 증감률</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">매출</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₩ 126,660</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">전월대비 증감률</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">원가</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₩ 926,850</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">전월대비 증감률</span>
      </div>
    </div>
  );
}
