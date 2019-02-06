import React from "react";
import PropTypes from "prop-types";
import CurrentWeather from "../CurrentWeather";
import WeatherResults from "../WeatherResults";
import Loading from "../Loading";
import Api from "../../utils/Api";
import "./Home.css";

let checker = false;
// Main home view
export default class Home extends React.Component {
  state = {
    location: "",
    result: [],
    objCheck: false,
    load: false,
    check: false
  };

  // componentDidMount() {
  //   setTimeout(() => this.setState({ check: true }), 1500);
  // }

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
    this.setState({ load: true });

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
      setTimeout(() => this.setState(() => {
        return {
          load: false,
          objCheck: true
        };
      }), 1500);
      
      // checker = true;
    }
  };

  render() {
    // Conditional rendering based on the object check function
    if (this.state.objCheck) {
      return (
        <div id="height100">
          <WeatherResults result={this.state.result} />
        </div>
      );
    } else if (this.state.load) {
      return <Loading />;
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
