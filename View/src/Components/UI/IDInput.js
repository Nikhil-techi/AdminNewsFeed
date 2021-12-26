import React from "react";

function IDInput(props) {
  return (
    <div className="row">
      <div className="col-25">
        <label>ID</label>
      </div>
      <div className="col-75">
        <input
          className="inputxt"
          type="text"
          placeholder="ID"
          ref={props.id}
          required
        />
      </div>
    </div>
  );
}

export default IDInput;
