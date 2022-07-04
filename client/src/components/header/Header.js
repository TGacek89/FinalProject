import "./header.css";
import React from "react";
import me from "../../img/me.png";

export default function Header() {
  return (
    <div className="i">
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={me} alt="" className="i-img" />
      </div>
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Tomasz Gacek</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Junior Full Stack </div>
              <div className="i-title-item">Student</div>
              <div className="i-title-item">Beautifull</div>
              <div className="i-title-item">Content </div>
              <div className="i-title-item">Content </div>
            </div>
          </div>
          <p className="i-desc">
            I'm Junior Full Stack Developer that recently finished Code Space
            Academy course and I'm currently looking for a job.
          </p>
        </div>
      </div>
    </div>
  );
}
