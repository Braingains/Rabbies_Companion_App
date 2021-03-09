
import React, { useState, useEffect } from 'react';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from "leaflet";
import * as mapData from "./data/markersdata.json";
import Request from "./helpers/request";
// import 'leaflet/dist/leaflet.css';


function App() {
  // const [activePin, setActivePin] = useState(null);
  // const position = [51.505, -0.09]


  return (
    <MapContainer center={[56.355233, -4.07513]} zoom={8}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
     {/* <PinsList /> */}
  </MapContainer>
  )
  
}

export default App;
