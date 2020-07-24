import React from "react";
import styled, { keyframes } from 'styled-components';

const motion = props => keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  margin: 6px;
  border: 6px solid ${props => props.theme.primary};
  border-radius: 50%;
  animation: ${props => motion(props)} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${props => props.theme.primary} transparent transparent transparent;
  :nth-child(1) {
    animation-delay: -0.45s;
  }
  :nth-child(2) {
    animation-delay: -0.3s;
  }
  :nth-child(3) {
    animation-delay: -0.15s;
  }
`;

const Spinner = ({ size }) => {
    return <LoadingIcon size={size}/>
}

export default Spinner;