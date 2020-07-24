import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 3.5em;
  display: block;
  font-weight: 500;
  text-transform: uppercase;
  color: ${props => props.error ? '#f44336' : '#ffffff'};
  background: transparent;
  border: ${props => props.error ? '1px solid #f44336' : '1px solid transparent'};
  position:relative;
  outline: 0;
  
  &:hover, :focus {
    border: 1px solid #ffffff;
    opacity: 0.5;
  }
`;

const ErrorText = styled.p`
    color: #f44336;
    margin: 0;
    font-size: 0.75rem;
    margin-top: 3px;
    text-align: left;
    font-weight: 400;
    line-height: 1.66;
    letter-spacing: 0.03333em;
`;

const SearchBar = ({defaultValue, onBlur, error}) => {
    /*Accept enter key as input*/
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onBlur(event.target.value);
        }
    }

    return (
        <div>
            <Input type="text"
                   aria-label="Location"
                   onBlur={(event) => onBlur(event.target.value)}
                   onKeyDown={(event) => handleKeyDown(event)}
                   defaultValue={defaultValue}
                   error={error}/>
            {error ? <ErrorText>{error}</ErrorText> : null}
        </div>
    )

}

export default SearchBar;