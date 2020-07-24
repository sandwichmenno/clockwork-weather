import React, {createContext, useContext, useReducer, useState} from 'react';

const StoreContext = createContext();
const initialState = {weatherData: null, weather: null, location: null, range: {start: 0, end: 5}, error: null, unit: "metric"};

/*Process the action and return the right result to the state*/
const reducer = (state, action) => {
    switch (action.type) {
        case 'setWeatherData':
            return {
                ...state,
                weatherData: action.payload,
            };
        case 'setWeather':
            return {
                ...state,
                weather: action.payload,
            };
        case 'setLocation':
            return {
                ...state,
                location: action.payload,
            };
        case 'setUnit':
            return {
                ...state,
                unit: action.payload,
            };
        case 'setRange':
            return {
                ...state,
                range: action.payload,
            };
        case 'setError':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}

/*Component to make the global state available to all its children*/
export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StoreContext.Provider value={{state, dispatch}}>
            {children}
        </StoreContext.Provider>
    )
}

/*Custom hook to return the state and dispatch array from the provider so we don't have to add the context to every component*/
export const useStore = () => useContext(StoreContext);