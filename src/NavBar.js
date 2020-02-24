import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    const dogLinks = this.props.dogs.map(dog => (
      <li className="nav-item active" key={dog.name}>
        <Link className="nav-link" to={`/dogs/${dog.name}`}>
          {dog.name} <span className="sr-only">(current)</span>
        </Link>
      </li>
    ));

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/dogs">
          DogStore
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/dogs">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            {dogLinks}
          </ul>
        </div>
      </nav>
    );
  }
}
