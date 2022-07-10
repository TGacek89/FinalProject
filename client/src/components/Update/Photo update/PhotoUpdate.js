import { useState, useContext } from "react";
import axios from "axios";
import FileInput from "../Photo/index";
import "./photoUpdate.css";
import { AuthContext } from "../../../context/AuthContext";

const PhotoUpdate = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState({
    profilePic: "",
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
      const url = process.env.REACT_APP_API_URL + "/users/" + user._id;
      const { data: res } = await axios.put(url, data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="form-container-update">
        <form className="create.form-update" onSubmit={handleSubmit}>
          <div className="create-input-update">
            <FileInput
              name="profilePic"
              label="Choose Image"
              handleInputState={handleInputState}
              type="image"
              value={data.profilePic}
            />{" "}
          </div>

          <div className="create-submit">
            {" "}
            <button
              type="submit"
              className="upload-submit-btn"
              onClick={() => {
                window.location.reload(false);
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PhotoUpdate;
