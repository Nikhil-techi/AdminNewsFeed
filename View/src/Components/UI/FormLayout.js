import React from "react";

function FormLayout(props) {
  return (
    <div className="container">
      <form action="action_page.php" onSubmit={props.onSubmit}>
        {props.idinput}
        <div className="row">
          <div className="col-25">
            <label>Date & Time</label>
          </div>
          <div className="col-75">
            <input type="datetime-local" ref={props.datetime} />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Title</label>
          </div>
          <div className="col-75">
            <input
              className="inputxt"
              type="text"
              placeholder="Title"
              ref={props.title}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Description</label>
          </div>
          <div className="col-75">
            <textarea
              placeholder="Body"
              style={{ height: "200px" }}
              ref={props.body}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Author</label>
          </div>
          <div className="col-75">
            <input
              className="inputxt"
              type="text"
              placeholder="Author"
              ref={props.author}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Image</label>
          </div>
          <div className="col-75">
            <input
              className="inputxt"
              type="text"
              placeholder="URL Only"
              ref={props.imageurl}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Article URL</label>
          </div>
          <div className="col-75">
            <input
              className="inputxt"
              type="text"
              placeholder="URL Only"
              value="//"
              ref={props.url}
            />
          </div>
        </div>
        <div className="row">
          <button type="submit">{props.btn_name}</button>
        </div>
      </form>
    </div>
  );
}

export default FormLayout;
