import { getAllByAltText } from '@testing-library/dom';
import {Route, Switch} from 'react-router-dom';
import PinList from "../components/pins/PinList";
import PinDetail from "../components/pins/PinDetail";
import React, { useState, useEffect } from 'react';
import Request from '../helpers/request';

const PinContainer = () => {

    const [pins, setPins] = useState([]);

    useEffect(() => {
        getAllData();
    }, [pins]);

    const getAllData = () => {
        console.log("Loading...");
        const request = new Request();
        const pinPromise = request.get("/pins")

        // Promise.all might need later
    } 

    const findByCategoryType = (categoryType) => {
        console.log(categoryType, pins);
        return pins.find((pin) => {
            return pin.categoryType === categoryType;
        });
      }
    
    const handleDelete = (id) =>  {
        const request = new Request();
          const url = "/pins/" + id
          request.delete(url)
            .then(() => window.location = "/pins")
        }
    
    // const handlePost = (pin) => {
    //     const request = new Request();
    //     request.post("/pins", pin)
    //        .then(() => window.location = '/pins')
    //   }
    
    // const handleUpdate = (pin) => {
    //     const request = new Request();
    //     request.patch('/pins/' + pin.id, pin).then(() => {
    //         window.location = '/pins/' + pin.id
    //     })
    //   }

    if (!{pins}) {
        return null
    }

    return (

        <>
      
      <Switch>


      <Route exact path="/pins/categoryType" render={(props) =>{
        const categoryType = props.match.params.categoryType;
        const pin = findByCategoryType(categoryType);
        return <PinDetail pin={pin}
        onDelete={handleDelete}
          
        />
      }}/>

        <Route render={() => {
        return <PinList pins={pins}/>
      }} />

      </Switch>
     
      </>
      

    )
}

export default PinContainer;