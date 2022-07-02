import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <div className="songs_container">
        {create.map((create) => (
          <div>
            <Link to={`/creation/${create._id}`} className="link">
              <span className="postTitle">{create.name}</span>
              <img src={create.img} alt="" className="fpImg" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Get;
