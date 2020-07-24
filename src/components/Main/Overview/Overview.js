import React from "react";
import Moment from 'react-moment';
import styled from "styled-components";
import {Card, CardContent} from "../../UI";
import TimeSelector from "./TimeSelector";
import SearchBar from "./SearchBar";
import WeatherImage from "./WeatherImage";
import Spinner from "../../UI/Spinner";

const Content = styled(CardContent)`
  height: 100%;
  color: #fff;
  padding: 0;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  
  position: relative;
  z-index: 1;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Information = styled.div`
     padding: 1.2em;
`;

const Date = styled.span`
  font-size: 1.5em;
  display: block;
  font-weight: 300;
  text-transform: uppercase;
`;

const Overview = ({weather, location, handleSearch, error, loading}) => {
    const { dt } = weather;
    const { icon } = weather.weather[0];

    return (
        <Content>
            <Background><WeatherImage icon={icon} /></Background>

            <Information>
                {/* If the API is busy fetching (loading), then show the spinner, else show the searchbar component */}
                { loading ? <Spinner size={50} /> : <SearchBar defaultValue={location} onBlur={handleSearch} error={error} />}

                <Date><Moment unix format="DD MMMM HH:mm">{dt}</Moment></Date>
            </Information>

            <TimeSelector weather={weather} maxElements={5} />
        </Content>
    )
}

export default Overview;