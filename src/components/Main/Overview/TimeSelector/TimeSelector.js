import React, { useState, useEffect } from "react";
import {useStore} from "../../../../store/store";
import moment from "moment";

import styled from "styled-components";
import {Grid, GridItem} from "../../../UI";
import Format from "../../../Format";
import Navigator from "./Navigator";
import WeatherIcon from "../../../WeatherIcon";

const Day = styled(GridItem)`
  background: ${props => props.theme.secondary};
  text-align: center;
  padding: 1em 0;
  margin: 0;
  cursor: pointer;
  transition: transform .2s, bottom .2s;
  transform: ${props => props.selected ? 'scaleY(1.1)' : 'scaleY(1)'};
  position: relative;
  bottom: ${props => props.selected ? '6px' : '0'};
  
  &:hover { 
    transform: scaleY(1.1);
    bottom: 6px;
  }
`;

const Temp = styled.span`
  font-size: 1.7em;
  display: block;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0.25em 0;
`;

const Date = styled.span`
  font-size: 1em;
  display: block;
  font-weight: 300;
  text-transform: uppercase;
`;

const Icon = styled.div`
  svg {
    width: 25%;
    height: auto;
  }
  
  svg path {
    fill: #ffffff;
  }
`;

const TimeSelector = ({maxElements}) => {
    const {state, dispatch} = useStore();
    const weatherData = state.weatherData;
    const range = state.range;

    /*On component mount and unmount, set the maximum elements visible on one page starting at the begin of the list. */
    useEffect(() => {
        dispatch({type: "setRange", payload: {start: 0, end: maxElements}})
    }, []);

    /*Fetch the selected weather data from the list based on the unix date*/
    const handleDayClick = (date) => {
        let forecast = weatherData.list.find(o => o.dt === date);
        dispatch({type: "setWeather", payload: forecast});
    }

    /*Accept enter key as input */
    const handleKeyDown = (event, date) => {
        if (event.key === 'Enter') {
            handleDayClick(date);
        }
    }

    /*Return all the elements based on the current range*/
    const forecast = weatherData.list.slice(range.start, range.end).map((forecast) =>
        <Day key={forecast.dt}
             role="tab"
             aria-selected={state.weather.dt === forecast.dt}
             selected={state.weather.dt === forecast.dt}
             width={100/maxElements + "%"}
             onClick={() => handleDayClick(forecast.dt)}
             onKeyDown={(event) => handleKeyDown(event, forecast.dt)}
             tabIndex={0}>

            <Icon><WeatherIcon
                icon={forecast.weather[0].icon} /></Icon>

            <Temp><Format
                type="temperature"
                value={forecast.main.temp}
                unit={state.unit} /></Temp>

            <Date>{moment.unix(forecast.dt).format('ddd HH:mm')}</Date>
        </Day>
    );

    return (
        <div>
            <Navigator length={weatherData.list.length} maxElements={maxElements} />

            <Grid role="tablist">
                {forecast}
            </Grid>
        </div>
    )
}

export default TimeSelector;