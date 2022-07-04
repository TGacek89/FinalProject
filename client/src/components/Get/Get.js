import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./get.css";

function Get() {
  const [create, setCreate] = useState([]);

  const getAllCreations = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API_URL + "/creation"
      );
      setCreate(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCreations();
  }, []);
  return (
    <div className="container">
      {create.map((create) => (
        <div className="container.img">
          <Link to={`/creation/${create._id}`} className="link">
            <span className="postTitle">{create.name}</span>
            <img src={create.img} alt="" className="fpImg" />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Get;
