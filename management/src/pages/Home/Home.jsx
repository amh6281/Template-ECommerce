import React, { useState, useMemo, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Widget from "../../components/Widget/Widget";
import Featured from "../../components/Featured/Featured";
import Chart from "../../components/Chart/Chart";
import Transaction from "../../components/Transaction/Transaction";
import "./home.scss";
import { publicRequest } from "../../requestMethods";

const Home = () => {
  const [income, setIncome] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

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

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await publicRequest.get("orders/income");
        res.data.map((item) => {
          setIncome((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Total: item.total },
          ]);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getIncome();
  }, [MONTHS]);

  // 중복값 제거
  const incomes = [...new Set(income.map(JSON.stringify))].map(JSON.parse);

  // 월별 총액 합산
  const totalIncome = incomes
    .map((item) => item.Total)
    .reduce((prev, curr) => prev + curr, 0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // 이번달 총 판매액
  const thisMonth = incomes[incomes.length - 1]?.Total.toString().replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await publicRequest.get("/orders");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await publicRequest.get("/users");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  // 모든 주문 총액
  // const orderAmount = orders
  //   .map((item) => item.amount)
  //   .reduce((prev, curr) => prev + curr, 0)
  //   .toString()
  //   .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" amount={users.length} />
          <Widget type="order" amount={orders.length} />
          <Widget type="earning" amount={totalIncome} />
          <Widget type="balance" amount="999,999,999" />
        </div>
        <div className="charts">
          <Featured total={incomes[incomes.length - 1]?.Total} />
          <Chart title="6개월간 수익" aspect={2 / 1} data={incomes} />
        </div>
        <div className="listContainer">
          <div className="listTitle">최근 거래내역</div>
          <Transaction />
        </div>
      </div>
    </div>
  );
};

export default Home;
