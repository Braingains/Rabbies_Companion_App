import React from 'react';
import {GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import PinForm from '../components/pins/PinForm';
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

const options = {
  // styles:  
  //custom map designs at snazzymaps - save in mapStyles.js
  disableDefaultUI: true,
  zoomControl: true,
} 

const MapContainer = () => {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_API_KEY,
        libraries,
      });
      const [markers, setMarkers] = React.useState([]);
      const [selected, setSelected] = React.useState(null);

      const onMapClick = React.useCallback((event) => {
          // the function only changes if the value in [] changes, so does not trigger rerender 
          
        setMarkers(current => [...current, {
        //spreads in the current markers and adds in the new one
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date()
        },
      ]);
      }, []);


      const mapRef = React.useRef();
      const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
      }, []);


    
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading...";

      
      return (
        <GoogleMap 
        mapContainerStyle={mapContainerStyle} 
        zoom={8} 
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad ={onMapLoad}
        >
          {markers.map((marker) => (
          <Marker 
          key={marker.time.toISOString()}
          /* maps markers using the Marker import from the library, using time of click as key */
          position={{lat: marker.lat, lng: marker.lng}} 
          icon={{
            url: './camera.svg',
            scaledSize: new window.google.maps.Size(30,30),
            origin: new window.google.maps.Point(0,0),
            anchor: new window.google.maps.Point(15,15)
           }}
           onClick={() => {
             setSelected(marker);
           }}
          
          />))}

          {selected ? (
          <InfoWindow position= {{lat: selected.lat, lng: selected.lng}} 
          onCloseClick={() => {
            setSelected(null);
            //sets selected back to null, so we can toggle it on or off
          }}>
            <div>
              <PinForm/>
            </div>
          </InfoWindow>) : null}
          </GoogleMap> 
      )
}

export default MapContainer;