import React from "react";
import { useParams } from "react-router-dom";
import "../css/Matchup.css";

const Matchup = (props) => {
  const { id } = useParams();

  const matchup = {
    id: 1,
    user1Name: "Tourist",
    user1Score: 750,
    user2Name: "Petr",
    user2Score: 400,
    startDate: new Date("2020-12-27 06:00:00"),
    duration: 120,
  };

  return (
    <div className={`container-fluid matchup matchup-${props.theme}`}>
      <div className="row pt-2">
        <h3 className="text-center">
          <span className="me-3">
            {`${matchup.user1Name} (${matchup.user1Score})`}
          </span>
          <i className="bolt-icon fas fa-bolt"></i>
          <span className="ms-3">
            {`(${matchup.user2Score}) ${matchup.user2Name}`}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default Matchup;
