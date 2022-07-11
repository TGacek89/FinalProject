import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import "./single.css";
import Footer from "../Footer/Footer";

const Single = (_) => {
  const [create, setCreate] = useState([]);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();
  //GET ONE
  const getAllCreations = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API_URL + `/creation/${id}`
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
  });
  useEffect(() => {}, [create]);

  if (loading) {
    return <h1>loading...</h1>;
  } else {
    return (
      <div>
        <Navbar />
        <Header />
        <div className="single-container">
          <div>
            <img className="single-img" src={create.img} alt="" />
          </div>
          <div className="single-title">{create.name}</div>
          <div className="single-artist">{create.artist}</div>
        </div>
        <Footer />
      </div>
    );
  }
};
export default Single;
