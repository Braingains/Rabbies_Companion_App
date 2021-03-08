import React, {useState, useEffect} from "react";

const PinForm = ({pin, onCreate, onUpdate, position}) => {


    const [statePin, setStatePin] = useState(
        {
            name: "",
            categoryType: "",
            lat: position.lat,
            lng: position.lng,
            notes: "",
            user: ""
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
        <input type="text" placeholder="Category" name="categoryType" onChange={handleChange} value={statePin.categoryType} />
        <input type="text" placeholder="Notes" name="notes" onChange={handleChange} value={statePin.notes} />
        <input type="text" placeholder="User" name="user" onChange={handleChange} value={statePin.user} />
        <button type="submit">Save</button>
        </form>
        </>
    )

}

export default PinForm;