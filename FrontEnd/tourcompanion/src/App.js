import './App.css';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from "leaflet";
import * as mapData from "./data/markersdata.json";
// import 'leaflet/dist/leaflet.css';


function App() {




  return (
    <div className="App">
      <h1>Fuck google maps</h1>
      <MapContainer center={[56.355233, -4.07513]} zoom={8}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
      attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a>
       contributors" 
       />

       {mapData.pins.map(pin => (
       <Marker key={pin.id} position={[
         pin.coordinates[0],
         pin.coordinates[1]
       ]}
       />
       ))}
</MapContainer>      
      </div>
  );
}

export default App;
