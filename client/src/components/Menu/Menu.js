import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./menu.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { logout } from "../../context/AuthActions";

export default function Menu() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <li className="items">Home</li>
          </Link>
          <Link
            to="/register"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <li className="items">Services</li>
          </Link>
          <li className="items">Contact</li>
          {user ? (
            <div>
              <Link
                to="/settings"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <li>Welcome! {user.username}</li>
              </Link>

              <span onClick={() => dispatch(logout())}>Logout </span>

              <Link
                to="/create"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <li className="items">ADD PHOTOS</li>
              </Link>
            </div>
          ) : (
            <div className="navItems">
              <Link
                to="/register"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <button className="navButton">Register</button>
              </Link>
              <Link
                to="/login"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <button className="navButton">Login</button>
              </Link>
            </div>
          )}
        </ul>
      )}

      <button onClick={toggleNav} className="btn">
        BTN
      </button>
    </nav>
  );
}
