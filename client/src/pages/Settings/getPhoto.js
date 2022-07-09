import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "./getPhoto.css";

export default function GetPhoto() {
  const [create, setCreate] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  const getAllCreations = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API_URL + "/users/" + user._id
      );
      setCreate(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCreations();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <h1>loading...</h1>;
  } else {
    return (
      <div className="get-container">
        <img src={create.profilePic} alt="" className="profilePic" />
      </div>
    );
  }
}
