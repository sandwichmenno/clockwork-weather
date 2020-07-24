import React from "react";
import styled  from 'styled-components';
import Spinner from "../UI/Spinner";

const Wrapper = styled.div`
  display: inline-block;
  position: absolute;
  width: 64px;
  height: 64px;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 99;
`;

const Preloader = ({ size }) => {
    return (
        <Wrapper>
            <Spinner size={size}/>
        </Wrapper>
    )
}

export default Preloader;