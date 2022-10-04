import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { format } from "timeago.js";
import "./widgetLg.css";
import { useSelector } from "react-redux";

export default function WidgetLg({ transaction }) {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">최근 거래내역</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">고객명</th>
          <th className="widgetLgTh" style={{ marginLeft: "50px" }}>
            상품명
          </th>
          <th className="widgetLgTh">주문날짜</th>
          <th className="widgetLgTh">주문금액</th>
          <th className="widgetLgTh">배송지</th>
          <th className="widgetLgTh">주문상태</th>
        </tr>
        {transaction.map((order) => (
          <tr className="widgetLgTr" key={order._id}>
            <td className="widgetLgUser">
              <span className="widgetLgName">{order.buyer_name}</span>
            </td>
            <img src={order.img} className="widgetLgImg" />
            <td className="widgetLgPname">{order.title}</td>

            <td className="widgetLgDate">{order.date}</td>
            <td className="widgetLgAmount">
              {order.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>
            <td className="widgetLgAmount">{order.buyer_addr}</td>
            <td className="widgetLgStatus">
              <Button type={order.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
