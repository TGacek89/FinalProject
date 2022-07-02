import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Single = (_) => {
  const [create, setCreate] = useState([]);

  let { id } = useParams();
  //GET ONE
  const getAllCreations = async () => {
    try {
      const { data } = await axios.get(
        // `http://localhost:8800/api/creation/${id}`
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

  //DELETE POST
  function deletePost() {
    axios.delete(process.env.REACT_APP_API_URL + `/creation/${id}`).then(() => {
      alert("Post deleted!");
    });
  }

  return (
    <div>
      <Navbar />
      {create.name}
      <img src={create.img} alt="" className="fpImg" />
      <button onClick={deletePost}> DELETE</button>
    </div>
  );
};
export default Single;
