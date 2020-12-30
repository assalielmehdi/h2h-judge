import React from "react";
import Routes from "./components/Routes";
import "./css/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    };
  }

  handleThemeChange = (e) => {
    this.setState((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    }));
  };

  render = () => (
    <React.Fragment>
      <div className={`toggle-switch toggle-switch-${this.state.theme}`}>
        <i className="far fa-sun"></i>
        <label className="switch mx-2">
          <input type="checkbox" onClick={this.handleThemeChange} />
          <span className="slider round"></span>
        </label>
        <i className="far fa-moon"></i>
      </div>

      <Routes theme={this.state.theme} />
    </React.Fragment>
  );
}

export default App;
