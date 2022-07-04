import { useState } from "react";
import axios from "axios";
import FileInput from "../FileInput";
import styles from "./createForm.css";

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
    <div className="container">
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.heading}>Create</h1>
        <input
          type="text"
          maxLength="20"
          className={styles.input}
          placeholder="Creation Name...max 20 charactters."
          name="name"
          onChange={handleChange}
          value={data.name}
        />
        <input
          type="text"
          maxLength="20"
          className={styles.input}
          placeholder="Creator Name...max 20 charactters."
          name="artist"
          onChange={handleChange}
          value={data.artist}
        />
        <FileInput
          name="img"
          label="Choose Image"
          handleInputState={handleInputState}
          type="image"
          value={data.img}
        />

        <button
          type="submit"
          className={styles.submit_btn}
          onClick={() => {
            window.location.reload(false);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
