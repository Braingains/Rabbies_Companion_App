import './App.css';
import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from "leaflet";
import * as mapData from "./data/markersdata.json";
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
    {mapData.pins.map(pin => (
    <Marker key={pin.id} position={[
         pin.coordinates[0],
         pin.coordinates[1]
       ]}>
      <Popup>
        <h2>{pin.name}</h2>
        <p>{pin.category}</p>
        <p>{pin.notes}</p>
        <p>added by: {pin.user}</p>
      </Popup>
    </Marker>
    ))}
  </MapContainer>
)
  
}

export default App;
