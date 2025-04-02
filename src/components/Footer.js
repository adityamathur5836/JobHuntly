import React from "react";
import logo from "../assets/Frame 3.svg";
import "./Footer.css";
import fb from "../assets/fb.png";
import insta from "../assets/insta.png";
import dribbble from "../assets/dribbble.png";
import li from "../assets/li.png";
import twitter from "../assets/twitter.png";

export default function Footer() {
  return (
    <div className="fullfooter">
      <div className="footer">
        <div className="first">
          <div className="logo-div">
            <img src={logo} />
            <h2>JobHuntly</h2>
          </div>
          <p>
            Great platform for the job seeker that passionate about startups.
            Find your dream job easier.
          </p>
        </div>
        <div className="footer-cont">
          <div className="second">
            <h4 className="head">About</h4>
            <p>Companies</p>
            <p>Pricing</p>
            <p>Terms</p>
            <p>Advice</p>
            <p>Privacy Policy</p>
          </div>
          <div className="third">
            <h4 className="head">Resources</h4>
            <p>Help Docs</p>
            <p>Guide</p>
            <p>Updates</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="fourth">
          <h4 className="head">Get Job Notifications</h4>
          <p>The latest job news, articles, sent to your inbox weekly.</p>
          <div className="fifth">
            <input type="email" placeholder="Email Address" />
            <button>Subscrbibe</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="footersfooter">
        <div className="footerspara">
          <p>2021 @ JobHuntly. All rights reserved.</p>
        </div>
        <div className="footersbuttons">
          <button className="fb">
            <img src={fb} width={14} height={14} />
          </button>
          <img src={insta} />
          <img src={dribbble} />
          <img src={li} />
          <img src={twitter} className="twitter" />
        </div>
      </div>
    </div>
  );
}