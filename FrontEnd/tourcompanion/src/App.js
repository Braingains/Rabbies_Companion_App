import './App.css';
import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from "leaflet";
// import * as mapData from "./data/markersdata.json";
import Request from "./helpers/request";
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

function App() {

  const [pins, setPins] = useState([]);

    useEffect(() => {
        getAllData();
    }, [pins]);

    const getAllData = () => {
        
      console.log("get all data")

        const request = new Request();
        request.get('/api/pins')
        .then((data) => {
            setPins(data);
        })
        .then(pins.map(pin => {

          <Marker key={pin.id} position={
               [pin.coordinates[0].lat, pin.coordinates[0].lng]
          }
          icon={attractionIcon}
          >
            <Popup>
              <h2>{pin.name}</h2>
              <p>{pin.category}</p>
              <p>{pin.notes}</p>
              <p>added by: {pin.user}</p>
            </Popup>
          </Marker>

        })
      )
    }

  return (
    
  <MapContainer center={[56.355233, -4.07513]} zoom={8}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  </MapContainer>
  
  )
}

export default App;
