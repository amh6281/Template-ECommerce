import "./featuredinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function Featuredinfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">수익</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₩ 867,410</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
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
