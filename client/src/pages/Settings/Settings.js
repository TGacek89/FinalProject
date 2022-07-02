import { useEffect, useState } from "react";
import axios from "axios";

import SettingsCreate from "../../components/Settings/SettingsCreate/SettingsCreate";

import SettingsForm from "../../components/Settings/SettingsForm/SettingsForm";

function Settings() {
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
      <SettingsForm />

      <div className="songs_container">
        {create.map((create) => (
          <SettingsCreate create={create} key={create._id} />
        ))}
      </div>
    </div>
  );
}

export default Settings;
