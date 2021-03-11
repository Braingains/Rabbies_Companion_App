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
            window.location = '/pins/'
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
        zoom={8.2}
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
                    url: pin.category === "Attraction" ? "https://www.flaticon.com/svg/vstatic/svg/1021/1021360.svg?token=exp=1615481878~hmac=caae2f0f2fc749a60ffbf8845093ef35" :
                    (pin.category === "Toilet" ? "https://www.flaticon.com/svg/vstatic/svg/4231/4231239.svg?token=exp=1615481800~hmac=3db1100b358ca977c9de1930129f1699": 
                    (pin.category === "Photo Op" ? "https://www.flaticon.com/svg/vstatic/svg/2972/2972198.svg?token=exp=1615481659~hmac=e96ce1ba8a9f2f739f8d566e7e2c1ddf" :
                    (pin.category === "Food" ? "https://www.flaticon.com/svg/vstatic/svg/4223/4223219.svg?token=exp=1615481823~hmac=0dcb7961fb550c26c38386b31f9da7e2" :
                    (pin.category === "Parking" ? "https://www.flaticon.com/svg/vstatic/svg/4252/4252368.svg?token=exp=1615481859~hmac=311d5b7240f735ea41a2d7e50eeb823f" : "https://www.flaticon.com/svg/vstatic/svg/673/673434.svg?token=exp=1615481931~hmac=29978aa08f6a1c26b1540c3618c61569"))))
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