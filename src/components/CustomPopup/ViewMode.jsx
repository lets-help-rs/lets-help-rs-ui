import React from "react";

const ViewMode = ({ point }) => {
    const { id, description} = point;
  return (
    <>
      <div>
        <p>{description}</p>
        <button onClick={() => console.log(point)}>TESTE</button>
      </div>
    </>
  );
};
export default ViewMode;
