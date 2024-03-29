import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import ShopList from "./pages/ShopList";
import { useSelector } from "react-redux";
import Shop from "./pages/Shop";
import Order from "./pages/Order";
import AllProducts from "./pages/AllProducts";
import Success from "./pages/Success";
import SearchShop from "./pages/SearchShop";
import SearchProduct from "./pages/SearchProduct";
import MyPage from "./pages/MyPage";
import Review from "./pages/Review";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  // user가 true일 경우에 로그인, 회원가입 페이지가 홈으로 돌아감.
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/shops" element={<ShopList />} />
        <Route path="/shops/search" element={<SearchShop />} />
        <Route path="/products/search" element={<SearchProduct />} />
        <Route path="/shop">
          <Route path=":id" element={<Shop />} />
        </Route>
        <Route path="/order" element={<Order />} />
        <Route path="/success" element={<Success />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
