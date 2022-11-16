import React from "react";
import "./newList.css";

const NewList = () => {
  return (
    <div className="newList">
      <h1 className="addListTitle">리스트 추가</h1>
      <form className="addListForm">
        <div className="formLeft">
          <div className="addListItem">
            <label>제목</label>
            <input type="text" placeholder="베스트 아이템" name="title" />
          </div>
          <div className="formRight">
            <div className="addListItem">
              <label>상품</label>
              <select multiple name="content" style={{ height: "280px" }}>
                <option>상품1</option>
                <option>상품1</option>
                <option>상품1</option>
                <option>상품1</option>
              </select>
            </div>
          </div>
        </div>
        <button className="addListButton">Create</button>
      </form>
    </div>
  );
};

export default NewList;
