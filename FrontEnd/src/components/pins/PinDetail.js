import React from "react";
import Pin from "./Pin";

const PinDetail = ({pin, onDelete}) => {

    if (!pin){
        return <p>Loading...</p>
    }

    const handleDelete = () => {
        onDelete(pin.id)
    }

    return (
        <div className = "component">
            <Pin pin = {pin}/>
            <button onClick={handleDelete}>Delete {pin.name}</button>
        </div>
    )
}

export default PinDetail;