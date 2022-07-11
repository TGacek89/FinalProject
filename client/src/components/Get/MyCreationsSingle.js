import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import "./myCreationsSingle.css";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Update from "../Update/Update";

const MyCreationsSingle = (_) => {
  const [create, setCreate] = useState([]);
  const [deleted, setDeleted] = useState(false);
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
  useEffect(() => {}, [deleted, create]);

  //DELETE POST
  function deletePost() {
    axios
      .delete(process.env.REACT_APP_API_URL + `/creation/${id}`)
      .then((res) => {
        setDeleted(true);
        if (res.statusText === "OK") {
        }
      });
  }

  if (loading) {
    return <h1>loading...</h1>;
  } else {
    return (
      <div>
        <Navbar />
        <Header />
        <div className="my-container">
          <div className="column left">
            <div className="my-title">{create.name}</div>
            <div className="my-artist">{create.artist}</div>
            <div>
              <img className="my-img" src={create.img} alt="" />
            </div>
          </div>

          <div className="column right">
            <div className="my-form">
              <FontAwesomeIcon
                icon={faTrash}
                size="2x"
                className="my-trash"
                onClick={deletePost}
              />{" "}
              <Update />
            </div>

            {deleted && <Navigate to="/mycreations" replace={true} />}
          </div>

          {/* <Footer /> */}
        </div>
      </div>
    );
  }
};
export default MyCreationsSingle;
