import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import "./CurrentWeather.css";

const CurrentWeather = props => (
  <Form className="centered column" id="homeSearch">
    <FormGroup className="column">
      <Label for="weatherSearch" className="column centered">
        <h1 id='header'>Enter Your City</h1>
      </Label>
      <Input
        className="centerHorizontal input"
        type="search"
        name="search"
        id="weatherSearch"
        placeholder="Durham, North Carolina"
        onChange={props.handleChange}
      />
      <button
        className="centered button" 
        type="submit"
        onClick={props.handleSubmit}
      >
        Get Weather
      </button>
    </FormGroup>
  </Form>
);

export default CurrentWeather;
