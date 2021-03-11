import React, {useEffect} from "react";
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


    // MAP STUFF
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })
    const [pins, setPins] = React.useState([]);
    const [selected, setSelected] = React.useState(null);

    const onMapClick = React.useCallback((event) => {
        setPins(current => [...current, {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            time: new Date(),
        }])
    }, [])

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    })

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
        onLoad={onMapLoad}
        >
            {pins.map((pin) => {
                return <Marker
                key={pin.id}
                position={{lat: pin.lat, lng: pin.lng}}
                onClick={() => {
                    setSelected(pin);
                }}>
                                {selected ? (
                <InfoWindow
                    position={{lat: selected.lat, lng: selected.lng}}
                    onCloseClick={() => {
                    setSelected(null)
                }}
                >
                    <MarkerDetail
                        pin={pin}
                        onDelete={handleDelete}
                        onUpdate={handleUpdate} 
                    />
                </InfoWindow>
            ) : null}
                </Marker>
            })}

    
        </GoogleMap>


        </>
        </Router>
    )
}

export default MapContainer;