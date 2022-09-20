import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Category.css";

export default function DropCategory() {
  const shop = useSelector((state) => state.shop);
  const category = shop.currentShop?.categoryItem[0].catValue;
  console.log(category);
  console.log(["1", "2"]);
  return (
    <div>
      <div class="wrapper">
        <nav>
          <input type="checkbox" id="show-search" />
          <input type="checkbox" id="show-menu" />
          <label for="show-menu" class="menu-icon">
            <i class="fas fa-bars"></i>
          </label>
          <div class="content">
            <ul class="links">
              {category?.map((item) => (
                <li>
                  <Link to={`/products/${item}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
