import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import { Icon, L } from "leaflet";
import Request from "../helpers/request";
import MarkerForm from "../components/MarkerForm";
import MarkerDetail from "../components/MarkerDetail";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const photoIcon = new Icon({
  iconUrl: '/camera.svg',
  iconSize: [30, 30]
});

const toiletIcon = new Icon({
  iconUrl: '/toilet.svg',
  iconSize: [30, 30]
});

const attractionIcon = new Icon({
  iconUrl: '/attraction.svg',
  iconSize: [30, 30]
});

function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }
  








function Map() {

  const [pins, setPins] = useState([]);

  const [state, setState] = useState(null);

    useEffect(() => {
        getAllData();
    }, []);

    const getAllData = () => {
        
      console.log("get all data")

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

  const getMarkerByCategory = (category) => {
    return pins.find((pin) => {
      return pin.category === category;
    });
  }

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

    

  //   ('click', () => {
  //     map.setCenter([50.5, 30.5])
  //   })
  //   return null
  // }

//   const map = useMapEvent('click', function(e) {        
//     var popLocation= e.latlng;
//     var popup = L.popup()
//     .setLatLng(popLocation)
//     .setContent('<p>Hello world!<br />This is a nice popup.</p>')
//     .openOn(map);        
// });

// function AddMarkerToClick() {

//   const [markers, setMarkers] = useState([]);

//   const map = useMapEvents({
//     click(e) {
//       const newMarker = e.latlng
//       setMarkers([...markers, newMarker]);
//     },
//   })

    const createMarker = () => {
        console.log("cunt");

    }


  return (
    <Router>
    <>
    <Switch>
      <Route exact path = "/pins/new" render={() =>
      {return <MarkerForm onCreate={handlePost}/>
      }}/>

      {/* <Route exact path="/pins/:id/edit" render={(props) =>{
      const id = props.match.params.id;
      const pin = getPinByID(id);
      return <MarkerForm pin={pin}
      onUpdate={handleUpdate}
      />
      }}/> */}

      <Route exact path="/pins/category/edit" render={(props) =>{
      const category = props.match.params.category;
      const pin = getMarkerByCategory(category);
      return <MarkerForm pin={pin}
      onUpdate={handleUpdate}
      />
      }}/>

      {/* <Route exact path="/pins/:id" render={(props) => {
      const id = props.match.params.id;
      const pin = getPinByID(id);
      return <MarkerDetail pin={pin}
      onDelete={handleDelete}
      onUpdate={handleUpdate} 
      />
      }} /> */}

      <Route exact path="/pins/category" render={(props) => {
      const category = props.match.params.category;
      const pin = getMarkerByCategory(category);
      return <MarkerDetail pin={pin}
      onDelete={handleDelete}
      onUpdate={handleUpdate} 
      />
      }} />

    </Switch>

  <MapContainer 
  center={[56.355233, -4.07513]} 
  zoom={8}
      onclick={() => {
        createMarker()
      }}

  >

  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    
  />


  {pins.map((pin) => {
        return <Marker key={pin.id} position={
               [pin.lat, pin.lng]
          }
          icon={attractionIcon}
          >
            <Popup>
              <MarkerDetail pin={pin}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
              onClick={createMarker} 
              />
            </Popup>
          </Marker>
        })}
    </MapContainer >
    </>
    </Router>
  )
}

export default Map;