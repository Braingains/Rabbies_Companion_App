import React from "react";
import MarkerInfo from "./MarkerInfo";
import {Link} from "react-router-dom";

const MarkerDetail = ({pin, onDelete, onUpdate}) => {

    if (!pin){
        return <p>Loading...</p>
    }

    const handleDelete = () => {
        onDelete(pin.id)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onUpdate(pin)
    }

    const editUrl = "/pins/" + pin.id + "/edit"

    return (
        <div className = "component">
            <MarkerInfo pin = {pin}/>
            <form onSubmit={handleSubmit}></form>
            <button onClick={handleDelete}>Delete {pin.name}</button>
            <Link to={editUrl}><button type="button">Edit {pin.name}</button></Link>
        </div>
    )
}

export default MarkerDetail;