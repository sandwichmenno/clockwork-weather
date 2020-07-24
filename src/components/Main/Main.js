import React, { useState, useEffect } from "react";
import {useStore} from "../../store/store";
import {useGeolocation, FetchWeather} from "../../api";

import {CardContainer, Card, Wrapper} from "../UI";
import Temperature from "./Temperature";
import Details from "./Details";
import Overview from "./Overview";
import Preloader from "../Preloader";

const Main = () => {
    const {state, dispatch} = useStore();
    const coordinates = useGeolocation(dispatch); //Fetch the current latitude and longitude coordinates of the user
    const [loading, setLoading] = useState(true);

    /*Check if the the coordinates have changed, if so let the app know that the location has changed*/
    useEffect(() => {
        if(coordinates) {
            locationChanged(coordinates);
        }
    }, [coordinates]);

    /*The location has changed, so now we have to fetch the weather forecast for the new location*/
    const locationChanged = (location) => {
        setLoading(true);
        dispatch({type: "setError", payload: null});

        FetchWeather(location, state.unit, dispatch).then(weatherData => {
            /*If the request was succesful, save the results to the global state. If not, then add the error to the global state and keep the last response*/
            if(weatherData.cod === '200') {
                dispatch({type: "setWeatherData", payload: weatherData}); //The full response
                dispatch({type: "setWeather", payload: weatherData.list[0]}); //First forecast out of the response
                dispatch({type: "setLocation", payload: weatherData.city.name}); //Name of the location that the API returned
            } else {
                dispatch({type: "setError", payload: weatherData.message});
            }

            setLoading(false);
        }).catch(error => {
            console.log("error " + error.message);
        });
    }

    /*Get the value of the input and fire the weatherChanged event to fetch the weather data for the new location*/
    const handleSearch = (value) => {
        const location = {type: 'city', city: value};

        if(location.city === state.location) { return; }

        locationChanged(location);
    }

    /*Get the weather for a 12 hour period, starting on the selected day*/
    const getWeatherPeriod = () => {
        let date = state.weather.dt_txt.split(' ')[0];
        let index = state.weatherData.list.findIndex((forecast) => forecast.dt_txt.indexOf(date));
        let end = index+5 > state.weatherData.length-1 ? state.weatherData.length-1 : index+5;

        return state.weatherData.list.slice(index, end);
    }

    /*If the coordinates and weather are not fetched yet, then return a loading screen*/
    if(!coordinates || !state.weatherData || !state.weather) {
        return <Preloader size={50} />;
    }

    return (
        <Wrapper>
            <CardContainer>
                <Card>
                    <Overview weather={state.weather} location={state.location} handleSearch={handleSearch} error={state.error} loading={loading} />
                </Card>

                <Card sm={"0"} lg={"25%"}>
                    <Temperature weather={state.weather} unit={state.unit} weatherPeriod={getWeatherPeriod()} />
                    <Details weather={state.weather} />
                </Card>
            </CardContainer>
        </Wrapper>
    )
}

export default Main;