import "./header.css";
import React from "react";

export default function Header() {
  return (
    <div className="i">
      <div className="i-right">
        <div className="i-bg"></div>
        {/* <img src={} alt="" className="i-img" /> */}
        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item">Junior Full Stack </div>
            <div className="i-title-item">Student</div>
            <div className="i-title-item">Beautifull</div>
            <div className="i-title-item">Content </div>
            <div className="i-title-item">Content </div>
          </div>
        </div>
      </div>
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Tomasz Gacek</h1>
          <div className="i-title"></div>
        </div>
      </div>
    </div>
  );
}
