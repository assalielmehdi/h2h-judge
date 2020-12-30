import React from "react";
import { Link } from "react-router-dom";
import "../css/Matchups.css";

class Matchups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matchups: [],
      inner: 1,
    };
  }

  componentDidMount = () => {
    const interval = setInterval(
      () =>
        this.setState((state) => ({
          inner: state.inner ^ 1,
        })),
      1000
    );

    this.setState((state) => ({
      matchups: [
        {
          id: 1,
          user1Name: "Tourist",
          user1Score: 750,
          user2Name: "Petr",
          user2Score: 400,
          startDate: new Date("2020-12-27 06:00:00"),
          duration: 120,
        },
      ],
      interval,
    }));
  };

  componentWillUnmount = () => {
    clearInterval(this.state.interval);
  };

  formatDateTime = (millis) => {
    millis = Math.abs(Math.floor(millis / 1000));

    const seconds = millis % 60;
    const secondsStr = seconds ? `${seconds}s ` : "00s";
    millis = Math.floor(millis / 60);

    const minutes = millis % 60;
    const minutesStr = minutes ? `${minutes}m ` : "00m ";
    millis = Math.floor(millis / 60);

    const hours = millis % 24;
    const hoursStr = hours ? `${hours}h ` : "00h ";
    millis = Math.floor(millis / 24);

    const days = millis;
    const daysStr = days ? `${days}d ` : "";

    return `${daysStr}${hoursStr}${minutesStr}${secondsStr}`;
  };

  renderMatchupState = (startDate, duration) => {
    const timeDiff = new Date() - startDate;
    const statusComponent = (
      <div className="matchup-status mt-2 mb-3">
        {timeDiff < 0 ? (
          <i className="far fa-calendar-times me-3"></i>
        ) : timeDiff / 60000 > duration ? (
          <i className="fas fa-times me-3"></i>
        ) : (
          <i className="fas fa-running me-3"></i>
        )}
        <span>
          {timeDiff < 0
            ? "Upcoming matchup"
            : timeDiff / 60000 > duration
            ? "Past matchup"
            : "Running matchup"}
        </span>
      </div>
    );

    const timeComponent = (
      <div className="matchup-time">
        {(timeDiff < 0 || timeDiff / 60000 <= duration) && (
          <i className="far fa-clock me-3"></i>
        )}
        <span>
          {timeDiff < 0
            ? `Before start ${this.formatDateTime(timeDiff)}`
            : timeDiff / 60000 > duration
            ? ""
            : `Before end ${this.formatDateTime(60000 * duration - timeDiff)}`}
        </span>
      </div>
    );

    return (
      <React.Fragment>
        {statusComponent}
        {timeComponent}
      </React.Fragment>
    );
  };

  renderMatchup = (
    { id, user1Name, user1Score, user2Name, user2Score, startDate, duration },
    idx
  ) => (
    <div key={idx} className="col">
      <Link className="card" to={`/matchup/${id}`}>
        <h5 className="card-header text-center">
          <span className="me-3">{`${user1Name} (${user1Score})`}</span>
          <i className="bolt-icon fas fa-bolt"></i>
          <span className="ms-3">{`(${user2Score}) ${user2Name}`}</span>
        </h5>
        <div className="card-body">
          {this.renderMatchupState(startDate, duration)}
        </div>
      </Link>
    </div>
  );

  render = () => (
    <div className={`container-fluid matchups matchups-${this.props.theme}`}>
      <div className="row row-cols-4 p-4">
        {this.state.matchups.map(this.renderMatchup)}
      </div>
    </div>
  );
}

export default Matchups;
