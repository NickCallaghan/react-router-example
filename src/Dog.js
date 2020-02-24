import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dog.scss";

export default class Dog extends Component {
  render() {
    return (
      <div className="Dog col-md-4 text-center mb-5" key={this.props.dog.name}>
        <img
          src={this.props.dog.src}
          alt={this.props.dog.name}
          className="mb-3"
        />
        <Link className="underline" to={`/dogs/${this.props.dog.name}`}>
          <h2>{this.props.dog.name}</h2>
        </Link>
      </div>
    );
  }
}
