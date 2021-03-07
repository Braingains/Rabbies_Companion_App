import { getAllByAltText } from '@testing-library/dom';
import React, { useEffect } from 'react';

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

    const findPinById = (id) => {
        console.log(id, pins);
        return pins.find((pins) => {
            return pin.id === parseInt(id);
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


      <Route exact path="/pins/:id" render={(props) =>{
        const id = props.match.params.id;
        const pin = findPinById(id);
        return <PinDetail pin={pin}
        onDelete={handleDelete}
          
        />
      }}/>

        <Route render={() => {
        return <PinList pin={pin}/>
      }} />

      </Switch>
      </>
      




    )
}

export default PinContainer;