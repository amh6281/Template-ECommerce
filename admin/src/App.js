import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import ListList from "./pages/listList/ListList";
import NewList from "./pages/newList/NewList";

function App() {
  const isEntrepreneur = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root"))?.user
  )?.currentUser?.isEntrepreneur;

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {isEntrepreneur && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
              <Route path="/lists">
                <ListList />
              </Route>
              <Route path="/newlist">
                <NewList />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
