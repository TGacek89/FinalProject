import { useEffect, useState } from "react";
import axios from "axios";
import Create from "../../components/Create";
import CreateForm from "../../components/CreateForm";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

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
    <div className="container">
      <Navbar />
      <Header />
      <CreateForm />

      <div className="songs_container">
        {create.map((create) => (
          <Create create={create} key={create._id} />
        ))}
      </div>
    </div>
  );
}

export default Upload;
