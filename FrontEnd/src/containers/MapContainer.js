import React, {useState, useEffect} from 'react';
import {GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
// import LocationMarker from "../components/LocationMarker"
import Request from '../helpers/request';
// import Pin from "../components/pins/Pin"

const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

//centers on Edinburgh by default
const center = {
  lat: 55.9533,
  lng: -3.1883
}

// const initialPins = 

const options = {
  // styles:  
  //custom map designs at snazzymaps - save in mapStyles.js
  disableDefaultUI: true,
  zoomControl: true,
} 

const MapContainer = () => {

//   const [markers, setMarkers] = pins.map((pin, index) => {
//     return (
//         <li key={index} className="component-item">
//         <div className="component">
//         <Pin pin={pin} />
//         </div>    
//         </li>
//     )
// })


    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_API_KEY
      });

      const [markers, setMarkers] = React.useState([]);
      const [pins, setPins] = useState([]);

      useEffect(() => {
        getAllData();
    }, []);

    const getAllData = () => {
        
        console.log("Loading...");

        const request = new Request();
        request.get('/api/pins')
        .then((data) => {
            setPins(console.log(data));

        })

    }

      if (loadError) return "Error loading maps"
      if (!isLoaded) return "Loading..."
      
      return (
        <GoogleMap 
        
        mapContainerStyle={mapContainerStyle} 
        zoom={8} 
        center={center}
        options={options}
        onClick={(event) => {
          
        setMarkers(current => [...current, {
        // spreads in the current markers and adds in the new one
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date()
        },
      ]);
      }}
        >
          
          {markers.map((marker) => (
          <Marker 
          key={marker.time.toISOString()}
          // maps markers using the Marker import from the library, using time of click as key
          position={{lat: marker.lat, lng: marker.lng}} 
          
          />))}
          </GoogleMap> 
      )
}

export default MapContainer;