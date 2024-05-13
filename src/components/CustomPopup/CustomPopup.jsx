import EditMode from "./EditMode";
import ViewMode from "./ViewMode";
import { Popup } from "react-leaflet";

const CustomPopup = ({ onSave, edit, point }) => {
  return (
    <Popup>
      {edit ? <EditMode onSave={onSave} /> : <ViewMode point={point} />}
    </Popup>
  );
};

export default CustomPopup;
