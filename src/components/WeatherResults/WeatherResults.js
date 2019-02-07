import React from "react";
import Moment from "moment";
import WeatherIcon from 'react-open-weather-icons';
import "./WeatherResults.css";
/*
 Component maps over array of props and outputs individual weather results

 <img
          className="icon"
          key={res.weather[0].main}
          src={`http://openweathermap.org/img/w/${res.weather[0].icon}.png`}
          alt="icon"
        />

        <img
          className={`icon owf owf-${res.weather[0].icon}`}
          key={res.weather[0].main}
          src={`http://openweathermap.org/img/w/${res.weather[0].icon}.png`}
          alt="icon"
        />
*/
const WeatherResults = props => {
  const list = props.result;
  console.log(props);

  const listItems = list.map(res => (
    <ul key={res.dt} className="item">
      <li  className='centered'>
      <WeatherIcon name={res.weather[0].icon} className='icon centered'/>
      </li>
      <li key={res.dt_txt} className="centered">
        {Moment.unix(res.dt).format("dddd")}
      </li>
      <li key={res.main.temp} className="centered">
        {res.main.temp}°
      </li>
      <li key={res.weather[0].description} className="centered">
        {res.weather[0].description}
      </li>
    </ul>
  ));

  return <div className="listItems">{listItems}</div>;
};

export default WeatherResults;
