import React from "react";

const Format = ({value, type, unit}) => {
    /*Get the unit symbol based on the type and the imperial/metric system*/
    const unitType = () => {
        switch(type) {
            case "temperature":
                if(unit === 'imperial') {
                    return '°F';
                } else {
                    return '°C';
                }

            case "speed":
                if(unit === 'imperial') {
                    return 'mph';
                } else {
                    return 'm/s';
                }
        }
    }

    return (
        <React.Fragment>{Math.round(value)}{unitType()}</React.Fragment>
    )
}

export default Format;