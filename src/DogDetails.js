import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogDetails.css";

export default class DogDetails extends Component {
  render() {
    let { dog } = this.props;
    return (
      <div className="container text-center">
        <div className="DogDetails row mt-5 justify-content-center">
          <div className="col-11 col-lg-5">
            <div className="DogDetails-card card">
              <img className="card-img-top" src={dog.src} alt={dog.name} />
              <div className="card-body"></div>
              <h2 className="card-title">{this.props.dog.name}</h2>
              <h4 className="card-subtitle text-muted"> {dog.age} years old</h4>
              <ul className="list-group list-group-flush pt-3">
                {dog.facts.map((fact, i) => (
                  <li className="list-group-item p-3" key={i}>
                    {fact}
                  </li>
                ))}
              </ul>
              <Link to="/dogs" className="btn btn-info  p-4">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
