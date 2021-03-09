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

    const getPinByID = (id) => {
        return pins.find((pin) => {
            return pin.id === parseInt(id);
        });
    }

    // const findByCategoryType = (categoryType) => {
    //     return pins.find((pin) => {
    //         return pin.categoryType === categoryType;
    //     });
    // }
    
    const handleDelete = (id) =>  {
        const request = new Request();
          const url = "/api/pins/" + id
          request.delete(url)
            .then(() => window.location = "/pins")
    }
    
    const handlePost = (pin) => {
        const request = new Request();
        request.post("/api/pins", pin)
           .then(() => window.location = '/pins')
      }
    
    const handleUpdate = (pin) => {
        const request = new Request();
        request.patch('/api/pins/' + pin.id, pin).then(() => {
            window.location = '/pins/' + pin.id
        })
      }

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
        
            <Route exact path="/pins/:id/edit" render={(props) =>{
                const id = props.match.params.id;
                const pin = getPinByID(id);
                return <PinForm pin={pin}
                onUpdate={handleUpdate}
                />
            }}/>

            <Route exact path="/pins/:id" render={(props) => {
                const id = props.match.params.id;
                const pin = getPinByID(id);
                return <PinDetail pin={pin}
                onDelete={handleDelete}
                onUpdate={handleUpdate} 
                />
            }} />

            

            <Route render={() => {
            return <PinList pins={pins}/>
            }} />
        </Switch>
        </>
        </Router>
    )
}


export default PinContainer;