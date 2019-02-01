import React from "react";
import CurrentWeather from "../CurrentWeather";
import Api from "../../utils/Api";
import "./Home.css";

export default class Home extends React.Component {
  state = {
    location: "",
    result: {}
  };

  handleChange = event => {
    let value = event.target.value;
    this.setState(() => {
      return {
        location: value
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    Api.currentWeather(this.state.location)
      .then(res => {
        this.setState({ result: res.data.message });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <CurrentWeather
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
