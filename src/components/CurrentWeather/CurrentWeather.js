import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./CurrentWeather.css";

const CurrentWeather = props => (
  <Form className="centered column" id="homeSearch">
    <FormGroup className="column">
      <Label for="weatherSearch" className="column centered">
        <h1>Enter Your City</h1>
      </Label>
      <Input
        className="centerHorizontal"
        type="search"
        name="search"
        id="weatherSearch"
        placeholder="Durham, North Carolina"
        onChange={props.handleChange}
      />
      <Button
        className="centered submit"
        type="submit"
        onClick={props.handleSubmit}
      >
        Get Weather
      </Button>
    </FormGroup>
  </Form>
);

export default CurrentWeather;
