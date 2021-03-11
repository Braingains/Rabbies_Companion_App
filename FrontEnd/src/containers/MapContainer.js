import React, {useState, useEffect, useCallback} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from "@react-google-maps/api";
import MarkerForm from "../components/MarkerForm";
import MarkerDetail from "../components/MarkerDetail";
import Request from "../helpers/request";

const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
}
const center = {
    lat: 56.604734,
    lng: -4.265666
}
const options = {
    disableDefaultUI: true,
    zoomControl: true,
}

const MapContainer = () => {

    useEffect(() => {
        getAllData();
    }, []);

    const getAllData = () => {

        const request = new Request();
        request.get('/api/pins')
        .then((data) => {
            setPins(data);
        })
    }

    const getPinByID = (id) => {
        return pins.find((pin) => {
            return pin.id === parseInt(id);
        });
    }


    const handleDelete = (id) =>  {
        const request = new Request();
          const url = "/api/pins/" + id
          request.delete(url)
            .then(() => window.location = "/pins")
    }
    
    const handlePost = (pin) => {
        const request = new Request();
        request.post("/api/pins", pin)
           .then(() => window.location = '/pins')
      }
    
    const handleUpdate = (pin) => {
        const request = new Request();
        request.patch('/api/pins/' + pin.id, pin).then(() => {
            window.location = '/pins/' + pin.id
        })
    }


    // const setMarkerIcon = (pin) => {
    //     if pin.category
    // }


    // MAP STUFF
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })
    const [pins, setPins] = useState([]);
    const [selected, setSelected] = useState(null);

    const onMapClick = useCallback((event) => {
        setPins(current => [...current, {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            time: new Date(),
        }]);

    }, [])


    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";


    return (
        <Router>
        <>

        <Switch>
            <Route exact path = "/pins/new" render={() =>
            {return <MarkerForm onCreate={handlePost}/>
            }}/>
        
            <Route exact path="/pins/:id/edit" render={(props) =>{
                const id = props.match.params.id;
                const pin = getPinByID(id);
                return <MarkerForm pin={pin}
                onUpdate={handleUpdate}
                />
            }}/>

            <Route exact path="/pins/:id" render={(props) => {
                const id = props.match.params.id;
                const pin = getPinByID(id);
                return <MarkerDetail pin={pin}
                onDelete={handleDelete}
                onUpdate={handleUpdate} 
                />
            }} />
        </Switch>

        <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={7}
        center={center}
        options={options}
        onClick={onMapClick}
        >
            {pins.map((pin) => {
                return <Marker
                key={pin.id}
                position={{lat: pin.lat, lng: pin.lng}}
                onClick={() => {
                    setSelected(pins[pins.indexOf(pin)]);
                    console.log(pin);
                }}
                icon={{
                    scaledSize: new window.google.maps.Size(25, 25),
                    url: pin.category === "Attraction" ? "http://127.0.0.1:5500/src/castle.svg" :
                    (pin.category === "Toilet" ? "http://127.0.0.1:5500/src/loo.svg": 
                    (pin.category === "Photo Op" ? "http://127.0.0.1:5500/src/camera.svg" :
                    (pin.category === "Food" ? "http://127.0.0.1:5500/src/food1.svg" :
                    (pin.category === "Parking" ? "http://127.0.0.1:5500/src/Parkingq.svg" : "http://127.0.0.1:5500/src/marker.svg"))))
                  }}/>
                                
            })}

            {selected ? (
                <InfoWindow
                    position={{lat: selected.lat, lng: selected.lng}}
                    onCloseClick={() => {
                    setSelected(null)
                }}
                >

                    {/* <MarkerForm pin={selected}
                    onUpdate={handleUpdate}
                    /> */}
                    <MarkerDetail
                        pin={selected}
                        onDelete={handleDelete}
                        onUpdate={handleUpdate} 
                    />
                </InfoWindow>
            ) : null}
        </GoogleMap>

        </>
        </Router>
    )
}

export default MapContainer;