import './App.css';
import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from "leaflet";
import * as mapData from "./data/markersdata.json";
// import 'leaflet/dist/leaflet.css';

const photoIcon = new Icon({
  iconUrl: '/camera.svg',
  iconSize: [35, 35]
});

const toiletIcon = new Icon({
  iconUrl: '/toilet.svg',
  iconSize: [35, 35]
});

const attractionIcon = new Icon({
  iconUrl: '/attraction.svg',
  iconSize: [35, 35]
});

// write a method containing an if statement to change icon by category, and reference this as the icon in the first map element

  // const pickIcon = (pin, icon) => {
  //   if (pin.category == "Attraction") 
  //     icon = attractionIcon;
  //    else if (pin.category == "Photo") 
  //     icon = photoIcon;
  //   else (pin.category == "Toilet") 
  //     icon = toiletIcon;
  // }

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
         pin.coordinates.lat,
         pin.coordinates.lng
       ]}
       icon={attractionIcon}
       >
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
