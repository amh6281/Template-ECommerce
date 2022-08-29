import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import BusinessRegister from "./pages/BusinessRegister";
import BuildingShop from "./pages/BuildingShop";
import Pay from "./pages/Pay";
import Tmp1 from "./pages/Tmp1";
import Tmp2 from "./pages/Tmp2";
import ShopList from "./pages/ShopList";

function App() {
  const user = true;
  // user가 true일 경우에 로그인, 회원가입 페이지가 홈으로 돌아감.
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/shop" element={<ShopList />} />
        <Route path="/shop1" element={<Tmp1 />} />
        <Route path="/shop2" element={<Tmp2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
