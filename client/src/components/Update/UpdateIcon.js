import { useState } from "react";
import "./update.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import SinglePhotoUpdate from "./Single update/PhotoUpdate";
import "./updateIcon.css";

const UpdateIcon = (_) => {
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <FontAwesomeIcon
        icon={faCameraRetro}
        size="2x"
        className="camera"
        onClick={() => setHidden((s) => !s)}
      />
      {!hidden ? (
        <div>
          <SinglePhotoUpdate />
        </div>
      ) : null}
    </div>
  );
};
export default UpdateIcon;
