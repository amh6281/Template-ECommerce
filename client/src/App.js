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
import Shop1 from "./pages/Shop1";
import Shop2 from "./pages/Shop2";

function App() {
  const user = true;
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
        <Route path="/shop1" element={<Shop1 />} />
        <Route path="/shop2" element={<Shop2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
