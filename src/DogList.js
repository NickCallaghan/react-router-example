import React, { Component } from "react";
import Dog from "./Dog";

import "./DogList.css";

export default class DogList extends Component {
  render() {
    return (
      <div>
        <h1 className="display-1 text-center mt-2 mb-5">DogList</h1>

        <div className="row">
          {this.props.dogs.map(dog => (
            <Dog dog={dog} className="Dog" />
          ))}
        </div>
      </div>
    );
  }
}
