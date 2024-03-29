import { useState, useContext } from "react";
import axios from "axios";
import FileInput from "../FileInput";
import "./createForm.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const CreateForm = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [data, setData] = useState({
    author: JSON.parse(localStorage.getItem("user")) || null,
    userName: user.username,
    name: "",
    artist: "",
    img: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleInputState = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const url = process.env.REACT_APP_API_URL + "/creation";
      const { data: res } = await axios.post(url, data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!user && <Navigate to="/login" replace={true} />}
      <Navbar />
      <Header />
      {user && (
        <>
          <div className="i-form-container">
            <form className="create.form" onSubmit={handleSubmit}>
              <div className="create-input">
                <h1 className="creation-title">CREATE</h1>
                <FileInput
                  name="img"
                  label="Choose Image"
                  handleInputState={handleInputState}
                  type="image"
                  value={data.img}
                />{" "}
                <input
                  type="text"
                  maxLength="20"
                  className="create-input-field"
                  placeholder="Creation Name... max 20 charactters."
                  name="name"
                  onChange={handleChange}
                  value={data.name}
                />
                <input
                  type="text"
                  maxLength="60"
                  className="create-input-field"
                  placeholder="Description... max 60 charactters."
                  name="artist"
                  onChange={handleChange}
                  value={data.artist}
                />
              </div>

              <div className="create-submit">
                {" "}
                <button
                  type="submit"
                  className="submit-btn"
                  onClick={() => {
                    window.location.reload(false);
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default CreateForm;
