import React from "react";

import clearDay from "../../../../assets/images/weather/day/clear.jpg";
import rainDay from "../../../../assets/images/weather/day/rain.jpg";
import snowDay from "../../../../assets/images/weather/day/snow.jpg";
import thunderstormDay from "../../../../assets/images/weather/day/thunderstorm.jpg";

import clearNight from "../../../../assets/images/weather/night/clear.jpg";
import rainNight from "../../../../assets/images/weather/night/rain.jpg";
import snowNight from "../../../../assets/images/weather/night/snow.jpg";
import thunderstormNight from "../../../../assets/images/weather/night/thunderstorm.jpg";

import styled from "styled-components";

/*Import the right image based on the icon provided by the weatherdata*/
const weatherTypes = {
    "01d": clearDay,
    "02d": clearDay,
    "03d": clearDay,
    "04d": clearDay,
    "09d": rainDay,
    "10d": rainDay,
    "11d": thunderstormDay,
    "13d": snowDay,
    "50d": snowDay,


    "01n": clearNight,
    "02n": clearNight,
    "03n": clearNight,
    "04n": clearNight,
    "09n": rainNight,
    "10n": rainNight,
    "11n": thunderstormNight,
    "13n": snowNight,
    "50n": snowNight,
};

const WeatherImage = styled.div`
  height: 100%;
  width: 100%;
  background: ${props => `url(${weatherTypes[props.icon]}) no-repeat center`};
  background-size: cover;
`;

export default WeatherImage;