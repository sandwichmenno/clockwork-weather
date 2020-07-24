import styled  from 'styled-components';

/*Basic stateless UI components that are widely used throughout the application*/
export const Wrapper = styled.div`
     width: 100%;
     max-width: 100%;
     font-size: 12px;
     
     @media (min-width: 992px) { 
      max-width: 90%;
     font-size: 14px;
     }
     
     @media (min-width: 1200px) {
      max-width: 75%;
     font-size: 14px;
     }
  `

export const CardContainer = styled.div`
     display: flex;
     flex-direction: column;
     height: 100%;
     
     @media (min-width: 767px) {
      flex-direction: row;
     }
  `

export const Card = styled.div`
     flex: ${props => props.sm ? '0 0 ' + props.sm : 1};
     
     @media (min-width: 767px) {
        flex: ${props => props.lg ? '0 0 ' + props.lg : 1};
     }
  `

export const CardContent = styled.div`
     box-sizing: border-box;
     margin: 0;
     padding: 1.2em;
  `

export const Grid = styled.div`
     display: flex;
     flex-wrap: wrap;
     flex-direction: ${props => props.direction ? props.direction : 'row'};
  `

export const GridItem = styled.div`
     flex: ${props => props.width ? '0 0 ' + props.width : 1};
     margin: 1em 0;
  `