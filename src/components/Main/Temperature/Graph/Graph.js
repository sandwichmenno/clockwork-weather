import React, { useState } from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

const Graph = ({data}) => (
    <Sparklines data={data} min={0}>
        <SparklinesLine color="white" />
        <SparklinesSpots style={{ fill: "#ffffff" }} />
    </Sparklines>
)

export default Graph;