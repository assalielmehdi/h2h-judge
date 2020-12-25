import React from "react";
import "../css/Create.css";

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matchupName: "",

      user1Name: "",
      user1Email: "",
      user1Password: "",

      user2Name: "",
      user2Email: "",
      user2Password: "",

      formIdx: 0,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);
  };

  handleFormPageChange = (increment) => {
    this.setState((state) => ({
      formIdx: state.formIdx + increment,
    }));
  };

  user1Form = () => {
    return (
      <React.Fragment>
        <div className="mb-3">
          <label htmlFor="user-name" className="form-label">
            1st Competitor - Name
          </label>
          <input
            type="text"
            className="form-control"
            id="user-name"
            value={this.state.user1Name}
            onChange={(event) =>
              this.setState({ user1Name: event.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="user-email" className="form-label">
            1st Competitor - Email
          </label>
          <input
            type="text"
            className="form-control"
            id="user-email"
            value={this.state.user1Email}
            onChange={(event) =>
              this.setState({ user1Email: event.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="user-password" className="form-label">
            1st Competitor - Password
          </label>
          <input
            type="password"
            className="form-control"
            id="user-password"
            value={this.state.user1Password}
            onChange={(event) =>
              this.setState({ user1Password: event.target.value })
            }
          />
        </div>
      </React.Fragment>
    );
  };

  user2Form = () => {
    return (
      <React.Fragment>
        <div className="mb-3">
          <label htmlFor="user-name" className="form-label">
            2nd Competitor - Name
          </label>
          <input
            type="text"
            className="form-control"
            id="user-name"
            value={this.state.user2Name}
            onChange={(event) =>
              this.setState({ user2Name: event.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="user-email" className="form-label">
            2nd Competitor - Email
          </label>
          <input
            type="text"
            className="form-control"
            id="user-email"
            value={this.state.user2Email}
            onChange={(event) =>
              this.setState({ user2Email: event.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="user-password" className="form-label">
            2nd Competitor - Password
          </label>
          <input
            type="password"
            className="form-control"
            id="user-password"
            value={this.state.user2Password}
            onChange={(event) =>
              this.setState({ user2Password: event.target.value })
            }
          />
        </div>

        <button className="btn">Create</button>
      </React.Fragment>
    );
  };

  render = () => {
    const forms = [
      <div className="mb-3">
        <label htmlFor="matchup-name" className="form-label">
          Matchup name
        </label>
        <input
          type="text"
          className="form-control"
          id="matchup-name"
          value={this.state.matchupName}
          onChange={(event) =>
            this.setState({ matchupName: event.target.value })
          }
        />
      </div>,
      this.user1Form(),
      this.user2Form(),
    ];

    return (
      <div className={`container-fluid create create-${this.props.theme}`}>
        <div className="row">
          <div className="col-1 col-sm-2 col-xl-3" />
          <div className="col-10 col-sm-8 col-xl-6">
            <div className="card">
              <h3 className="card-title text-center my-3 ">New Matchup</h3>

              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  {forms[this.state.formIdx]}
                </form>
              </div>

              <div className="card-footer">
                <button
                  onClick={() => this.handleFormPageChange(-1)}
                  disabled={this.state.formIdx === 0}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  onClick={() => this.handleFormPageChange(1)}
                  disabled={this.state.formIdx === 2}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Create;
