import React from "react";
import "../css/NotFound.css";

const NotFound = (props) => (
  <div className={`container-fluid not-found not-found-${props.theme}`}>
    <div className="row">
      <h1 className="not-found-content">404 - Not Found</h1>
    </div>
  </div>
);

export default NotFound;
