import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
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
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
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
          </TableRow>
        </TableHead>
        <TableBody>
          {transaction.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="tableCell">{order.buyer_name}</TableCell>
              <TableCell className="tableCell">{order.title}</TableCell>
              <TableCell className="tableCell">{order.date}</TableCell>
              <TableCell className="tableCell">
                {order.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
}
