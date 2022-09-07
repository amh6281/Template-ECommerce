import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { format } from "timeago.js";
import "./widgetLg.css";
import { useSelector } from "react-redux";

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get(`orders/find/${currentUser._id}`);
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, []);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">최근 거래내역</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">고객ID</th>
          <th className="widgetLgTh">주문날짜</th>
          <th className="widgetLgTh">주문금액</th>
          <th className="widgetLgTh">주문상태</th>
        </tr>
        {orders.map((order) => (
          <tr className="widgetLgTr" key={order._id}>
            <td className="widgetLgUser">
              <span className="widgetLgName">{order.userId}</span>
            </td>
            <td className="widgetLgDate">{format(order.createdAt)}</td>
            <td className="widgetLgAmount">{order.amount}</td>
            <td className="widgetLgStatus">
              <Button type={order.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
