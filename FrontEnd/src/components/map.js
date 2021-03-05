import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";


function Map() {
    return  (
        <GoogleMap defaultZoom={10} 
        defaultCenter={{ lat: 55.9533, lng: 3.1883 }}
        />
    );
}

const WrappedMap = withScriptjs()

export default Map;