import EditMode from "./EditMode";
import ViewMode from "./ViewMode";
import { Popup } from "react-leaflet";

const CustomPopup = ({ onSave, edit, point }) => {
  return (
    <Popup>
      <div className="flex flex-col p-2 bg-white">
        {edit ? <EditMode onSave={onSave} /> : <ViewMode point={point} />}
      </div>
    </Popup>
  );
};

export default CustomPopup;
