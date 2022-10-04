import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { userRequest } from "../../requestMethods";
import { useSelector } from "react-redux";

export default function Featuredinfo({ sum }) {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);
  const { currentUser } = useSelector((state) => state.user);
  const id = currentUser._id;
  const shopIncome = (sum / 100) * 40;
  const cost = (sum / 100) * 60;

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">수익</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {shopIncome?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
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
          <span className="featuredMoney">
            {sum?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">전월대비 증감률</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">원가</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            {cost?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">전월대비 증감률</span>
      </div>
    </div>
  );
}
