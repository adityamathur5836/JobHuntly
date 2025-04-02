import React, { useState } from "react";
import "./Hero.css";
import photo from "../assets/photo.png";
import pattern from "../assets/Pattern.png";
import lakeete from "../assets/lakeete.png";
import search from "../assets/search.png";
import rectangle from "../assets/rectangle.png";
import location from "../assets/location.png";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hero">
      <div className="container">
        <div className="text-cover">
          <h1 className="cover-text">Discover</h1>
          <h1 className="cover-text">more than</h1>
          <h1 className="highlight cover-text">5000+ Jobs</h1>
          <img src={lakeete} className="lakeete" alt="Lakeete" />
          <p className="para">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>
          <div className="search-box">
            <div className="search-input-group">
              <img src={search} alt="Search" />
              <input type="text" placeholder="Job title or keyword" />
            </div>
            <div className="search-input-group">
              <img src={location} alt="Location" />
              <select>
                <option>Florence, Italy</option>
                <option>New York, USA</option>
                <option>London, UK</option>
              </select>
            </div>
            <button>Search my job</button>
          </div>
          <div className="popular-tags">
            <span>Popular :</span>
            <a href="#">UI Designer</a>
            <a href="#">UX Researcher</a>
            <a href="#">Android</a>
            <a href="#">Admin</a>
          </div>
        </div>
      </div>
      <div className="images">
        <img src={pattern} className="back-pattern" alt="Pattern" />
        <img src={photo} className="photo" alt="Photo" />
      </div>
      <img src={rectangle} className="rectangle" alt="Rectangle" />
    </div>
  );
}