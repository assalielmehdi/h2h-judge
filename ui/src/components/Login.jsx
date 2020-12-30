import React from "react";
import "../css/Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render = () => (
    <div className={`container-fluid login login-${this.props.theme}`}>
      <div className="row">
        <div className="col-1 col-sm-2 col-xl-3" />
        <div className="col-10 col-sm-8 col-xl-6">
          <div className="card">
            <h3 className="card-title text-center my-3">H2H Judge</h3>

            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={this.state.username}
                    onChange={(event) =>
                      this.setState({ username: event.target.value })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={this.state.password}
                    onChange={(event) =>
                      this.setState({ password: event.target.value })
                    }
                  />
                </div>

                <button className="btn">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
