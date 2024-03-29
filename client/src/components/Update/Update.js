import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./update.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const Update = (_) => {
  const [create, setCreate] = useState([]);
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [hidden, setHidden] = useState(true);
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
  useEffect(() => {}, [create]);

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

  return (
    <div>
      <FontAwesomeIcon
        icon={faPen}
        size="2x"
        className="update-pen"
        onClick={() => setHidden((s) => !s)}
      />{" "}
      {!hidden ? (
        <div>
          {" "}
          <div className="update-container">
            <div className="update-form">
              <input
                type="text"
                placeholder="New title"
                className="update-input"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />{" "}
              <input
                type="text"
                placeholder="New description"
                className="update-input"
                value={artist}
                onChange={(e) => {
                  setArtist(e.target.value);
                }}
              />{" "}
              <button
                className="update-btn"
                onClick={() => {
                  updateCreation();
                }}
              >
                Update{" "}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Update;
