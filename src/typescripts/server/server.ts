import {getWeatherInfo} from '../playground/06-weatherForecastService';
const express = require('express');

const app = express();

app
.get(
    '/weatherInfo/:location',
    (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        const location = req.params.location;
        getWeatherInfo(location, (data) => res.send(data));
    }
);

const port = process.env.PORT || 5000;
app
.listen(
    port, 
    () => console.log(`Weather Info Service started on port ${port}`)
);