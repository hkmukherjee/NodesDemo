const util = require('util');
import getData from "./05-getData";

const weatherApi = 'http://api.weatherapi.com/v1/current.json?key=f4025ada7d2a4507a6c93503211709&q=%s&aqi=no';

export const getWeatherInfo = (location: string, callback) => {
    getData(
        util.format(weatherApi, location),
        (data) => {
            callback(data)
        }
    );
}

