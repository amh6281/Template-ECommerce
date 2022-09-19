import React from "react";
import "./Cat.css";

export default function DropCat() {
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
              <li>
                <a href="#" class="desktop-link">
                  카테고리1
                </a>
                <input type="checkbox" id="show-features" />
                <label for="show-features">Features</label>
                <ul>
                  <li>
                    <a href="#">카테고리1-1</a>
                  </li>
                  <li>
                    <a href="#">카테고리1-2</a>
                  </li>
                  <li>
                    <a href="#">카테고리1-3</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" class="desktop-link">
                  카테고리2
                </a>
                <input type="checkbox" id="show-services" />
                <label for="show-services">Services</label>
                <ul>
                  <li>
                    <a href="#">카테고리2-1</a>
                  </li>
                  <li>
                    <a href="#">카테고리2-2</a>
                  </li>
                  <li>
                    <a href="#">카테고리2-3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" class="desktop-link">
                  카테고리3
                </a>
                <input type="checkbox" id="show-services" />
                <ul>
                  <li>
                    <a href="#">카테고리3-1</a>
                  </li>
                  <li>
                    <a href="#">카테고리3-2</a>
                  </li>
                  <li>
                    <a href="#">카테고리3-3</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" class="desktop-link">
                  카테고리4
                </a>
                <input type="checkbox" id="show-services" />
                <ul>
                  <li>
                    <a href="#">카테고리4-1</a>
                  </li>
                  <li>
                    <a href="#">카테고리4-2</a>
                  </li>
                  <li>
                    <a href="#">카테고리4-3</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" class="desktop-link">
                  카테고리5
                </a>
                <input type="checkbox" id="show-services" />
                <ul>
                  <li>
                    <a href="#">카테고리5-1</a>
                  </li>
                  <li>
                    <a href="#">카테고리5-2</a>
                  </li>
                  <li>
                    <a href="#">카테고리5-3</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" class="desktop-link">
                  카테고리6
                </a>
                <input type="checkbox" id="show-services" />
                <label for="show-services">Services</label>
                <ul>
                  <li>
                    <a href="#">카테고리6-1</a>
                  </li>
                  <li>
                    <a href="#">카테고리6-2</a>
                  </li>
                  <li>
                    <a href="#">카테고리6-3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" class="desktop-link">
                  카테고리7
                </a>
                <input type="checkbox" id="show-services" />
                <ul>
                  <li>
                    <a href="#">카테고리7-1</a>
                  </li>
                  <li>
                    <a href="#">카테고리7-2</a>
                  </li>
                  <li>
                    <a href="#">카테고리7-3</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" class="desktop-link">
                  카테고리8
                </a>
                <input type="checkbox" id="show-services" />
                <ul>
                  <li>
                    <a href="#">카테고리8-1</a>
                  </li>
                  <li>
                    <a href="#">카테고리8-2</a>
                  </li>
                  <li>
                    <a href="#">카테고리8-3</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" class="desktop-link">
                  카테고리9
                </a>
                <input type="checkbox" id="show-services" />
                <ul>
                  <li>
                    <a href="#">카테고리9-1</a>
                  </li>
                  <li>
                    <a href="#">카테고리9-2</a>
                  </li>
                  <li>
                    <a href="#">카테고리9-3</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" class="desktop-link">
                  카테고리10
                </a>
                <input type="checkbox" id="show-services" />
                <ul>
                  <li>
                    <a href="#">카테고리10-1</a>
                  </li>
                  <li>
                    <a href="#">카테고리10-2</a>
                  </li>
                  <li>
                    <a href="#">카테고리10-3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <label for="show-search" class="search-icon">
            <i class="fas fa-search"></i>
          </label>
          <form action="#" class="search-box">
            <input
              type="text"
              placeholder="Type Something to Search..."
              required
            />
            <button type="submit" class="go-icon">
              <i class="fas fa-long-arrow-alt-right"></i>
            </button>
          </form>
        </nav>
      </div>
    </div>
  );
}
