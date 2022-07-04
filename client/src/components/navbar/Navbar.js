import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { logout } from "../../context/AuthActions";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const { dispatch } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">FINAL PROJECT</span>
        </Link>
        <Link to="/create" style={{ color: "inherit", textDecoration: "none" }}>
          <button className="navButton">ADD PHOTOS</button>
        </Link>
        <Link
          to="/register"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <button className="navButton">Register</button>
        </Link>
        <Link
          to="/register"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <button className="navButton">Register</button>
        </Link>
        {user ? (
          <div>
            <Link
              to="/settings"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <p>Welcome! {user.username}</p>
            </Link>

            <span onClick={() => dispatch(logout())}>Logout </span>
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
      </div>
    </div>
  );
};

export default Navbar;
