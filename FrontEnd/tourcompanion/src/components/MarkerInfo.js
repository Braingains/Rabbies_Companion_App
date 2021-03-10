import React from "react";
import {Link} from "react-router-dom";

const MarkerInfo = ({pin}) => {

    if (!pin) {
        return <p>Loading...</p>
    }

    const url = "/pins/" + pin.id;

    return (
        <>
        <Link to = {url} className="name">
            {pin.name}
        </Link>
        <p>Category: {pin.category}</p>
        <p>Notes: {pin.notes}</p>
        <p>User: {pin.user}</p>
        </>
    )
}

export default MarkerInfo;