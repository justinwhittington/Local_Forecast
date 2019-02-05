import React from "react";
import PropTypes from "prop-types";
import CurrentWeather from "../CurrentWeather";
import WeatherResults from "../WeatherResults";
import Api from "../../utils/Api";
import "./Home.css";

let checker = false;
// Main home view
export default class Home extends React.Component {
  state = {
    location: "",
    result: [],
    objCheck: false
  };

  // Function to check if result object is empty
  isEmpty = obj => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  };

  // Sets the state to what the user has typed
  handleChange = event => {
    let value = event.target.value;
    this.setState(() => {
      return {
        location: value
      };
    });
  };

  // Function for getting data from the API and then checking for an empty object
  handleSubmit = event => {
    event.preventDefault();

    Api.getFiveDay(this.state.location)
      .then(res => {
        this.setState({ result: res.data.list });
        // console.log("API DATA VVV");
        // console.log(res.data);
        // console.log("API DATA ^^^");
      })
      .catch(err => console.log(err));

    // If data is found in this.state.result, objCheck switched to true for conditional render in HTML
    if (this.isEmpty(this.state.result)) {
      this.setState(() => {
        return {
          objCheck: true
        };
      });
      checker = true;
    }
  };

  render() {
    // Conditional rendering based on the object check function
    if (checker) {
      return (
        <div id="height100">
          <WeatherResults result={this.state.result} />
        </div>
      );
    } else {
      return (
        <CurrentWeather
        id="height100"
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  }
}

WeatherResults.propTypes = {
  result: PropTypes.array
};
