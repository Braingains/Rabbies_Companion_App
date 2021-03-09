import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
// import PinsList from "../components/PinsList";




const MapContainer = () => {


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

export default MapContainer;