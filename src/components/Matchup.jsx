import React from "react";
import { useParams } from "react-router-dom";
import "../css/Matchup.css";

const Matchup = (props) => {
  const { id } = useParams();

  return (
    <div className={`container-fluid matchup matchup-${props.theme}`}>
      <div className="row">{id}</div>
    </div>
  );
};

export default Matchup;
