import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

export default class Routes extends Component {
  render() {
    const getDog = props => {
      const name = props.match.params.name;
      const currrentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      console.log(currrentDog);
      return <DogDetails {...props} dog={currrentDog} />;
    };

    return (
      <Switch>
        <Route
          exact
          path="/dogs"
          render={() => <DogList dogs={this.props.dogs} />}
        />
        <Route path="/dogs/:name" render={getDog} />
      </Switch>
    );
  }
}
