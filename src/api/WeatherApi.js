import React, { useState, useEffect } from "react";
import axios from 'axios';

/*Function to get the current geolocation of the user using the browser's built-in geolocation*/
export const useGeolocation = (dispatch) => {
    const [location, setLocation] = useState();

    useEffect(() => {
        /*Check if the browser supports Geolocation*/
        if (!navigator.geolocation) {
            dispatch({type: "setError", payload: 'Geolocation is not supported.'});
            return;
        }

        /*If user grants permission, then get their location*/
        const permissionGranted = position => {
            const { latitude, longitude } = position.coords;

            setLocation({
                type: 'coordinates',
                latitude,
                longitude
            });
        };

        /*If user denies permission, then return an error*/
        const permissionDenied = error => {
            setLocation({
                type: 'city',
                city: 'Amsterdam'
            });
        };

        /*show the permission dialog*/
        navigator.geolocation.getCurrentPosition(permissionGranted, permissionDenied);
    }, []);

    //Return the location state
    return location;
};

/*Function to fetch the weather at an location using the OpenWeatherMap API*/
export const FetchWeather = (location, unit) => {
    const API_KEY = 'ee95f4ab36df2399c08048bb4b91dff0';
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

    /*Add latitude and longitude parameters if the location given contains coordinates, else search for the weather using the city name*/
    const queryParams = (location.type === "coordinates") ? `lat=${location.latitude}&lon=${location.longitude}` : `q=${location.city.trim()}`;

    /*Build the request url*/
    const url = `${BASE_URL}?${queryParams}&units=${unit}&appid=${API_KEY}`;

    /*Do a GET request to the OpenWeatherMap API and return the response*/
    return axios.get(url,{timeout: 5000}).then(response => {
        return response.data;
    }).catch(error => {
        return error.response.data;
    })
}
