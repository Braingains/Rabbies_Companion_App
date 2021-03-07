import React from "react";
import Pin from "./Pin";
import {Link} from "react-router-dom";

const PinDetail = ({pin, onDelete, onUpdate}) => {

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
            <Pin pin = {pin}/>
            <form onSubmit={handleSubmit}></form>
            <button onClick={handleDelete}>Delete {pin.name}</button>
            <Link to={editUrl}><button type="button">Edit {pin.name}</button></Link>
        </div>
    )
}

export default PinDetail;