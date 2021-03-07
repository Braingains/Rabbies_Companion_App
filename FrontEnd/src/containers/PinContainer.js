// import { getAllByAltText } from '@testing-library/dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PinList from "../components/pins/PinList";
import PinDetail from "../components/pins/PinDetail";
import React, { useState, useEffect } from 'react';
import Request from '../helpers/request';
import PinForm from "../components/pins/PinForm"

const PinContainer = () => {

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

    const findByCategoryType = (categoryType) => {
        console.log(categoryType, pins);
        return pins.find((pin) => {
            return pin.categoryType === categoryType;
        });
    }
    
    const handleDelete = (categoryType) =>  {
        const request = new Request();
          const url = "/pins/" + categoryType
          request.delete(url)
            .then(() => window.location = "/pins")
    }
    
    const handlePost = (pin) => {
        const request = new Request();
        request.post("/pins", pin)
           .then(() => window.location = '/pins')
      }
    
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
        <Router>
        <>
        <Switch>
            <Route exact path = "/pins/new" render={() =>
            {return <PinForm onCreate={handlePost}/>
            }}/>
        
            <Route exact path="/pins/categoryType" render={(props) =>{
                const categoryType = props.match.params.categoryType;
                const pin = findByCategoryType(categoryType);
                return <PinDetail pin={pin}
                onDelete={handleDelete}
                />
            }}/>

            <Route render={(props) => {
            return <PinList pins={pins}/>
            }} />
        </Switch>
        </>
        </Router>
    )
}


export default PinContainer;