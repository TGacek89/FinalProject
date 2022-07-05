import { useEffect, useState } from "react";
import axios from "axios";
import Create from "../../components/Create/Create";
import CreateForm from "../../components/CreateForm/CreateForm";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/header/Header";
import "./upload.css";

function Upload() {
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
    <div>
      <Navbar />
      <Header />
      <div className="main">
        <div className="container">
          <div className="songs_container">
            <CreateForm />
            {/* {create.map((create) => (
            <Create create={create} key={create._id} />
          ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
