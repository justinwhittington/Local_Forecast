/*
https://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY
*/

import axios from "axios";
const APIKEY = "49df12cf33eaa281b7e2f194b16195bd";
const URL1 = ""

export default {
    currentWeather: function(query) {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&type=accurate&APPID=${APIKEY}`)
    }
}