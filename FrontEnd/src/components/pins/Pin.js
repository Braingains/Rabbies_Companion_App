import React from "react";
import {Link} from "react-router-dom";

const Pin = ({pin}) => {

    if (!pin) {
        return <p>Loading...</p>
    }

    const url = "/pins/" + pin.id;

    return (
        <>
        <Link to = {url} className="name">
            {pin.name}
        </Link>
        <p>Category: {pin.attraction}</p>
        <p>Coordinates: {pin.lat}, {pin.lng}</p>
        <p>Notes: {pin.notes}</p>
        <p>User: {pin.user}</p>
        </>
    )
}

export default Pin;