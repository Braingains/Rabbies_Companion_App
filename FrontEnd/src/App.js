import React from 'react';
import {GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { formatRelative } from "date-fns";

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

const options = {
  // styles:  
  //custom map designs at snazzymaps - save in mapStyles.js
  disableDefaultUI: true,
  zoomControl: true,
} 

export default function App() {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);

  if (loadError) return "Error loading maps"
  if (!isLoaded) return "Loading..."

  return (
  
  <div>
    <h1>
    <span role="img" aria-label="Saltire">🏴󠁧󠁢󠁳󠁣󠁴󠁿 </span>
    Rabbies
    <span role="img" aria-label="bus"> 🚎</span>
    </h1>

    <GoogleMap 
    mapContainerStyle={mapContainerStyle} 
    zoom={8} 
    center={center}
    options={options}
    onClick={(event) => {
    setMarkers(current => [...current, {
    //spreads in the current markers and adds in the new one
    lat: event.latLng.lat(),
    lng: event.latLng.lng(),
    time: new Date()
    }])

  }}
    ></GoogleMap> 
  </div>

  );
}



