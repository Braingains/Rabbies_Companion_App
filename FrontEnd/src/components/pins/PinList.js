//maps each pin into a list
import React from 'react';
import Pin from './Pin.js';

const PinList = ({pins}) => {
    if (pins.length === 0){
        return (<p>Loading...</p>)
    }

    const PinsNodes = pins.map((pin, index) => {
        return (
            <li key={index} className="component-item">
            <div className="component">
            <Pin pin={pin} />
            </div>    
            </li>
        )
    })

    return (
        <ul className="component-list">
            {pinsNodes}
        </ul>
    )
}
export default PinList;