/*
https://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY

https://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY&cnt=5

api.openweathermap.org/data/2.5/forecast?q={city name},{country code}

results.list.
*/

import axios from "axios";
const APIKEY = "49df12cf33eaa281b7e2f194b16195bd";

export default {
    currentWeather: function(query) {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&type=accurate&APPID=${APIKEY}`)
    },
    getFiveDay: function(query) {
        return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=${APIKEY}&cnt=5&units=imperial`)
    }
}