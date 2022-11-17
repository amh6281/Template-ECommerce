import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRequest } from "../../requestMethods";
import "./newList.css";

const NewList = () => {
  const [list, setList] = useState(null);
  const products = useSelector((state) => state.product.products);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await userRequest.post("/lists", {
      ...list,
      shopId: products[0].shopId,
    });
    res.status === 201 && alert("생성 완료");
  };

  return (
    <div className="newList">
      <h1 className="addListTitle">리스트 추가</h1>
      <form className="addListForm">
        <div className="formLeft">
          <div className="addListItem">
            <label>제목</label>
            <input
              type="text"
              placeholder="베스트 아이템"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="formRight">
            <div className="addListItem">
              <label>상품</label>
              <select
                multiple
                name="products"
                style={{ height: "280px" }}
                onChange={handleSelect}
              >
                {products.map((product) => (
                  <option key={product._id} value={product._id}>
                    {product.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <button className="addListButton" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
};

export default NewList;
