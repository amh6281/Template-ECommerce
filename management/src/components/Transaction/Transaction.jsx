import React, { useEffect, useState } from "react";
import "./transaction.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

const Transaction = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/orders");
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchOrders();
  }, []);

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">주문ID</TableCell>
            <TableCell className="tableCell">상품명</TableCell>
            <TableCell className="tableCell">고객명</TableCell>
            <TableCell className="tableCell">거래날짜</TableCell>
            <TableCell className="tableCell">상품금액</TableCell>
            <TableCell className="tableCell">주소</TableCell>
            <TableCell className="tableCell">상태</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="tableCell">
                {order._id.substr(0, 7)}
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">{order.name}</div>
              </TableCell>
              <TableCell className="tableCell">{order.buyer_name}</TableCell>
              <TableCell className="tableCell">
                {order.createdAt.substr(0, 10)}
              </TableCell>
              <TableCell className="tableCell">
                {order.paid_amount
                  ?.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </TableCell>
              <TableCell className="tableCell">{order.buyer_addr}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${order.status}`}>
                  {order.status === "paid" ? "결제완료" : "상품준비중"}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Transaction;
