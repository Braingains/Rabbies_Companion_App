import React, {useEffect, useState} from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Request from "../helpers/request"

const PinsList = () => {

 const [pins, setPins] = useState([]);

    useEffect(() => {
        getAllData();
    }, []);

    const getAllData = () => {
        
        console.log("Loading...");

        const request = new Request();
        request.get('/api/pins')
        .then((data) => {
            setPins(data);
        })
    }


    let pinsList = pins.map((pin) => {
        return <Marker key={pin.id} position={[pin.coordinates.lat, pin.coordinates.lon]}>
          <Popup>
            <h2>{pin.name}</h2>
            <p>{pin.category}</p>
            <p>{pin.notes}</p>
            <p>added by: {pin.user}</p>
          </Popup>
        </Marker>
    })

    return(
        <>
        <PinsList />
        </>
    )
}

export default PinsList