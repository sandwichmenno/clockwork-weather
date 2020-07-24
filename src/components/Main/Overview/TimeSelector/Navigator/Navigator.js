import React, { useState, useEffect } from "react";
import {useStore} from "../../../../../store/store";

import styled from "styled-components";
import {Grid, GridItem} from "../../../../UI";

const List = styled(Grid)`
  margin: 0.7em 0;
`;

const Button = styled.span`
  width: 56px;
  height: 12px;
  display: inline-block;
  background: ${props => props.active ? props.theme.primary : props.theme.secondary};
  margin: 1em;
  cursor: pointer;
  
  &:hover, &:focus {
    background: rgba(255,255,255,0.6);
  }
  
  @media (min-width: 767px) {
    width: 46px;
    height: 8px;
  }
`;

const Navigator = ({length, maxElements}) => {
    const {state, dispatch} = useStore();
    const [selected, setSelected] = useState(0);

    /*Calculate and set the new range based on the clicked navigation button*/
    const handleNavigation = (startIndex) => {
        let start = startIndex*maxElements;

        let newEnd = start+maxElements;
        let end = newEnd >= length-1 ? length-1 : newEnd;

        let range = {start: start, end: end};

        dispatch({type: 'setRange', payload: range})
        setSelected(startIndex);
    }

    /*Accept enter key as input */
    const handleKeyDown = (event, value) => {
        if (event.key === 'Enter') {
            handleNavigation(value);
        }
    }

    /*Generate the navigation buttons based on the maximum visible elements per page and the length of the weatherdata array*/
    const buttons = () => [...Array(Math.floor(length/maxElements))].map((e, i) => <Button key={i} onKeyDown={(event) => handleKeyDown(event, i)} onClick={() => handleNavigation(i)} aria-label={"Go to page " + i} active={i === selected} aria-current={i === selected} tabIndex={0} />)

    return (
        <List role="navigation" aria-label="Days navigation">
            { buttons() }
        </List>
    )
}

export default Navigator;