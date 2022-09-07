import { useState } from "react";
import "./newProduct.css";

export default function NewProduct() {
  const [input, setInput] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label>Desc</label>
          <input type="text" placeholder="description" />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="text" placeholder="14000" />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text" placeholder="shirts" />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select>
            <option value="true">YES</option>
            <option value="false">NO</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
