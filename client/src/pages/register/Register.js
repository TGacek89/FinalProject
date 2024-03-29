import axios from "axios";
import { useState } from "react";
import videoBg from "./Video/videoBg.mp4";
import "./register.css";
import Navbar from "../../components/Navbar/Navbar";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register-nav">
      <Navbar />
      <div className="main">
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <div className="register-Container">
            <form className="registerForm" onSubmit={handleSubmit}>
              <h1 className="register-title">REGISTER</h1>
              <label className="top-text">Username</label>
              <input
                type="text"
                className="registerInput"
                placeholder="Enter your username..."
                onChange={(e) => setUsername(e.target.value)}
              />
              <label className="top-text">Email</label>
              <input
                type="text"
                className="registerInput"
                placeholder="Enter your email..."
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="top-text">Password</label>
              <input
                type="password"
                className="registerInput"
                placeholder="Enter your password..."
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="registerButton" type="submit">
                Register
              </button>
            </form>
            {error && (
              <span style={{ color: "red", marginTop: "10px" }}>
                Something went wrong!
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
