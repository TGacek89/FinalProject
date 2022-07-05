import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../header/Header";
import "./single.css";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Single = (_) => {
  const [create, setCreate] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [profile, setProfile] = useState("");

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
  });
  useEffect(() => {}, [deleted, create]);
  //UPDATE

  function updateCreation() {
    let item = { name, artist };
    console.warn("item", item);
    fetch(process.env.REACT_APP_API_URL + `/creation/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((result) => {
        result.json();
      })
      .then()
      .catch((err) => {});
  }

  //DELETE POST
  function deletePost() {
    axios
      .delete(process.env.REACT_APP_API_URL + `/creation/${id}`)
      .then((res) => {
        // alert("Post deleted!");
        setDeleted(true);
        if (res.statusText === "OK") {
        }
      });
  }
  //UPDATE PHOTO
  const handleChange = (e) => {
    console.log(e.target.files);
    setProfile(e.target.files[0]);
  };

  const handleApi = () => {
    const formData = new FormData();
    formData.append("profile", profile);
    axios
      .put(process.env.REACT_APP_API_URL + `/creation/${id}`, formData)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <Navbar />
      <Header />
      <div className="single-container">
        {create.name}
        <div>
          <div className="single-img">
            <img className="single-img" src={create.img} alt="" />
          </div>

          <button onClick={deletePost}> DELETE</button>
          <FontAwesomeIcon icon={faTrash} onClick={deletePost} />

          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />{" "}
            <input
              type="text"
              value={artist}
              onChange={(e) => {
                setArtist(e.target.value);
              }}
            />{" "}
            <button onClick={updateCreation}>Update </button>
          </div>
          <div>
            Image update
            <input type="file" onChange={handleChange} />
            <button onClick={handleApi}>Submit</button>
          </div>
        </div>
        {deleted && <Navigate to="/create" replace={true} />}
      </div>
      <Footer />
    </div>
  );
};
export default Single;
