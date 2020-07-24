import React from "react";

import { ReactComponent as ClearSkyDay } from "../../assets/icons/weather/01d.svg";
import { ReactComponent as FewCloudsDay } from "../../assets/icons/weather/02d.svg";
import { ReactComponent as ScatteredCloudsDay } from "../../assets/icons/weather/03d.svg";
import { ReactComponent as BrokenCloudsDay } from "../../assets/icons/weather/04d.svg";
import { ReactComponent as ShowerRainDay } from "../../assets/icons/weather/09d.svg";
import { ReactComponent as RainDay } from "../../assets/icons/weather/10d.svg";
import { ReactComponent as ThunderstormDay } from "../../assets/icons/weather/11d.svg";
import { ReactComponent as SnowDay } from "../../assets/icons/weather/13d.svg";
import { ReactComponent as MistDay } from "../../assets/icons/weather/50d.svg";

import { ReactComponent as ClearSkyNight } from "../../assets/icons/weather/01n.svg";
import { ReactComponent as FewCloudsNight } from "../../assets/icons/weather/02n.svg";
import { ReactComponent as ScatteredCloudsNight } from "../../assets/icons/weather/03n.svg";
import { ReactComponent as BrokenCloudsNight } from "../../assets/icons/weather/04n.svg";
import { ReactComponent as ShowerRainNight } from "../../assets/icons/weather/09n.svg";
import { ReactComponent as RainNight } from "../../assets/icons/weather/10n.svg";
import { ReactComponent as ThunderstormNight } from "../../assets/icons/weather/11n.svg";
import { ReactComponent as SnowNight } from "../../assets/icons/weather/13n.svg";
import { ReactComponent as MistNight } from "../../assets/icons/weather/50n.svg";

/*Import the right icon based on the icon provided by the weatherdata*/
const weatherTypes = {
    "01d": ClearSkyDay,
    "02d": FewCloudsDay,
    "03d": ScatteredCloudsDay,
    "04d": BrokenCloudsDay,
    "09d": ShowerRainDay,
    "10d": RainDay,
    "11d": ThunderstormDay,
    "13d": SnowDay,
    "50d": MistDay,

    "01n": ClearSkyNight,
    "02n": FewCloudsNight,
    "03n": ScatteredCloudsNight,
    "04n": BrokenCloudsNight,
    "09n": ShowerRainNight,
    "10n": RainNight,
    "11n": ThunderstormNight,
    "13n": SnowNight,
    "50n": MistNight,
};

const WeatherIcon = ({ icon, ...props }) => {
    let Icon = weatherTypes[icon];
    return <Icon {...props} />;
};

export default WeatherIcon;