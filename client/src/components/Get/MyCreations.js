import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./myCreations.css";
import Menu from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function MyCreations() {
  const [creations, setCreate] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    title: "",
    artist: "",
    img: "",
    author: JSON.parse(localStorage.getItem("user")) || null,
  });

  const getAllCreations = async () => {
    const user = await JSON.parse(localStorage.getItem("user"));
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/creation/author/${user._id}`
      );
      console.log(data);
      setCreate(data.data);
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

  return (
    <>
      <Menu />
      <Header />
      <div className="get-title-container">
        <h1>My Creations</h1>
      </div>
      <div className="get-container">
        {creations.map((create, index) => (
          <div className="get-container.img" key={index}>
            <Link to={`/mycreations/creation/${create._id}`} className="link">
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
    </>
  );
}

export default MyCreations;
