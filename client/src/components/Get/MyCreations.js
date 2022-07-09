import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

import axios from "axios";
import { Link } from "react-router-dom";
import "./myCreations.css";

function MyCreations() {
  const [create, setCreate] = useState([]);

  const getAllCreations = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API_URL + "/creation/user/:id"
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
    <div>
      <Navbar />
      <Header />
      <div className="get-container">
        {create.map((create, index) => (
          <div className="get-container.img" key={index}>
            <Link to={`/creation/${create._id}`} className="link">
              <div className="get-img">
                <img src={create.img} alt="" className="fpImg" />
                <div className="get-name">
                  <span className="creationName">{create.name}</span>
                  <span className="creationDate">
                    {new Date(create.createdAt).toDateString()}
                  </span>
                  <div className="creationArtist">
                    <span>{create.artist}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default MyCreations;
