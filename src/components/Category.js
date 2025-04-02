import React from "react";
import "./Category.css";
import arrow from "../assets/arrow.png";
import design from "../assets/design.png";
import grid_arrow from "../assets/grid-arrow.png";
import sales from "../assets/Sales.png";
import marketing from "../assets/Marketing.png";
import white_arrow from "../assets/white-arrow.png";
import finance from "../assets/finance.png";
import tech from "../assets/tech.png";
import engineering from "../assets/engineering.png";
import business from "../assets/business.png";
import hr from "../assets/hr.png";
import dashboard from "../assets/dashboard.png";

const categoryData = [
  { name: "Design", img: design, jobs: 235 },
  { name: "Sales", img: sales, jobs: 235 },
  { name: "Marketing", img: marketing, jobs: 235 },
  { name: "Finance", img: finance, jobs: 235 },
  { name: "Tech", img: tech, jobs: 235 },
  { name: "Engineering", img: engineering, jobs: 235 },
  { name: "Business", img: business, jobs: 235 },
  { name: "HR", img: hr, jobs: 235 },
];

export default function Category() {
  return (
    <div className="categories">
      <div className="category-nav">
        <div className="heading">
          <h1 className="category-title">
            Explore by <span className="category">category</span>
          </h1>
        </div>
        <div className="inner-category">
          <a>Show all jobs</a>
          <img src={arrow} width="10%" height="10%" />
        </div>
      </div>
      <div className="grid category-grid">
        {categoryData.map((category, index) => (
          <div className="inside-grid">
            <div
              className="inside-img"
              style={
                category.name == "Marketing"
                  ? { backgroundColor: "#4640DE" }
                  : {}
              }
            >
              <img src={category.img} />
            </div>
            <div className="inside-container">
              <div className="inside-inside-grid">
                <h3>{category.name}</h3>
                <p className="jobs-av">{category.jobs} Jobs Availible</p>
              </div>
              <div className="inside-img">
                <img src={grid_arrow} width={30} height={30} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="posting">
        <div className="triangle"></div>
        <div className="inside-posting">
          <h2>Start posting jobs today</h2>
          <p>Start posting jobs only for $10.</p>
          <button>Sign Up For Free</button>
        </div>
        <img src={dashboard} />
        <div className="down-triangle"></div>
      </div>
    </div>
  );
}