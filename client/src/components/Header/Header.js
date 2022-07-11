import "./header.css";
import React from "react";
import videoBg from "./Video/videoBg.mp4";
import GetPhoto from "../../pages/Settings/getPhoto";

export default function Header() {
  return (
    <div className="i">
      <div className="i-right">
        <div className="i-bg">
          <video src={videoBg} autoPlay loop muted />
        </div>
      </div>

      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">
            Welcome to:{" "}
            <div className="i-get-avatar">
              <GetPhoto />
            </div>
          </h2>

          <h1 className="i-name">Photo Blog</h1>

          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Create</div>
              <div className="i-title-item">Share</div>
              <div className="i-title-item">Photography </div>
              <div className="i-title-item">Upload </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
