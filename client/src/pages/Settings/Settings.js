import { useEffect, useState } from "react";
import axios from "axios";
import "./settings.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../../components/Navbar/Navbar";

function Settings() {
  const { user } = useContext(AuthContext);
  // const { dispatch } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);

  const PF = "http://localhost:8800/api/users/" + user._id;

  useEffect(() => {}, [success, error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    try {
      const res = await axios.put(
        process.env.REACT_APP_API_URL + "/users/" + user._id,
        updatedUser
      );
      // console.log(res);
      if (res.statusText === "OK") {
        setSuccess(true);
      }
      // dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      // dispatch({ type: "UPDATE_FAILURE" });
      setError(err);
    }
  };

  //DELETE User
  function deleteUser() {
    axios
      .delete(process.env.REACT_APP_API_URL + "/users/" + user._id)
      .then(() => {
        alert("User deleted!");
      });
  }

  return (
    <div>
      <Navbar />
      <div className="settings">
        <div className="settingsWrapper">
          <span className="settingsUpdateTitle">Welcome! {user.username}</span>
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle" onClick={deleteUser}>
              <div className="card-body">Status: </div>
              Delete Account
            </span>
          </div>
          <form className="settingsForm" onSubmit={handleSubmit}>
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img
                src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                alt=""
              />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <label>Username</label>
            <input
              type="text"
              placeholder={user.username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              placeholder={user.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="settingsSubmit" type="submit">
              Update
            </button>
            {success && (
              <span
                style={{
                  color: "orange",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                Profile has been updated...
              </span>
            )}

            {error && (
              <span
                style={{
                  color: "orange",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                {error.message}
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Settings;
