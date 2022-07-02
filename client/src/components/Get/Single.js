import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";

const Single = (_) => {
  const [create, setCreate] = useState([]);
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [selectedFile, setSelectedFile] = useState();

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

  //UPDATE

  function updateUser() {
    let item = { name, artist };
    console.warn("item", item);
    fetch(process.env.REACT_APP_API_URL + `/creation/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getAllCreations();
      });
    });
  }

  //DELETE POST
  function deletePost() {
    axios.delete(process.env.REACT_APP_API_URL + `/creation/${id}`).then(() => {
      alert("Post deleted!");
    });
  }

  return (
    <div>
      <Navbar />
      <Header />

      {create.name}
      <img src={create.img} alt="" className="fpImg" />
      <button onClick={deletePost}> DELETE</button>

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          value={artist}
          onChange={(e) => {
            setArtist(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <button onClick={updateUser}>Update User</button>
      </div>
    </div>
  );
};
export default Single;
