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
    <div className="get-container">
      {create.map((create, index) => (
        <div className="get-container.img" key={index}>
          <Link to={`/creation/${create._id}`} className="link">
            <div className="get-img">
              <img src={create.img} alt="" className="fpImg" />
              <div className="get-name">
                <span className="postTitle">{create.name}</span>
                <span className="postTitle">{create.artist}</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Get;
