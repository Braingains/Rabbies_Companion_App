import React, {useState, useEffect} from "react";

const MarkerForm = ({pin, onCreate, onUpdate}) => {


    const [statePin, setStatePin] = useState(
        {
            name: "",
            category: "",
            notes: "",
            user: "",
            lat: 0.0,
            lng: 0.0,
        }
    )

    let heading = "";

    if (!pin){
        heading = "Create Pin"
    } else {
        heading = "Edit " + pin.name;
    }

    useEffect(() => {
        if(pin){
            let copiedPin = {...pin}
            setStatePin(copiedPin)
        }
    }, [pin])

    const handleChange = (evt) => {
        let propertyName = evt.target.name;
        let copiedPin = {...statePin}
        copiedPin[propertyName] = evt.target.value;
        setStatePin(copiedPin)
    }

    const handleSubmit = function(event){
        event.preventDefault();
        if(statePin.id){  
            onUpdate(statePin)
          } else {
            onCreate(statePin);
          }
    }
        

    
    return (
        <>
        <h3>{heading}</h3>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" onChange={handleChange} value={statePin.name} />
        <input type="text" placeholder="Category" name="category" onChange={handleChange} value={statePin.category} />
        <input type="text" placeholder="Notes" name="notes" onChange={handleChange} value={statePin.notes} />
        <input type="text" placeholder="User" name="user" onChange={handleChange} value={statePin.user} />
        <input type="decimal" placeholder="Latitude" name="lat" onChange={handleChange} value={statePin.lat}/>
        <input type="decimal" placeholder="Longitude" name="lng" onChange={handleChange} value={statePin.lng}/>
        <button type="submit">Save</button>
        </form>
        </>
    )

}

export default MarkerForm;