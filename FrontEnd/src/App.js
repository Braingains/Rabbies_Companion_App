import React from 'react';
import {GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
// import { formatRelative } from "date-fns";

// import "@reach/combobox/styles.css"

const libraries = ["places"];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

//centers on Edinburgh by default
const center = {
  lat: 55.9533,
  lng: -3.1883
}

export default function App() {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading maps"
  if (!isLoaded) return "Loading..."

  return (
  
  <div>
    <GoogleMap mapContainerStyle={mapContainerStyle} 
    zoom={8} 
    center={center}
    options={options}
    ></GoogleMap> 
  </div>

  );
}



