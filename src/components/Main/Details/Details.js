import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {Card, CardContent, Grid, GridItem} from "../../UI";
import Format from "../../Format";

const Content = styled(CardContent)`
  background: ${props => props.theme.primary};
  color: #fff;
  margin-bottom: 0;
`;

const Title = styled.span`
  font-size: 1em;
  display: block;
  font-weight: 300;
`;

const Number = styled.span`
  font-size: 1.8em;
  display: block;
  font-weight: 400;
`;

const Details = ({weather, unit}) => {
    const { humidity } = weather.main;
    const { speed, deg } = weather.wind;
    const { clouds } = weather;

    /*Convert the wind direction to cardinal direction*/
    const degreesToCompass = (degrees) => {
        let val = Math.floor((degrees / 45));
        let arr = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
        return arr[(val % 8)];
    }

    return (
        <Content>
            <Grid>
                <GridItem width="50%">
                    <Number>{humidity}%</Number>
                    <Title>Humidity</Title>
                </GridItem>
                <GridItem width="50%">
                    <Number>{clouds.all}%</Number>
                    <Title>Cloudiness</Title>
                </GridItem>
                <GridItem width="50%">
                    <Number><Format type="speed" unit={unit} value={speed} /></Number>
                    <Title>Wind speed</Title>
                </GridItem>
                <GridItem width="50%">
                    <Number>{degreesToCompass(deg)}</Number>
                    <Title>Wind direction</Title>
                </GridItem>
            </Grid>
        </Content>
    )
}

export default Details;