import React from "react";
import arrow from "../assets/arrow.png";
import "./Latest.css";
import Nomad from "../assets/Nomad.png";
import dot from "../assets/dot.png";
import sma from "../assets/sma.png";
import dropbox from "../assets/dropbox.png";
import bd from "../assets/bd.png";
import id from "../assets/id.png";
import udacity from "../assets/udacity.png";
import hr1 from "../assets/hr1.png";
import hr2 from "../assets/hr2.png";

export default function Latest() {
  return (
    <div className="latest-jobs">
      <div className="latest-triangle"></div>
      <div className="latest-container">
        <div className="latest-nav">
          <div className="heading">
            <h1>Latest</h1>
            <h1 className="latest">jobs open</h1>
          </div>
          <div className="inner-latest">
            <a>Show all jobs</a>
            <img src={arrow} width="10%" height="10%" />
          </div>
        </div>
        <div className="latest-grid">
          <div className="grid-elem">
            <img src={Nomad} width={50} height={50} />
            <div className="inside-elems">
              <h2>Social Media Assistant</h2>
              <div className="location">
                <p>Nomad</p>
                <img src={dot} />
                <p>Paris, France</p>
              </div>
              <div className="outer-btn">
                <button className="greenbtn">Full Time</button>
                <div className="buttons">
                  <button className="yellowbtn">Marketing</button>
                  <button className="purplebtn">Design</button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-elem">
            <img src={sma} width={50} height={50} />
            <div className="inside-elems">
              <h2>Social Media Assistant</h2>
              <div className="location">
                <p>Netlify</p>
                <img src={dot} />
                <p>Paris, France</p>
              </div>
              <div className="outer-btn">
                <button className="greenbtn">Full Time</button>
                <div className="buttons">
                  <button className="yellowbtn">Marketing</button>
                  <button className="purplebtn">Design</button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-elem">
            <img src={dropbox} width={50} height={50} />
            <div className="inside-elems">
              <h2>Brand Designer</h2>
              <div className="location">
                <p>Dropbox</p>
                <img src={dot} />
                <p>San Fransisco, USA</p>
              </div>
              <div className="outer-btn">
                <button className="greenbtn">Full Time</button>
                <div className="buttons">
                  <button className="yellowbtn">Marketing</button>
                  <button className="purplebtn">Design</button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-elem bd">
            <img src={bd} width={50} height={50} />
            <div className="inside-elems">
              <h2>Brand Designer</h2>
              <div className="location">
                <p>Maze</p>
                <img src={dot} />
                <p>San Fransisco, USA</p>
              </div>
              <div className="outer-btn">
                <button className="greenbtn">Full Time</button>
                <div className="buttons">
                  <button className="yellowbtn">Marketing</button>
                  <button className="purplebtn">Design</button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-elem">
            <img src={id} width={50} height={50} />
            <div className="inside-elems">
              <h2>Interactive Developer</h2>
              <div className="location">
                <p>Terraform</p>
                <img src={dot} />
                <p>Hamburg, Germany</p>
              </div>
              <div className="outer-btn">
                <button className="greenbtn">Full Time</button>
                <div className="buttons">
                  <button className="yellowbtn">Marketing</button>
                  <button className="purplebtn">Design</button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-elem">
            <img src={udacity} width={50} height={50} />
            <div className="inside-elems">
              <h2>Social Media Assistant</h2>
              <div className="location">
                <p>Udacity</p>
                <img src={dot} />
                <p>Hamburg, Germany</p>
              </div>
              <div className="outer-btn">
                <button className="greenbtn">Full Time</button>
                <div className="buttons">
                  <button className="yellowbtn">Marketing</button>
                  <button className="purplebtn">Design</button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-elem">
            <img src={hr1} width={50} height={50} />
            <div className="inside-elems">
              <h2>HR Manager</h2>
              <div className="location">
                <p>Packer</p>
                <img src={dot} />
                <p>Lucern, Switzerland</p>
              </div>
              <div className="outer-btn">
                <button className="greenbtn">Full Time</button>
                <div className="buttons">
                  <button className="yellowbtn">Marketing</button>
                  <button className="purplebtn">Design</button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-elem">
            <img src={hr2} width={50} height={50} />
            <div className="inside-elems">
              <h2>HR Manager</h2>
              <div className="location">
                <p>Webflow</p>
                <img src={dot} />
                <p>Lucern, Switzerland</p>
              </div>
              <div className="outer-btn">
                <button className="greenbtn">Full Time</button>
                <div className="buttons">
                  <button className="yellowbtn">Marketing</button>
                  <button className="purplebtn">Design</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
