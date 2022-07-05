import { useState } from "react";
import axios from "axios";
import FileInput from "../FileInput";
import "./createForm.css";
import Footer from "../Footer/Footer";
import Header from "../header/Header";
import Navbar from "../Navbar/Navbar";

const CreateForm = () => {
  const [data, setData] = useState({
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
      <Navbar />
      <Header />
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="heading">Create</h1>

          <FileInput
            name="img"
            label="Choose Image"
            handleInputState={handleInputState}
            type="image"
            value={data.img}
          />
          <input
            type="text"
            maxLength="20"
            className="styles.input"
            placeholder="Creation Name...max 20 charactters."
            name="name"
            onChange={handleChange}
            value={data.name}
          />
          <input
            type="text"
            maxLength="20"
            className="styles.input"
            placeholder="Creator Name...max 20 charactters."
            name="artist"
            onChange={handleChange}
            value={data.artist}
          />

          <button
            type="submit"
            className="styles.submit_btn"
            onClick={() => {
              window.location.reload(false);
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreateForm;
