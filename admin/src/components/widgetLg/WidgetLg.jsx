import { useEffect, useState } from "react";
import { publicRequest, userRequest } from "../../requestMethods";
import { format } from "timeago.js";
import "./widgetLg.css";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function WidgetLg({ transaction }) {
  const [orders, setOrders] = useState(transaction);

  useEffect(() => {
    setOrders(transaction);
  }, [transaction]);

  const handleUpdated = async (id) => {
    const item = orders.filter((order) => order._id === id)[0];
    const currentStatus = item.status;
    try {
      await publicRequest.put("/orders/" + id, {
        status:
          currentStatus === "상품준비중"
            ? "배송중"
            : currentStatus === "배송중"
            ? "배송완료"
            : alert("배송완료입니다."),
      });

      const res = await publicRequest.put("/orders/" + id);

      const newOrders = res.data.custom_data.filter(
        (item) => item._id === id
      )[0];
      console.log(newOrders);
      setOrders(
        [newOrders, ...orders.filter((order) => order._id !== id)].sort()
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">고객명</TableCell>
            <TableCell className="tableCell">상품명</TableCell>
            <TableCell className="tableCell">거래날짜</TableCell>
            <TableCell className="tableCell">상품금액</TableCell>
            <TableCell className="tableCell">주소</TableCell>
            <TableCell className="tableCell">상태</TableCell>
            <TableCell className="tableCell">주문업데이트</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.sort().map((order) => (
            <TableRow key={order._id}>
              <TableCell className="tableCell">{order.buyer_name}</TableCell>
              <TableCell className="tableCell">{order.title}</TableCell>
              <TableCell className="tableCell">{order.date}</TableCell>
              <TableCell className="tableCell">
                {order.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </TableCell>
              <TableCell className="tableCell">{order.buyer_addr}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${order.status}`}>{order.status}</span>
              </TableCell>
              <TableCell className="tableCell">
                <button
                  className="button"
                  onClick={() => handleUpdated(order._id)}
                >
                  Next
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
