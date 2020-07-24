import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {Card, CardContent, Grid, GridItem} from "../../UI";
import {useStore} from "../../../store/store";
import Format from "../../Format";
import WeatherIcon from "../../WeatherIcon";
import Graph from "./Graph";

const Content = styled(CardContent)`
  background: ${props => props.theme.primary};
  color: #fff;
`;

const Title = styled(GridItem)`
  font-size: 3em;
  margin: 0;
`;

const Weathertype = styled.span`
  font-size: 1.5em;
  display: block;
  font-weight: 300;
`;

const Icon = styled(GridItem)`
  text-align: right;
  margin: 0;
  height: 115px;
 
  svg {
    height: 100%;
    width: auto;
  }
  
  svg path {
    fill: #ffffff;
  }
`;

const GraphWrapper = styled(GridItem)`
  flex: 0 0 100%;
`;

const Temperature = ({weather, unit, weatherPeriod}) => {
    const { temp } = weather.main;
    const { description, icon } = weather.weather[0];

    /*Generate a new array with the temperature data provided by the weatherPeriod function*/
    const temperatureData = () => weatherPeriod.map((e) => e.main.temp)

    return (
        <Content>
            <Grid>
                <GridItem>
                    <div>
                        <Title><Format type="temperature" value={temp} unit={unit} /></Title>
                        <Weathertype>{description}</Weathertype>
                    </div>
                </GridItem>

                <GridItem>
                    <Icon><WeatherIcon icon={icon} /></Icon>
                </GridItem>

                <GraphWrapper>
                    <p>Temperature over the next 12 hours</p>
                    <Graph data={temperatureData()}/>
                </GraphWrapper>
            </Grid>
        </Content>
    )
}

export default Temperature;