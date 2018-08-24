import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Lists extends Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.state = {
      hoverStates: {}
    };
  }
  handleMouseOver = e => {
    this.setState({
      hoverStates: {
        [e.target.id]: true
      }
    });
  };
  handleMouseLeave = e => {
    this.setState({
      hoverStates: {
        [e.target.id]: false
      }
    });
  };

  render() {
    const { hoverStates } = this.state;
    const menuItems = [0, 1, 2, 3].map(id => (
      <li
        key={id}
        id={id}
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
        className={hoverStates[id] ? "hovering" : ""}
      >
        Categories
        {hoverStates[id] ? (
          <ul className="dropdown menu">
            <li>#{id} Computerss & Office</li>
            <li>#{id} Electronics</li>
          </ul>
        ) : null}
      </li>
    ));

    return <ul className="menu">{menuItems}</ul>;
  }
}

function App() {
  return (
    <div className="App">
      <Lists />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
