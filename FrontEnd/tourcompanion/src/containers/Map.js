import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon, L } from "leaflet";
import Request from "../helpers/request";

const photoIcon = new Icon({
  iconUrl: '/camera.svg',
  iconSize: [30, 30]
});

const toiletIcon = new Icon({
  iconUrl: '/toilet.svg',
  iconSize: [30, 30]
});

const attractionIcon = new Icon({
  iconUrl: '/attraction.svg',
  iconSize: [30, 30]
});

function Map() {

  const [pins, setPins] = useState([]);

    useEffect(() => {
        getAllData();
    }, []);

    const getAllData = () => {
        
      console.log("get all data")

        const request = new Request();
        request.get('/api/pins')
        .then((data) => {
            setPins(data);
        })
    }

  return (
    
  <MapContainer center={[56.355233, -4.07513]} zoom={8}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {pins.map((pin) => {
          return <Marker key={pin.id} position={
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
        })}
  </MapContainer>
  )
}

export default Map;